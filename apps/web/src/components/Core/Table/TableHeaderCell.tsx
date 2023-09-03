import styles from './Table.module.scss';
import Icon from '../Icon';
import IconNames from '../Icon/Icons.types';

interface ITableHeaderCell {
  currentSortedData: any;
  isSortable: any;
  label: any;
  onSort: any;
}

function TableHeaderCell({
  currentSortedData,
  isSortable,
  label,
  onSort,
}: ITableHeaderCell): JSX.Element {
  console.log('RENDERRRRRRRRRR');
  const onSortClick = () =>
    onSort(
      !currentSortedData || currentSortedData.direction === 'ascending'
        ? 'descending'
        : 'ascending',
    );

  const sortedClass =
    currentSortedData?.direction === 'ascending' ? (
      <Icon className="fill-grey-dark w-4 cursor-pointer" icon={IconNames.ARROW_UP} />
    ) : (
      <Icon className="fill-grey-dark w-4 cursor-pointer" icon={IconNames.ARROW_DOWN} />
    );

  console.log('sortedClass sortedClass sortedClass', { sortedClass, currentSortedData });

  return (
    <th className="border-b-0 p-2 pl-0 text-base font-bold">
      {label}
      {isSortable && (
        <button
          onClick={onSortClick}
          className={`sort-icon mb-0 rounded-none border-0 bg-transparent font-bold`}>
          {currentSortedData ? sortedClass : ''}
        </button>
      )}
    </th>
  );
}

export default TableHeaderCell;
