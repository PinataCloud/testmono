import styles from './ui.module.css';
import Image from '../images/image.svg';
/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div>
      <Image />
      <h1>Welcome to Ui!</h1>
    </div>
  );
}

export default Ui;
