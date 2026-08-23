import { readFileSync } from 'node:fs';
import { join } from 'node:path';

describe('cookie consent CSS loading', () => {
  it('ships vanilla-cookieconsent CSS via global styles, not the lazy JS chunk', () => {
    const styles = readFileSync(join(process.cwd(), 'src/styles.scss'), 'utf8');
    const lazyModule = readFileSync( pect(sexpect(lazyModule).not.toContain('vanilla-cookieconsent/dist/cookieconsent.css');
  });
});''
''