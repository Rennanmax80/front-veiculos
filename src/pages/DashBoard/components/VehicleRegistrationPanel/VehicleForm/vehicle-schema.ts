import { z } from 'zod';

const requiredErrorMessage = 'Campo obrigatório';
const nonemptyErrorMessage = 'Não deixe campos vazios';

const vehicleSchema = z
  .object({
    veiculo: z
      .string({ required_error: requiredErrorMessage })
      .toUpperCase(),
    marca: z
      .string({ required_error: requiredErrorMessage })
      .nonempty({ message: nonemptyErrorMessage }),
    ano: z
      .string({ required_error: requiredErrorMessage })
      .nonempty({ message: nonemptyErrorMessage })
      .trim(),
    descricao: z
      .string({ required_error: requiredErrorMessage })
      .nonempty({ message: nonemptyErrorMessage })
      .trim(),
    vendido: z
      .string({ required_error: requiredErrorMessage })
      .nonempty({ message: nonemptyErrorMessage })
      .trim(),
  })
  .required();

export default vehicleSchema;

export type VehicleSchema = z.infer<typeof vehicleSchema>;
