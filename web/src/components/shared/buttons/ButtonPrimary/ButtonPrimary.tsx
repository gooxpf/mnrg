import { AppElement, AppFC } from '../../../../types';
import { ButtonBaseInterface } from '../interfaces';

export const ButtonPrimary:AppFC<ButtonBaseInterface> = (props): AppElement => {
  const { children, label } = props;

  return (
    <button
      type="button"
      className="button-primary"
    >
      {children || label}
    </button>
  );
};
