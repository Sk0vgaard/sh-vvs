import { type ContactFormImagePayload } from './contact-form.model';
import { validateContactFormFiles } from './contact-form.validator';

export async function filesToImagePayloads(files: File[]): Promise<ContactFormImagePayload[] | string> {
  const validationError = validateContactFormFiles(files);
  if (validationError) {
    return validationError;
  }

  return Promise.all(
    files.map(
      (file) =>
        new Promise<ContactFormImagePayload>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const result = reader.result;
            if (typeof result !== 'string') {
              reject(new Error('Invalid file data'));
              return;
            }

            const commaIndex = result.indexOf(',');
            resolve({
              name: file.name,
              type: file.type,
              dataBase64: commaIndex >= 0 ? result.slice(commaIndex + 1) : result,
            });
          };
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(file);
        })
    )
  );
}
