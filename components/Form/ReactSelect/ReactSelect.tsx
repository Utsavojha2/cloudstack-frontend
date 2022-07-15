import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Controller, useFormContext } from 'react-hook-form';
import { FormItemProps } from 'types/app';

interface IReactHookFormSelectProps<T = { label: string; value: string }>
  extends FormItemProps {
  selectOptions: ReadonlyArray<T>;
}

const ReactHookFormSelect: React.FC<IReactHookFormSelectProps> = ({
  name,
  label,
  selectOptions,
}) => {
  const { control } = useFormContext();
  const labelId = `${name}-label`;
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        render={({ field }) => (
          <Select labelId={labelId} label={label} {...field}>
            {selectOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
        name={name}
        control={control}
        defaultValue={selectOptions[0].value}
      />
    </FormControl>
  );
};
export default ReactHookFormSelect;
