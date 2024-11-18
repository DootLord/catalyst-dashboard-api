import { z } from 'zod';

const requestPostSchema = z.object({
    value: z.number()
});

interface RequestPost {
    value: number;
}

export { requestPostSchema, RequestPost };