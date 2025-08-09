import FormControl from '~/components/forms/FormControl';
import InputText from '~/components/forms/InputText';
import vehicleSchema, { VehicleSchema } from './vehicle-schema';
import { MenuItem, TextField } from '@mui/material';

interface VehicleFormProps {
  formId: string;
  defaultValues: Partial<VehicleSchema> | null;
  onSubmit: (data: VehicleSchema) => void;
}

function VehicleForm({ formId, defaultValues, onSubmit }: VehicleFormProps) {
  const handleSubmit = (data: VehicleSchema) => onSubmit(data);

  return (
    <FormControl
      styles={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 2,
      }}
      formId={formId}
      onSubmit={handleSubmit}
      formValidationSchema={vehicleSchema}
      defaultValues={defaultValues}
      render={(control, errors, { setValue, watch }) => (
        <>
          <InputText
            name="ano"
            label="Ano"
            validation={control}
            invalid={!!errors.ano}
            helperText={errors.ano?.message as string}
            margin="none"
            variant="outlined"
          />
          <InputText
            name="descricao"
            label="Descicao"
            validation={control}
            invalid={!!errors.descricao}
            helperText={errors.descricao?.message as string}
            margin="none"
            variant="outlined"
          />
          <InputText
            name="marca"
            label="Marca"
            validation={control}
            invalid={!!errors.marca}
            helperText={errors.marca?.message as string}
            margin="none"
            variant="outlined"
          />
          <TextField
              select
              name="vendido"
              label="Vendido"
              defaultValue={defaultValues?.vendido ?? true}
              onChange={(e) => {
                setValue('vendido', e.target.value === 'false');
              }}
              error={!!errors.vendido}
              helperText={errors.vendido?.message as string}
            >
              <MenuItem value="true">Sim</MenuItem>
              <MenuItem value="false">Não</MenuItem>
            </TextField>
          <InputText
            name="veiculo"
            label="Veiculo"
            validation={control}
            invalid={!!errors.veiculo}
            helperText={errors.veiculo?.message as string}
            margin="none"
            variant="outlined"
          />
        </>
      )}
    />
  );
}

export default VehicleForm;
