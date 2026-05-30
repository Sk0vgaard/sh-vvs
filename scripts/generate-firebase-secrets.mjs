import { execSync } from 'node:child_process';
import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const secretsPath = join(root, 'src/app/core/firebase.secrets.ts');
const examplePath = join(root, 'src/app/core/firebase.secrets.example.ts');

const ENV_KEYS = {
  apiKey: 'FIREBASE_API_KEY',
  authDomain: 'FIREBASE_AUTH_DOMAIN',
  projectId: 'FIREBASE_PROJECT_ID',
  storageBucket: 'FIREBASE_STORAGE_BUCKET',
  messagingSenderId: 'FIREBASE_MESSAGING_SENDER_ID',
  appId: 'FIREBASE_APP_ID',
};

function parseEnvFile(filePath) {
  if (!existsSync(filePath)) {
    return null;
  }

  const values = {};
  for (const line of readFileSync(filePath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separator = trimmed.indexOf('=');
    if (separator === -1) {
      continue;
    }

    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    values[key] = value;
  }

  return values;
}

function configFromProcessEnv() {
  const config = {};
  for (const [field, envKey] of Object.entries(ENV_KEYS)) {
    const value = process.env[envKey];
    if (!value) {
      return null;
    }
    config[field] = value;
  }
  return config;
}

function configFromDotEnv() {
  const env = parseEnvFile(join(root, '.env.local')) ?? parseEnvFile(join(root, '.env'));
  if (!env) {
    return null;
  }

  const config = {};
  for (const [field, envKey] of Object.entries(ENV_KEYS)) {
    const value = env[envKey];
    if (!value) {
      return null;
    }
    config[field] = value;
  }
  return config;
}

function configFromFirebaseCli() {
  try {
    const projectId = execSync('npx firebase use', {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();

    const appsJson = execSync(`npx firebase apps:list WEB --project ${projectId} --json`, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    const apps = JSON.parse(appsJson);
    const appId = apps?.result?.[0]?.appId;
    if (!appId) {
      return null;
    }

    const sdkJson = execSync(`npx firebase apps:sdkconfig WEB ${appId} --project ${projectId} --json`, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    const parsed = JSON.parse(sdkJson);
    return parsed.result?.sdkConfig ?? parsed.result ?? null;
  } catch {
    return null;
  }
}

function toTsModule(config) {
  const lines = Object.entries(config).map(([key, value]) => `  ${key}: '${value}',`);
  return `import { type FirebaseOptions } from 'firebase/app';

/** Local-only Firebase config. This file is gitignored — do not commit. */
export const firebaseSecrets: FirebaseOptions = {
${lines.join('\n')}
};
`;
}

function writeSecrets(config) {
  writeFileSync(secretsPath, toTsModule(config), 'utf8');
  console.log(`Wrote ${secretsPath}`);
}

const force = process.argv.includes('--force');

if (existsSync(secretsPath) && !force) {
  process.exit(0);
}

const config = configFromProcessEnv() ?? configFromDotEnv() ?? configFromFirebaseCli();

if (config) {
  writeSecrets(config);
  process.exit(0);
}

if (existsSync(examplePath)) {
  copyFileSync(examplePath, secretsPath);
  console.error(
    'Created firebase.secrets.ts from the example template.\n' +
      'Fill in your Firebase values, or run: npm run setup:firebase'
  );
  process.exit(1);
}

console.error(
  'Missing firebase.secrets.ts.\n' +
    'Run: npm run setup:firebase\n' +
    'Or set FIREBASE_* environment variables / .env.local before building.'
);
process.exit(1);
