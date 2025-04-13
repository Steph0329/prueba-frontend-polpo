import { z } from "zod";
import { CategoriesSchema, JokeSchema } from "../schema/jokeSchema";

export type Joke = z.infer<typeof JokeSchema>
export type Categories = z.infer<typeof CategoriesSchema>