import {
  ALLOWED_CONTACT_FORM_IMAGE_TYPES,
  MAX_CONTACT_FORM_IMAGE_BYTES,
  MAX_CONTACT_FORM_IMAGES,
} from './contact-form.model';

export function validateContactFormFiles(files: File[]): string | undefined {
  if (files.length > MAX_CONTACT_FORM_IMAGES) {
    return `Du kan vedhæfte højst ${MAX_CONTACT_FORM_IMAGES} billeder.`;
  }

  for (const file of files) {
    if (!ALLOWED_CONTACT_FORM_IMAGE_TYPES.includes(file.type as (typeof ALLOWED_CONTACT_FORM_IMAGE_TYPES)[number])) {
      return 'Billeder skal være JPEG, PNG eller WebP.';
    }

    if (file.size > MAX_CONTACT_FORM_IMAGE_BYTES) {
      return 'Hvert billede må højst fylde 2 MB.';
    }
  }

  return undefined;
}
