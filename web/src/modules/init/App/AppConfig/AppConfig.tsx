import { AppElement, AppFC } from '../../../../types';
import { useEffectOnce } from '../../../../hooks';

export const AppConfig: AppFC = (): AppElement => {
  const windowResize = () => {
    console.log(window.innerWidth, window.innerHeight);
  };

  useEffectOnce(() => {
    window.addEventListener('resize', windowResize);
    windowResize();
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  });

  return null;
};
