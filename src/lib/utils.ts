import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToSection = (Id: string) => {
  const element = document.querySelector(Id)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
