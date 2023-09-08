import type { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';
import styles from './Background.module.scss';

interface IBackground {
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  show: boolean;
}

function Background({ setIsOpened, show }: IBackground): JSX.Element {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        'invisible fixed left-0 top-0 z-[100] h-full w-full bg-[rgba(0,0,0,0.5)] opacity-0',
        show ? 'visible opacity-100' : '',
      )}
      onClick={() => setIsOpened(false)}
    />
  );
}

export default Background;
