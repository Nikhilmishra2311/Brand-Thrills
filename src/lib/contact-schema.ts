import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name.').max(100),
  email: z.string().trim().email('Please enter a valid email address.').max(255),
  phone: z.string().trim().max(30).refine(v => !v || /^[+\d\s()-]{7,30}$/.test(v), 'Please enter a valid phone number.'),
  company: z.string().trim().max(150),
  service: z.enum(['ATL & Outdoor', 'BTL & Activations', 'Innovations', 'Corporate Events', 'Integrated Campaign', 'Not sure yet']),
  message: z.string().trim().min(10, 'Tell us a little more about your project (at least 10 characters).').max(3000),
  website: z.string().max(0, 'Unable to submit this inquiry.').default(''),
});