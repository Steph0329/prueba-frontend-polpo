import { z } from 'zod';

//Esquema para un chiste (jokes/random)
export const JokeSchema = z.object({
    categories: z.array(z.string()),
    created_at: z.string(),
    icon_url: z.string(),
    id: z.string(),
    updated_at: z.string(),
    url: z.string(),
    value: z.string(),
});

// Esquema para las categorías (/categories)
export const CategoriesSchema = z.array(z.string());