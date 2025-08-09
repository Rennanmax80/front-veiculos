import { Navigate, Route, Routes } from 'react-router-dom';

import DashBoard from '~/pages/DashBoard';
import AsideMenu from '~/pages/DashBoard/components/AsideMenu';
import VehicleFindByDecade from '~/pages/DashBoard/components/VehicleFindByDecade';
import VehicleRegistrationPanel from '~/pages/DashBoard/components/VehicleRegistrationPanel';

function PrivateRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<DashBoard asideMenu={<AsideMenu />} />}
      >
        <Route path="vehicle-panel" element={<VehicleRegistrationPanel />} />
        <Route path="vehicle-decade" element={<VehicleFindByDecade />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default PrivateRoutes;
