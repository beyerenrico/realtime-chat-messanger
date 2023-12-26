import { z } from 'zod';

export const sendMessageValidator = z.object({
  content: z.string().max(2000),
});
