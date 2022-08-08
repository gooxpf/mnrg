import { AppElement, AppFC } from '../../../../types';

import { AppLayout } from '../AppLayout';

export const AppWrapper: AppFC = (): AppElement => (
  <AppLayout>
    <h1>H1 example</h1>
    <h2>H2 example</h2>
    <h3>H3 example</h3>
    <h4>H4 example</h4>
    <h5>H5 example</h5>
    <h6>H6 example</h6>
    <p>
      Example p tag, lorem ispum
      <span> Test Span</span>
    </p>
    <div>Application</div>
    <button type="button">TEST BUTTON</button>
    <button type="button">TEST BUTTON LONG TEXT</button>
  </AppLayout>
);
