import styled, { css } from 'styled-components'
import { Form as DefaultForm } from 'formik'

export const Container = styled.div``

export const Form = styled(DefaultForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin-top: 40px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column;

  &:not(:first-child) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`
export const Label = styled.label`
  color: grey;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Error = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
`

export const Input = styled.input<{ $hasError?: boolean }>`
  border: 1px solid
    ${({ $hasError, theme }) =>
      $hasError ? theme.colors.danger : theme.colors.grey900};
  padding: 10px 14px;

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      color: ${theme.colors.danger};
    `}
`
