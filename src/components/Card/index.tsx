import { FC, memo } from 'react'
import type { Props } from './type'
import Button from '../Button'
import { CardUnit, Title, Description, Divider, CoverImage } from './style'

const Card: FC<Props> = ({
  type = 'list',
  cameraName,
  cameraId,
  earthDate,
  urlImage,
  listName,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick && listName) {
      onClick(listName)
    }
  }
  return (
    <CardUnit>
      {type === 'list' && <Title $type={type}>Earth Date: {earthDate}</Title>}
      {type === 'rovers' && (
        <Title $type={type}>Camera Name: {cameraName}</Title>
      )}
      {urlImage && <CoverImage src={urlImage} />}
      <Divider />
      {type === 'rovers' && <Description>Camera Id:: {cameraId}</Description>}
      {type === 'rovers' && <Description>Earth Date: {earthDate}</Description>}
      {type === 'list' && (
        <Button onClick={handleClick}>See photo & data Rover: </Button>
      )}
    </CardUnit>
  )
}

export default memo(Card)
