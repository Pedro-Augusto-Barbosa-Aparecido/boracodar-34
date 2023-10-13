'use client'

import { ChevronDown, Check } from 'lucide-react'
import { useState, ComponentProps, ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

export type OptionCustomized = {
  value: string
  component: ReactNode
}

export type SelectProps = ComponentProps<'div'> & {
  options: string[] | OptionCustomized[]
  defaultOption?: string
}

export function Select({
  options,
  className,
  defaultOption = '',
  ...rest
}: SelectProps) {
  const [optionSelected, setOption] = useState(defaultOption)
  const [selectIsOpened, setSelectOpen] = useState(false)

  const toggleSelectOpen = () => setSelectOpen((state) => !state)
  const handleSelectOption = (option: string) => {
    if (optionSelected === option) {
      return
    }

    setOption(option)
    setSelectOpen(false)
  }

  return (
    <div
      data-open={selectIsOpened}
      className={twMerge(
        className,
        'tracking-input group relative h-full min-w-[72px] rounded-r-md border-[1px] border-base-gray-300 bg-base-gray-500 text-sm leading-4 text-base-gray-100 focus:border-product-purple-light focus:outline-none data-[open=true]:border-product-purple-light',
      )}
      {...rest}
    >
      <div
        onClick={toggleSelectOpen}
        className="tracking-select-option flex cursor-pointer items-center justify-between gap-2 p-3 text-tag text-base-gray-200"
      >
        <span>{optionSelected}</span>
        <ChevronDown
          className="h-4 w-4 transition-transform duration-500 group-data-[open=true]:rotate-180 group-data-[open=true]:text-product-purple-light"
          strokeWidth={3}
        />
      </div>
      <div className="absolute top-12 z-30 hidden w-full flex-col divide-y-[1px] divide-base-gray-300 overflow-hidden rounded-md border border-base-gray-300 group-data-[open=true]:flex">
        {options.map((option) => {
          const optionText = typeof option === 'string' ? option : option.value

          return (
            <div
              key={String(option)}
              data-selected={option === optionSelected}
              onClick={() => handleSelectOption(optionText)}
              className="tracking-input flex cursor-pointer items-center justify-between bg-base-gray-500 p-3 text-sm leading-4 text-base-gray-100 hover:bg-base-gray-300 data-[selected=true]:bg-base-gray-300"
            >
              {typeof option !== 'string' ? (
                option.component
              ) : (
                <p>{optionText}</p>
              )}
              {optionText === optionSelected && (
                <Check
                  className="h-3 w-3 text-product-purple-light"
                  strokeWidth={3}
                />
              )}
            </div>
          )
        })}
      </div>
      <div
        onClick={toggleSelectOpen}
        className="fixed left-0 top-0 z-20 h-screen w-screen group-data-[open=false]:hidden"
      />
    </div>
  )
}
