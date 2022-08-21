import React from 'react';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { DatePickerProps } from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { FormItemProps } from 'types/app';

type IDatePickerProps = FormItemProps & Partial<DatePickerProps>;

const DatePicker: React.FC<IDatePickerProps> = ({ name, label, ...props }) => {
  const { control } = useFormContext();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        render={({ field, fieldState: { invalid, error } }) => (
          <DesktopDatePicker
            {...props}
            label={label}
            inputFormat="MM/dd/yyyy"
            {...field}
            value={field.value || ''}
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
