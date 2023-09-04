import type { JSX } from 'react';

import { useContext, useMemo } from 'react';
import TableHeaderCell from '@/components/Core/Table/TableHeaderCell';
import { TableContext } from '@/components/Core/Table/TableWrapper';

interface ITableHead {
  id: number | string;
}

function TableHead({ id }: ITableHead): JSX.Element {
  const { handleSort, header, sortData } = useContext(TableContext);
  return (
    <thead className="c-table-head text-left">
      <tr className="border-semi-10-contrast border-b-solid border-b-[1px]">
        {header?.map(({ label, sortable, type }: never, index: number) => (
          <TableHeaderCell
            currentSortedData={sortData?.index === index ? sortData : null}
            isSortable={sortable}
            key={`tableHeaderCell__${id}__${index}`}
            label={label}
            onSort={(sortDirection: any) => handleSort(index, sortDirection, type)}
          />
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
