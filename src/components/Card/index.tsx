import { FC, memo } from 'react'
import type { Props } from './type'
import {
  CardUnit,
  Title,
  Description,
  Divider,
  CoverImage,
  ButtonLink,
} from './style'
// import { Link } from 'react-router-dom'
// import Button from '../Button'

const Card: FC<Props> = ({
  type = 'list',
  cameraName,
  cameraId,
  earthDate,
  urlImage,
  id,
}) => {
  // listName,
  // onClick,
  // const handleClick = () => {
  //   if (onClick && listName) {
  //     onClick(listName)
  //   }
  // }
  return (
    <CardUnit>
      {type === 'list' && <Title $type={type}>Earth Date: {earthDate}</Title>}
      {type === 'rovers' && (
        <Title $type={type}>Camera Name: {cameraName}</Title>
      )}
      {urlImage && <CoverImage src={urlImage} />}
      <Divider />
      {type === 'rovers' && <Description>Camera Id:: {cameraId}</Description>}
      {/* {type === 'rovers' && <Description>Earth Date: {earthDate}</Description>} */}
      {type === 'list' && (
        // <Link to={`/details/${id}`}>See photo & data Rover: </Link>
        <ButtonLink to={`/details/${id}`}>See photo & data Rover</ButtonLink>
      )}
    </CardUnit>
  )
}

export default memo(Card)
