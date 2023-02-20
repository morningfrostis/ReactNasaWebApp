import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Props } from './type'

const mobileBreakpoint = '768px'

export const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 35px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border: none;

  &:hover {
    background-color: #0069d9;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }
`

export const CardUnit = styled.div`
  width: 20%;
  border: 2px solid ${({ theme }) => theme.colors.grey100};
  border-radius: 5px;
  padding: 20px;
  display: inline-block;
  margin: 20px;
  width: 100%; /* agregamos un ancho del 100% para las pantallas pequeñas */

  /* Media queries */

  @media screen and (min-width: ${mobileBreakpoint}) {
    width: 20%; /* para pantallas más grandes, volvemos al ancho original */
    display: inline-block;
  }

  @media (min-width: 768px) {
    width: 30%;
  }

  @media (min-width: 1200px) {
    width: 20%;
  }
`
export const Title = styled.p<{ $type: Props['type'] }>`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-left: 60px;

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
  width: 150px;
  height: 250px;
  object-fit: cover;
  margin-left: 60px;
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
  margin-left: 50px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: #ffffff;
    box-shadow: 0px 5px #de1212;
    transform: translate(0, -5px);
  }
`
