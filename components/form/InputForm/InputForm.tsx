import React from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { Controller, useFormContext } from 'react-hook-form'

type InputFormProps = TextFieldProps & {
  variant?: 'outlined' | 'filled' | 'standard'
  label: string
  name: string
}

const InputForm: React.FC<InputFormProps> = ({
  variant = 'outlined',
  label,
  name,
  ...props
}) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { invalid, error },
      }) => (
        <>
          <TextField
            onChange={onChange}
            value={value || ''}
            label={label}
            variant={variant}
            error={invalid}
            helperText={error?.message}
            {...props}
          />
        </>
      )}
    />
  )
}

export default InputForm
