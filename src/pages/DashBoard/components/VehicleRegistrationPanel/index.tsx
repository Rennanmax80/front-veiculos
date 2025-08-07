import { useQuery } from 'react-query';
import { useState } from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Table from '~/components/Table';
import getVehicles from '~/services/vehicles/getVehicles';
import VehicleTableRow from './VehicleTableRow';
import VehicleAddButton from './VehicleAddButton';

function VehicleRegistrationPanel() {
  const [filtros, setFiltros] = useState({ marca: '', ano: '' });

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['veiculos', filtros],
    queryFn: () => getVehicles(filtros.marca || filtros.ano ? filtros : undefined),
    refetchOnWindowFocus: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFiltros((prev) => ({ ...prev, [name]: value }));
  };

  const limparFiltros = () => {
    setFiltros({ marca: '', ano: '' });
    refetch();
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100%',
        padding: 6,
      }}
    >
      <Stack direction="row" spacing={2} mb={3}>
        <TextField
          label="Marca"
          variant="outlined"
          name="marca"
          value={filtros.marca}
          onChange={handleInputChange}
        />
        <TextField
          label="Ano"
          variant="outlined"
          name="ano"
          value={filtros.ano}
          onChange={handleInputChange}
          type="number"
        />
        <Button variant="contained" onClick={() => refetch()}>
          Aplicar Filtro
        </Button>
        <Button variant="outlined" onClick={limparFiltros}>
          Limpar
        </Button>
      </Stack>

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
          <VehicleAddButton />
          {data && (
            <Table
              styles={{ marginTop: 3, maxHeight: '70vh' }}
              headings={[
                'Id',
                'Ano',
                'Descrição',
                'Marca',
                'Vendido',
                'Veículo',
                'Ações',
              ]}
            >
              {data.map((vehicle) => (
                <VehicleTableRow key={vehicle.id} vehicle={vehicle} />
              ))}
            </Table>
          )}
        </>
      )}
    </Box>
  );
}

export default VehicleRegistrationPanel;
