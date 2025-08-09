import api from '~/lib/axios';
import { VehicleByBrand } from '~/models/VehicleByBrand';

async function getVehiclesByBrand() {
  const response = await api.get<VehicleByBrand[]>('veiculos/estatisticas/por-marca');
  return response.data;
}

export default getVehiclesByBrand;