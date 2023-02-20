import { FC, useCallback, useEffect, useState } from 'react'
import { getRoversById, Rovers } from '../../services/Api/rovers'
import Card from '../../components/Card'

type DetailsProps = {
  id: string
}

const Details: FC<DetailsProps> = ({ id }) => {
  const [rover, setRover] = useState<Rovers | null>(null)

  const getRoverDetails = useCallback(async () => {
    const roverData = await getRoversById(id)
    setRover(roverData)
  }, [id])

  useEffect(() => {
    getRoverDetails()
  }, [getRoverDetails])

  if (!rover) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Card
        id={rover.id}
        earthDate={rover.earth_date}
        idNasa={rover.idNasa}
        cameraName={rover.camera}
        urlImage={rover.img_src}
      />
    </div>
  )
}

export default Details
