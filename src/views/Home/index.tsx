import { FC, useCallback, useEffect, useState } from 'react'
import { getRovers, Rovers } from '../../services/Api/rovers'
import Card from '../../components/Card'

const Home: FC = () => {
  const [roversList, setRoversList] = useState<Rovers[]>([])

  const getRoversList = useCallback(async () => {
    const rovers = await getRovers()
    setRoversList(rovers)
  }, [])

  useEffect(() => {
    getRoversList()
  }, [getRoversList])

  return (
    <div>
      {roversList.map((rover, index) => (
        <Card
          key={index}
          id={rover.id}
          earthDate={rover.earth_date}
          idNasa={rover.idNasa}
          cameraName={rover.camera}
          urlImage={rover.img_src}
        />
      ))}
    </div>
  )
}

export default Home
