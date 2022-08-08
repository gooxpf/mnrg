import { AppElement, AppFC } from '../../../../types';

import { LoaderPrimary } from '../../../../components/shared/loaders';

export const AppLoader: AppFC = (): AppElement => (
  <div className="app-loader">
    <div className="container">
      <LoaderPrimary />
    </div>
  </div>
);
