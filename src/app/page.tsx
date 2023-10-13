import { Sandwich, Carrot, Beef, Apple, Milk, Plus } from 'lucide-react'
import { Select } from '@/components/Select'
import { CategoryOptionContainer } from '@/components/CategoryOptionContainer'

export default function Home() {
  return (
    <div className="z-10 mx-auto -mt-28 max-w-[720px]">
      <nav className="space-y-8">
        <h1 className="w-fit text-title font-bold text-base-gray-100">
          Lista de Compras
        </h1>
        <form className="flex w-full gap-3">
          <div className="group flex flex-col items-start justify-start gap-2">
            <label
              htmlFor="item"
              className="tracking-tag text-tag leading-title text-base-gray-200 group-focus-within:text-product-purple-light"
            >
              Item
            </label>
            <input
              type="text"
              name="item"
              id="item"
              className="tracking-input min-w-[300px] rounded-md border-[1px] border-base-gray-300 bg-base-gray-500 p-3 text-sm leading-4 text-base-gray-100 focus:border-product-purple-light focus:outline-none"
            />
          </div>
          <div className="group flex flex-col items-start justify-start gap-2">
            <label
              htmlFor="quantity"
              className="tracking-tag text-tag leading-title text-base-gray-200 group-focus-within:text-product-purple-light"
            >
              Quantidade
            </label>
            <div className="flex items-center justify-start">
              <input
                type="text"
                name="item"
                id="item"
                className="tracking-input h-full max-w-[80px] rounded-l-md border-[1px] border-base-gray-300 bg-base-gray-500 p-3 text-sm leading-4 text-base-gray-100 focus:border-product-purple-light focus:outline-none"
              />
              <Select
                defaultOption="Un."
                options={['Un.', 'L', 'Kg']}
                className="uppercase"
              />
            </div>
          </div>
          <div className="group flex flex-col items-start justify-start gap-2">
            <label
              htmlFor="item"
              className="tracking-tag text-tag leading-title text-base-gray-200 group-focus-within:text-product-purple-light"
            >
              Categoria
            </label>
            <Select
              defaultOption="Selecione a categoria"
              options={[
                {
                  component: (
                    <CategoryOptionContainer>
                      <Sandwich className="h-4 w-4 text-auxiliary-yellow" />
                      <span className="text-base-gray-800 text-sm leading-4">
                        Padaria
                      </span>
                    </CategoryOptionContainer>
                  ),
                  value: 'Padaria',
                },
                {
                  component: (
                    <CategoryOptionContainer>
                      <Carrot className="h-4 w-4 text-auxiliary-green" />
                      <span className="text-base-gray-800 text-sm leading-4">
                        Legume
                      </span>
                    </CategoryOptionContainer>
                  ),
                  value: 'Legume',
                },
                {
                  component: (
                    <CategoryOptionContainer>
                      <Beef className="h-4 w-4 text-auxiliary-pink" />
                      <span className="text-base-gray-800 text-sm leading-4">
                        Carne
                      </span>
                    </CategoryOptionContainer>
                  ),
                  value: 'Carne',
                },
                {
                  component: (
                    <CategoryOptionContainer>
                      <Apple className="h-4 w-4 text-auxiliary-orange" />
                      <span className="text-base-gray-800 text-sm leading-4">
                        Fruta
                      </span>
                    </CategoryOptionContainer>
                  ),
                  value: 'Fruta',
                },
                {
                  component: (
                    <CategoryOptionContainer>
                      <Milk className="h-4 w-4 text-auxiliary-blue" />
                      <span className="text-base-gray-800 text-sm leading-4">
                        Bebida
                      </span>
                    </CategoryOptionContainer>
                  ),
                  value: 'Bebida',
                },
              ]}
              className="w-[232px] rounded-md border"
            />
          </div>
          <button className="mb-px h-10 w-10 self-end rounded-full bg-product-purple p-2 hover:bg-product-purple-dark">
            <Plus className="h-6 w-6 text-base-gray-100" />
          </button>
        </form>
      </nav>
    </div>
  )
}
