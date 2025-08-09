import api from '~/lib/axios';
import { Vehicle } from '~/models/Vehicle';

async function getVehiclesByWeek() {
  const response = await api.get<Vehicle[]>('veiculos/registrados/semana');
  return response.data;
}

export default getVehiclesByWeek;