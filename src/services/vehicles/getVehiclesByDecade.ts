import api from '~/lib/axios';
import { VehicleByDecade } from '~/models/VehicleByDecade';

async function getVehiclesByDecade() {
  const response = await api.get<VehicleByDecade[]>('veiculos/estatisticas/por-decada');
  return response.data;
}

export default getVehiclesByDecade;