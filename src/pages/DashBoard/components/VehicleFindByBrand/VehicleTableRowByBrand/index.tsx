import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { VehicleByBrand } from '~/models/VehicleByBrand';


interface VehicleTableRowByBrandProps {
  vehicleByBrand: VehicleByBrand;
}

function VehicleTableRowByBrand({ vehicleByBrand }: VehicleTableRowByBrandProps) {
  const { marca, quantidade } = vehicleByBrand

  console.log(vehicleByBrand)

  return (
    <TableRow hover>
      <TableCell>{marca}</TableCell>
      <TableCell>{quantidade}</TableCell>
      <TableCell sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      </TableCell>
    </TableRow>
  );
}

export default VehicleTableRowByBrand;
