import React from 'react';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { FormItemProps } from 'types/form';

type DatePickerProps = FormItemProps;

const DatePicker: React.FC<DatePickerProps> = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        render={({
          field: { value, onChange },
          fieldState: { invalid, error },
        }) => (
          <DesktopDatePicker
            label={label}
            inputFormat="MM/dd/yyyy"
            value={value ?? ''}
            onChange={onChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                variant="outlined"
                error={invalid}
                helperText={error?.message}
              />
            )}
          />
        )}
        name={name}
        control={control}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
