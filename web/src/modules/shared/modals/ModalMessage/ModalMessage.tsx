import { AppElement, AppFC } from '../../../../types';

import { ButtonPrimary } from '../../../../components/shared/buttons';

export const ModalMessage: AppFC = (): AppElement => {
  const handleOk = () => {
    console.log('clicked');
  };

  return (
    <div className="modal-container">
      <h3>Title here</h3>
      <p>Description Here</p>
      <ButtonPrimary
        label="OK"
        onClick={handleOk}
      />
    </div>
  );
};
