import { AppElement, AppFC } from '../../../../types';

import { AppHeader } from '../AppHeader';
import { AppLoader } from '../AppLoader';
import { AppModal } from '../AppModal';
import { AppContent } from '../AppContent';

export const AppLayout: AppFC = (props): AppElement => {
  const { children } = props;

  return (
    <div className="app-layout">
      <AppLoader />
      <AppModal />
      <AppHeader />
      <AppContent>
        {
            children
        }
      </AppContent>
    </div>
  );
};
