import FormControl from '~/components/forms/FormControl';
import InputText from '~/components/forms/InputText';
import vehicleSchema, { VehicleSchema } from './vehicle-schema';

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
      render={(control, errors) => (
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
          <InputText
            name="vendido"
            label="Vendido"
            validation={control}
            invalid={!!errors.vendido}
            helperText={errors.vendido?.message as string}
            margin="none"
            variant="outlined"
          />
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
