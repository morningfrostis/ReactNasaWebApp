import { getToken } from '../Storage/storage'

export type Rovers = {
  id: string
  idNasa: string
  earth_date: string
  camera: string
  img_src: string
}

const BASE_API_URL = 'http://localhost:8000/rovers'

export const getRovers = async () => {
  try {
    const token = getToken()
    const response = await fetch(BASE_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log({ response })
    const data: Rovers[] = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
  return []
}

export const syncRovers = async () => {
  try {
    const token = getToken()
    await fetch('http://localhost:8000/syncApi/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  } catch (error) {
    console.log((error as Error).message)
  }
}

export const removeRovers = async (id: number) => {
  try {
    const token = getToken()
    await fetch(`${BASE_API_URL}/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    })
  } catch (error) {
    console.log((error as Error).message)
  }
}

export const createRovers = async (data: Omit<Rovers, 'id'>) => {
  try {
    const token = getToken()
    await fetch(BASE_API_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.log((error as Error).message)
  }
}

export const updateRovers = async (id: number, data: Partial<Rovers>) => {
  try {
    const token = getToken()
    await fetch(`${BASE_API_URL}/${id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.log((error as Error).message)
  }
}
