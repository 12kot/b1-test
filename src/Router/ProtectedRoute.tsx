import { ReactElement, Suspense } from 'react';

import { useAuth } from 'context';
import { AppHolder } from 'layouts';
import { Loader } from 'components';

import { EPermissions } from './router.config';

interface IProtectedRoutesProps {
  children: ReactElement;
  permissions: Array<EPermissions>;
}

export const ProtectedRoute = ({ children }: IProtectedRoutesProps): ReactElement | null => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Loader center />;
  }

  return (
    <AppHolder header>
      <Suspense fallback={<Loader center />}>{children}</Suspense>
    </AppHolder>
  );
};
