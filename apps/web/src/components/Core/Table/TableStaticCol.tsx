import type IconNames from '@/components/Core/Icon/Icons.types';
import Action from '@/components/Core/Table/Action';
import styles from './Table.module.scss';

export interface ITableStaticCol {
  actions: [
    {
      action: () => void;
      icon: IconNames | undefined;
      id: string;
    },
  ];
  id?: string | undefined;
  label?: string | undefined;
}

function TableStaticCol({ actions, id, label }: ITableStaticCol): JSX.Element {
  return (
    <div className="tableStaticCol">
      <div className="flex">
        {label && (
          <div className="labelHandler">
            <label id={id}>{label}</label>
          </div>
        )}
        {actions?.length > 0 && Action({ actions })}
      </div>
    </div>
  );
}

export default TableStaticCol;
