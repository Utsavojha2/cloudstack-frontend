import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import { FormItemProps } from 'types/app';

type InputFormProps = TextFieldProps &
  FormItemProps & {
    variant?: 'outlined' | 'filled' | 'standard';
  };

const InputForm: React.FC<InputFormProps> = ({
  type = 'text',
  variant = 'outlined',
  label,
  name,
  ...props
}) => {
  const { control } = useFormContext();

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
            type={type}
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
  );
};

export default InputForm;
