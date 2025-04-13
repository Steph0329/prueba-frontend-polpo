import { useState } from 'react';
import Button from './Button';
import { Joke } from '../types';
import { getJokeByCategory, getRandomJoke } from '../api/axios';
import SelectOptions from './SelectOptions';

// Componente principal que muestra el chiste y maneja la lógica
const Card = () => {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  // Obtiene un chiste (aleatorio o por categoría)
  const fetchJoke = async (category: string = '') => {
    try {
      const effectiveCategory = category === 'random' ? '' : category
      const data = effectiveCategory
        ? await getJokeByCategory(effectiveCategory)
        : await getRandomJoke()
      setJoke(data)
    } catch (error) {
      console.error('Error al obtener el chiste:', error)
    }
  }

  // Actualiza la categoría seleccionada
  const handleCategoryChange = (category: string) => setSelectedCategory(category)

  // Genera un nuevo chiste basado en la categoría seleccionada
  const handleNewJoke = () => fetchJoke(selectedCategory)

  return (
    <section
      className="mx-auto flex w-full max-w-[90%] flex-col rounded-xl bg-gradient-to-b from-[#1f2630] to-[#19202a] p-4 shadow-lg sm:max-w-[600px] sm:p-6 h-[350px] sm:h-[400px]"
    >
      {/* Selector de categorías */}
      <div className="mb-4">
        <SelectOptions onCategoryChange={handleCategoryChange} />
      </div>

      {/* Contenido del chiste */}
      <div className="flex flex-1 flex-col">
        <h1 className="text-lg font-bold text-white sm:text-xl">Chuck Norris Joke</h1>

        <div className="mt-2 flex-1 max-h-[80px] sm:max-h-[100px]">
          {joke ? (
            <>
              <img
                src={joke.icon_url}
                alt="Chuck Norris icon"
                className="mx-auto mb-2 w-6 sm:w-8"
              />
              <p className="mb-2 text-sm italic text-gray-400 line-clamp-3 sm:text-base">
                {joke.value}
              </p>
              {joke.categories.length > 0 && (
                <p className="text-sm font-bold text-blue-500 sm:text-base">
                  Category:{' '}
                  <span className="text-white">
                    {joke.categories
                      .join(', ')
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </span>
                </p>
              )}
            </>
          ) : (
            <p className="mb-2 text-sm italic text-gray-400 line-clamp-2 sm:line-clamp-3 sm:text-base">
              Selecciona una categoría y haz clic en el botón para generar un chiste
            </p>
          )}
        </div>

        {/* Botón para generar un nuevo chiste */}
        <div className="mt-14 border-t border-gray-600 pt-4 flex justify-center sm:mt-16">
          <Button onClick={handleNewJoke} />
        </div>
      </div>
    </section>
  )
}

export default Card