import { FC, memo } from 'react'
import { Props } from './type'
import { ButtonClass } from './style'

const Button: FC<Props> = ({
  children,
  onClick,
  disabled,
  type = 'button',
}) => {
  return (
    <ButtonClass
      $isDisabled={disabled}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonClass>
  )
}

export default memo(Button)
