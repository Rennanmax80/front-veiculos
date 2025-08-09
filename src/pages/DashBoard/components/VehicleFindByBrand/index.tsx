import { useQuery } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';

import Table from '~/components/Table';
import { Box, Typography } from '@mui/material';
import getVehiclesByBrand from '~/services/vehicles/getVehicleByBrand';
import VehicleTableRowByBrand from './VehicleTableRowByBrand';

function VehicleFindByBrand() {

const { data, isLoading } = useQuery({
    queryKey: ['veiculos/estatisticas/por-marca'],
    queryFn: getVehiclesByBrand,
    refetchOnWindowFocus: false,
  });
  
  return (
    <Box sx={{ position: 'relative', minHeight: '100%', padding: 6 }}>
    <Typography
        variant="h5"
        sx={{ marginBottom: 3, fontWeight: 'bold', color: 'black' }}
      >
        Veículos filtrados por Marca
      </Typography>
      {isLoading ? (
        <CircularProgress
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: 'auto',
          }}
        />
      ) : (
        <>
          {data && (
            <>
              <Table
                styles={{ marginTop: 3, maxHeight: '70vh' }}
                headings={['Década', 'Quantidade']}
              >
                {data.map((vehicleByBrand) => (
                <VehicleTableRowByBrand
                    key={vehicleByBrand.marca}
                    vehicleByBrand={vehicleByBrand}
                />
                ))}
              </Table>
            </>
          )}
        </>
      )}
    </Box>
  );
}

export default VehicleFindByBrand;
