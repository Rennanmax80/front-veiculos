import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { VehicleByDecade } from '~/models/VehicleByDecade';


interface VehicleTableRowByDecadeProps {
  vehicleByDecade: VehicleByDecade;
}

function VehicleTableRowByDecade({ vehicleByDecade }: VehicleTableRowByDecadeProps) {
  const { decada, quantidade } = vehicleByDecade

  console.log(vehicleByDecade)

  return (
    <TableRow hover>
      <TableCell>{decada}</TableCell>
      <TableCell>{quantidade}</TableCell>
      <TableCell sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      </TableCell>
    </TableRow>
  );
}

export default VehicleTableRowByDecade;
