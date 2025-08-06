import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { Vehicle } from '~/models/Vehicle';
import VehicleDeleteButton from './VehicleDeleteButton';
import VehicleEditButton from './VehicleEditButton';

interface VehicleTableRowProps {
  vehicle: Vehicle;
}

function VehicleTableRow({ vehicle }: VehicleTableRowProps) {
  const { id, ano, descricao, marca, vendido, veiculo } = vehicle;

  console.log(vehicle)

  return (
    <TableRow hover>
      <TableCell>{id}</TableCell>
      <TableCell>{ano}</TableCell>
      <TableCell>{descricao}</TableCell>
      <TableCell>{marca}</TableCell>
      <TableCell>{vendido}</TableCell>
      <TableCell>{veiculo}</TableCell>
      <TableCell sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <VehicleEditButton vehicleId={id} />
        <VehicleDeleteButton vehicleId={id} />
      </TableCell>
    </TableRow>
  );
}

export default VehicleTableRow;
