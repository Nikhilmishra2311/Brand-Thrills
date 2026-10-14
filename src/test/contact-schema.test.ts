import { describe, expect, it } from 'vitest';
import { contactSchema } from '../lib/contact-schema';
const inquiry = { name: 'Test Person', email: 'test@example.com', phone: '+91 90157 56134', company: 'Test company', service: 'ATL & Outdoor', message: 'A new outdoor campaign in Delhi.', website: '' };
describe('Inquiry validation', () => {
  it('accepts a complete advertising inquiry', () => expect(contactSchema.safeParse(inquiry).success).toBe(true));
  it('rejects invalid email addresses', () => expect(contactSchema.safeParse({ ...inquiry, email: 'not-an-email' }).success).toBe(false));
  it('rejects hidden-field spam', () => expect(contactSchema.safeParse({ ...inquiry, website: 'spam' }).success).toBe(false));
});