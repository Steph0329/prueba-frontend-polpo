import axios from "axios";
import { Categories, Joke } from "../types";
import { z } from "zod";
import { CategoriesSchema, JokeSchema } from "../schema/jokeSchema";

const api = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes',
    timeout: 5000
})

export const getRandomJoke = async () : Promise<Joke> => {
    try {
        const response = await api.get('/random')
        return JokeSchema.parse(response.data)
        
    } catch (error) {
        if (error instanceof z.ZodError) {
            throw new Error('Error al validar los datos del chiste');
        }
        throw new Error('Error al obtener el chiste');
    }
}

export const getJokeByCategory = async (category: string) : Promise<Joke> => {
    try {
        const response = await api.get(`/random?category=${category}`)
        return JokeSchema.parse(response.data)
    } catch (error) {
        if (error instanceof z.ZodError) {
            throw new Error('Error al validar los datos del chiste');
        }
        throw new Error('Error al obtener el chiste por categoría');
    }
}

export const getCategories = async () : Promise<Categories> => {
    try {
        const response = await api.get('/categories')
        return CategoriesSchema.parse(response.data)
    } catch (error) {
        if (error instanceof z.ZodError) {
            throw new Error('Error al validar las categorías');
        }
        throw new Error('Error al obtener las categorías');
    }
}

export default api