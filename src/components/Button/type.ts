import type { ReactNode } from 'react'

export type Props = {
  children?: ReactNode
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}
