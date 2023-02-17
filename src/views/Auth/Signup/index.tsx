import { Formik, Field } from 'formik'
import { FC, memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button'
import { setToken } from '../../../services/Storage/storage'
import { validationSchema, initialValues } from './constants'
import { Container, Error, Form, Input, InputContainer, Label } from './style'

const Signup: FC = () => {
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

  return (
    <Container>
      <Formik
        validationSchema={validationSchema}
        onSubmit={async (values: typeof initialValues) => {
          try {
            const response = await fetch('http://localhost:8000/auth/signup/', {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify({
                email: values.email,
                password: values.password,
              }),
            })

            if (response.ok) {
              const data = await response.json()
              console.log(data)
              setToken(data.token)
              navigate('/home')
            } else {
              const errorData = await response.json()
              setError(errorData.error)
            }

            // window.location.href = '/home'
          } catch (error) {
            console.error('Error al crear usuario', error)
            setError('Error al registrarse')
          }
        }}
        initialValues={initialValues}
      >
        <Form>
          <Field name="email">
            {({ field, meta }: { field: any; meta: any }) => (
              <InputContainer>
                <Label>Email</Label>
                <Input $hasError={!!meta?.error} type="text" {...field} />
                {!!meta?.error && <Error>{meta.error}</Error>}
              </InputContainer>
            )}
          </Field>
          <Field name="password">
            {({ field, meta }: { field: any; meta: any }) => (
              <InputContainer>
                <Label>Password</Label>
                <Input
                  $hasError={!!meta?.error}
                  {...field}
                  type="password"
                ></Input>
                {meta?.error && <Error>{meta.error}</Error>}
              </InputContainer>
            )}
          </Field>
          <Button type="submit">SignUp</Button>
        </Form>
      </Formik>
    </Container>
  )
}

export default memo(Signup)
