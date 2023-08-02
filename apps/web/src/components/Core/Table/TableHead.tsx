import type { JSX } from 'react';

import styles from '@/components/Core/Table/Table.module.scss';
import TableHeaderCell from '@/components/Core/Table/TableHeaderCell';
import { TableContext } from '@/components/Core/Table/TableWrapper';
import { useContext } from 'react';

interface ITableHead {
  id: number | string;
}

function TableHead({ id }: ITableHead): JSX.Element {
  const { handleSort, header, sortData } = useContext(TableContext);
  return (
    <thead className="c-table-head text-left">
      <tr className={styles.tr}>
        {header?.map(({ label, sortable, type }: any, index: number) => (
          <TableHeaderCell
            currentSortedData={sortData?.index === index ? sortData : null}
            isSortable={sortable}
            key={`tableHeaderCell__${id}__${index}` as any}
            label={label}
            onSort={(sortDirection: any) => handleSort(index, sortDirection, type)}
          />
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
