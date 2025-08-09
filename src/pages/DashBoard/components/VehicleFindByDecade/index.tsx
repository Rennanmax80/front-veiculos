import { useQuery } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';

import Table from '~/components/Table';
import getVehiclesByDecade from '~/services/vehicles/getVehiclesByDecade';
import VehicleTableRowByDecade from './VehicleTableRowByDecade';
import { Box, Typography } from '@mui/material';

function VehicleFindByDecade() {

const { data, isLoading } = useQuery({
    queryKey: ['veiculos/estatisticas/por-decada'],
    queryFn: getVehiclesByDecade,
    refetchOnWindowFocus: false,
  });
  
  return (
    <Box sx={{ position: 'relative', minHeight: '100%', padding: 6 }}>
    <Typography
        variant="h5"
        sx={{ marginBottom: 3, fontWeight: 'bold', color: 'black' }}
      >
        Veículos filtrados por década
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
                {data.map((vehicleByDecade) => (
                <VehicleTableRowByDecade
                    key={vehicleByDecade.decada}
                    vehicleByDecade={vehicleByDecade}
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

export default VehicleFindByDecade;
