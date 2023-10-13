import { ComponentProps } from 'react'

type CategoryOptionContainerProps = ComponentProps<'div'>

export function CategoryOptionContainer({
  children,
  ...rest
}: CategoryOptionContainerProps) {
  return (
    <div
      className="flex items-center justify-start gap-2 bg-transparent"
      {...rest}
    >
      {children}
    </div>
  )
}
