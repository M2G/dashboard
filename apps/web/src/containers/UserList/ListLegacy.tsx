import type { JSX } from 'react';

import PageSize from '@/components/Core/Pagination/PageSize';
import Pagination from '@/components/Core/Pagination/PaginationLegacy';
import TableWrapper from '@/components/Core/Table';

function List({
  count,
  currentPage,
  currentPageSize,
  data,
  header,
  id,
  rows,
  setCurrentPage,
  setCurrentPageSize,
}: any): JSX.Element {
  const perPage = currentPageSize;
  return (
    <>
      <TableWrapper header={header} id={id} rows={rows} />
      <div className="w-100 mt-2 flex items-center justify-end">
        <PageSize currentPageSize={currentPageSize} setCurrentPageSize={setCurrentPageSize} />
        <Pagination
          currentPage={currentPage}
          perPage={perPage}
          setCurrentPage={setCurrentPage}
          totalItems={count}
        />
      </div>
    </>
  );
}

export default List;
