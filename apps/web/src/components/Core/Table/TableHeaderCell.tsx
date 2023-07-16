import clsx from 'clsx';
import styles from './Table.module.scss';

interface ITableHeaderCell {
  currentSortedData: any;
  isSortable: any;
  label: any;
  onSort: any;
}

function TableHeaderCell({ currentSortedData, isSortable, label, onSort }: ITableHeaderCell) {
  const onSortClick = () =>
    onSort(
      !currentSortedData || currentSortedData.direction === 'ascending'
        ? 'descending'
        : 'ascending',
    );

  const sortedClass =
    currentSortedData?.direction === styles.ascending ? styles.ascending : styles.descending;

  return (
    <th className={styles.th}>
      {label}
      {isSortable && (
        <button
          onClick={onSortClick}
          className={clsx(styles.button, `sort-icon ${currentSortedData ? sortedClass : ''}`)}
        />
      )}
    </th>
  );
}

export default TableHeaderCell;
