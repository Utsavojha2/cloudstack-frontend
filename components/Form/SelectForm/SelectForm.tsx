import React from 'react';
import isObject from 'lodash/isObject';
import isEqual from 'lodash/isEqual';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useFormContext } from 'react-hook-form';
import { FormItemProps } from 'types/app';

interface ISelectOptions {
  label: string;
  value: string;
}

interface SelectFormProps<T> extends FormItemProps {
  selectOptions: Readonly<Array<T>>;
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: T
  ) => React.ReactNode;
}

export default function SelectForm<T extends ISelectOptions>({
  label,
  name,
  selectOptions,
  renderOption = (_props, option) => option.label,
}: SelectFormProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState: { invalid, error } }) => {
        return (
          <Autocomplete
            {...field}
            options={selectOptions}
            getOptionLabel={(option) => {
              if (isObject(option)) return option.label;
              const optValue = selectOptions.find((opt) => opt.value === option) as T;
              return optValue.label;
            }}
            renderOption={renderOption}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                variant="outlined"
                error={invalid}
                helperText={error?.message}
              />
            )}
            onChange={(_, data) => field.onChange(data?.value)}
            isOptionEqualToValue={(option, value) =>
              isEqual(option.value, value.value)
            }
          />
        );
      }}
      name={name}
      control={control}
      defaultValue={null}
    />
  );
}
