import { AppElement, AppFC } from '../../../../types';

export const AppContent: AppFC = (props): AppElement => {
  const { children } = props;
  return (
    <div className="app-content">
      {
          children
      }
    </div>
  );
};
