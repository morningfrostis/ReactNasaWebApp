import styled, { css } from 'styled-components'
import { Props } from './type'

export const CardUnit = styled.div`
  width: 20%;
  border: 2px solid ${({ theme }) => theme.colors.grey100};
  border-radius: 5px;
  padding: 20px;
  display: inline-block;
  margin: 20px;
`
export const Title = styled.p<{ $type: Props['type'] }>`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  ${({ $type }) =>
    $type === 'rovers' &&
    css`
      color: black;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    `}
`

export const Divider = styled.hr``

export const Description = styled.p`
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

export const CoverImage = styled.img`
  width: 350px;
  height: 550px;
  object-fit: cover;
`

export const BackButton = styled.button`
  position: absolute;
  margin-top: 10px;
  font-family: 'Oswald', sans-serif;
  background-color: #de1212;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: 10px 10px;

  &:hover {
    background-color: #344fe9;
    color: #ffffff;
    box-shadow: 0px 5px #de1212;
    transform: translate(0, -5px);
  }
`
