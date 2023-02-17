import { ReactNode } from 'react'

export type Props = {
  cameraName: string
  cameraId: string
  earthDate: string
  urlImage: string
  listName?: string
  type?: 'list' | 'rovers'
  onClick?: (listName: string) => void
  children?: ReactNode
}
