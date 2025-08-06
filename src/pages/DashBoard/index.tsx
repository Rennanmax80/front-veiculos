import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

interface DashBoardProps {
  asideMenu: ReactNode;
}

function DashBoard({ asideMenu }: DashBoardProps) {

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }} component="main">
      <Paper
        sx={{ flex: 1, minHeight: '100%', minWidth: 280, position: 'relative' }}
        elevation={2}
        component="aside"
      >
        {asideMenu}
      </Paper>
      <Box sx={{ flex: 4, minHeight: '100%' }} component="section">
        <Outlet />
      </Box>
    </Box>
  );
}

export default DashBoard;
