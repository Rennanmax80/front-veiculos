import api from '~/lib/axios';

import { Vehicle } from '~/models/Vehicle';

async function postVehicle(payload: Omit<Vehicle, 'id'>) {
  console.log('payload enviado:', payload); // veja o que está sendo enviado
  await api.post('/veiculos', payload);
}

export default postVehicle;
