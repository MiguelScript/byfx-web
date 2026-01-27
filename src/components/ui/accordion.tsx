'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type AccordionItemProps = {
  value: string
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
}

type AccordionProps = {
  type: 'single' | 'multiple'
  collapsible?: boolean
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  children: React.ReactNode
  className?: string
}

const AccordionContext = React.createContext<{
  value: string | string[]
  onValueChange: (value: string) => void
  type: 'single' | 'multiple'
  collapsible: boolean
}>({
  value: '',
  onValueChange: () => {},
  type: 'single',
  collapsible: false,
})

export function Accordion({
  type = 'single',
  collapsible = false,
  value,
  onValueChange,
  children,
  className,
}: AccordionProps) {
  const [internalValue, setInternalValue] = useState<string | string[]>(
    value || (type === 'multiple' ? [] : '')
  )

  const handleValueChange = (itemValue: string) => {
    if (type === 'single') {
      const newValue = internalValue === itemValue && collapsible ? '' : itemValue
      setInternalValue(newValue)
      onValueChange?.(newValue)
    } else {
      const currentValues = Array.isArray(internalValue) ? internalValue : []
      const newValue = currentValues.includes(itemValue)
        ? currentValues.filter((v) => v !== itemValue)
        : [...currentValues, itemValue]
      setInternalValue(newValue)
      onValueChange?.(newValue)
    }
  }

  return (
    <AccordionContext.Provider
      value={{
        value: value !== undefined ? value : internalValue,
        onValueChange: handleValueChange,
        type,
        collapsible,
      }}
    >
      <div className={cn('w-full', className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({ value, trigger, children, className }: AccordionItemProps) {
  const { value: selectedValue, onValueChange, type } = React.useContext(AccordionContext)

  const isOpen =
    type === 'multiple'
      ? Array.isArray(selectedValue) && selectedValue.includes(value)
      : selectedValue === value

  return (
    <div className={cn('border-b', className)}>
      <div
        className='flex flex-1 items-center justify-between py-4 font-medium transition-all cursor-pointer'
        onClick={() => onValueChange(value)}
      >
        {trigger}
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 transition-transform duration-200 text-ft-gray-600',
            isOpen ? 'rotate-180' : 'rotate-0'
          )}
        />
      </div>
      {isOpen && <div className='overflow-hidden text-base pb-6 pt-2 pl-1'>{children}</div>}
    </div>
  )
}

export function AccordionTrigger({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={className}>{children}</div>
}

export function AccordionContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={className}>{children}</div>
}
