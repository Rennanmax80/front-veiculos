import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Spinner from '~/components/Spinner';

const PrivateRoutes = lazy(() => import('./private.routes'));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <PrivateRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
