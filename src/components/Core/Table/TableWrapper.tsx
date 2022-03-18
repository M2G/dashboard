/*eslint-disable*/
import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';

import {
  arrayOf,
  string,
  number,
  oneOfType,
  shape,
  oneOf,
  bool,
  any,
} from 'prop-types';

import TableHeaderCell from './TableHeaderCell';

const TableWrapper = ({ header, rows, id, className = '' }: any) => {
  const [sortData, setSortData] = useState(null);

  const handleSort = (index: any, sortDirection: string, type: any) => {
    setSortData({
      index,
      direction: sortDirection,
      type,
    } as any);
  };

  const getSortedTable = useMemo(() => {
    if (!sortData) return rows;
    const { index, direction, type } = sortData;

    if (!type || type === 'string') {
      return rows.sort(
        (
          a: { [x: string]: { value: any } },
          b: { [x: string]: { value: string } }
        ) =>
          direction === 'desc'
            ? a[index].value.localeCompare(b[index].value)
            : b[index].value.localeCompare(a[index].value)
      );
    }
    if (type === 'date') {
      return rows.sort(
        (
          a: { [x: string]: { value: number } },
          b: { [x: string]: { value: number } }
        ) =>
          direction === 'asc'
            ? a[index].value - b[index].value
            : b[index].value - a[index].value
      );
    }

    return rows;
  }, [sortData, rows]);

  useEffect(() => {
    // @ts-ignore
    header.forEach(({ defaultSort, type }, index) => {
      if (defaultSort) {
        handleSort(index, 'desc', type);
      }
    });
  }, [header]);

  return (
    <div className={clsx('table-wrapper', className)}>
      <div className={'table-head'}>
        <div className={'table-wrapper-row'}>
          {header.map(({ label, sortable, type }: any, index: string) => (
            <div key={'headerTable' + index} className={'table-wrapper-cell'}>
              <TableHeaderCell
                label={label}
                isSortable={sortable}
                // @ts-ignore
                currentSortedData={sortData?.index === index ? sortData : null}
                onSort={(sortDirection) =>
                  handleSort(index, sortDirection, type)
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className={'table-body'}>
        {getSortedTable.map((row: { display: any }[], indexRow: any) => (
          <div
            key={`bodyTable__${id}__${indexRow}`}
            className={'table-wrapper-row'}
          >
            {row.map(({ display }, indexCol) => (
              <div key={`bodyTable__${id}__${indexRow}__${indexCol}`}>
                {display}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const rowType = shape({
  // @ts-ignore
  display: oneOfType(any).isRequired,
  // @ts-ignore
  value: oneOfType(any).isRequired,
});

const headerRowType = shape({
  label: string.isRequired,
  sortable: bool,
  type: oneOf(['string', 'date']),
  defaultSort: bool,
});

TableWrapper.propTypes = {
  rows: arrayOf(arrayOf(rowType)).isRequired,
  headers: arrayOf(headerRowType).isRequired,
  columnsWidth: arrayOf(number).isRequired,
  id: string.isRequired,
};

export default TableWrapper;
