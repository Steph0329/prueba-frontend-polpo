import { useEffect, useState, useRef } from 'react';
import { Categories } from '../types';
import { getCategories } from '../api/axios';

type SelectOptionsProps = {
  onCategoryChange: (category: string) => void
}

const SelectOptions = ({ onCategoryChange }: SelectOptionsProps) => {
  const [categories, setCategories] = useState<Categories>([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLSelectElement>(null)
  
  // Carga las categorías al montar el componente
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories()
        console.log('Categorías:', data)
        setCategories(data)
      } catch (error) {
        console.error('Error al obtener las categorías:', error)
      }
    }
    fetchCategories()
  }, [])

  // Maneja el cambio de categoría y quita el foco del select
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value
    setSelectedCategory(category)
    onCategoryChange(category)
    selectRef.current?.blur()
  }

  return (
    <div className="relative inline-block w-48">
      <select
        ref={selectRef}
        value={selectedCategory}
        onChange={handleChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        className={`w-full cursor-pointer rounded-md border bg-[#1f2630] px-4 py-2 pr-8 text-sm font-semibold text-white shadow-md appearance-none transition-all duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-blue-400 ${
          isOpen ? 'border-blue-400' : 'border-gray-600'
        }`}
      >
        <option value="" disabled className="text-gray-400">
          Categorías
        </option>
        <option value="random" className="bg-[#1f2630] text-white">
          Aleatorio
        </option>
        {categories.map((cat) => (
          <option key={cat} value={cat} className="bg-[#1f2630] text-white">
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      {/* Flecha personalizada */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <svg
          className={`h-5 w-5 text-gray-300 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  )
}

export default SelectOptions