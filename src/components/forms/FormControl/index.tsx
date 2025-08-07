import { ReactNode } from 'react';
import {
  useForm,
  FieldValues,
  DeepPartial,
  Control,
  FieldErrors,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema, ZodTypeDef } from 'zod';
import { SxProps, Theme } from '@mui/material';

import Box from '@mui/material/Box';

interface FormControlProps<T extends FieldValues> {
  formValidationSchema: ZodSchema<T, ZodTypeDef, unknown>;
  formId: string;
  defaultValues: DeepPartial<T> | null;
  styles: SxProps<Theme>;
  onSubmit: (data: T) => void;
  render: (
    control: Control<T, unknown>,
    errors: FieldErrors<T>,
    helpers: {
      setValue: UseFormSetValue<T>;
      watch: UseFormWatch<T>;
    }
  ) => ReactNode;
}

function FormControl<T extends FieldValues>({
  formValidationSchema,
  formId,
  defaultValues,
  styles,
  onSubmit,
  render,
}: FormControlProps<T>) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<T>({
    resolver: zodResolver(formValidationSchema),
    ...(defaultValues && { defaultValues }),
  });

  return (
    <Box
      id={formId}
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      sx={styles}
    >
      {render(control, errors, { setValue, watch })}
    </Box>
  );
}

export default FormControl;
