import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useFormContext } from 'react-hook-form';
import { FormItemProps } from 'types/app';

interface SelectFormProps<T> extends FormItemProps {
  selectOptions: Readonly<Array<T>>;
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: T
  ) => React.ReactNode;
}

export default function SelectForm<T extends { label: string }>({
  label,
  name,
  selectOptions,
  renderOption = (_props, option) => option.label,
}: SelectFormProps<T>) {
  const { control } = useFormContext();
  return (
    <Controller
      render={(props) => (
        <Autocomplete
          {...props}
          options={selectOptions}
          getOptionLabel={(option) => option.label}
          renderOption={renderOption}
          renderInput={(params) => (
            <TextField {...params} label={label} variant="outlined" />
          )}
          onChange={(_, data) => props.field.onChange(data)}
        />
      )}
      name={name}
      control={control}
    />
  );
}
