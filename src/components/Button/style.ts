import styled, { css } from 'styled-components'

export const ButtonClass = styled.button<{ $isDisabled?: boolean }>`
  font-family: 'Oswald', sans-serif;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white100};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-left: 35px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red100};
    color: ${({ theme }) => theme.colors.white100};
    box-shadow: 0px 5px ${({ theme }) => theme.colors.accent};
    transform: translate(0, -5px);
  }

  ${({ $isDisabled, theme }) =>
    $isDisabled &&
    css`
      background-color: ${theme.colors.grey300};
      cursor: default;
    `};
`
