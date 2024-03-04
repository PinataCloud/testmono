// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { Ui } from '@react-monorepo/ui';

export function App() {
  return (
    <div>
      <Ui />
      <NxWelcome title="react-monorepo" />
    </div>
  );
}

export default App;
