import api from '~/lib/axios';
import { Vehicle } from '~/models/Vehicle';

async function getVehicles(params?: { marca?: string; ano?: string }) {
  const response = await api.get<Vehicle[]>('/veiculos', { params });
  return response.data;
}

export default getVehicles;