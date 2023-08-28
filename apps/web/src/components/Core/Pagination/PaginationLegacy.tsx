interface IPagination {
  currentPage: number;
  totalItems: number;
  perPage: number;
  setCurrentPage: (params: any) => {};
}

function Pagination({ currentPage, perPage, setCurrentPage, totalItems }: IPagination) {
  const handleClick = ({
    target: {
      dataset: { id },
    },
  }: {
    target: { dataset: { id: string } };
  }): any => setCurrentPage(parseInt(id, 10));

  const handlePrevClick = (): any => setCurrentPage(currentPage - 1);

  const handleNextClick = (): any => setCurrentPage(currentPage + 1);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / perPage); i += 1) {
    pageNumbers.push(i);
  }

  const displayNumbers = pageNumbers.slice(
    currentPage - 2 > 0 ? currentPage - 2 : 0,
    currentPage + 2,
  );

  console.log('pageNumbers', pageNumbers);
  console.log('currentPage', currentPage);
  console.log('displayNumbers', displayNumbers);

  return (
    <nav aria-label="-1">
      {pageNumbers.length > 1 && (
        <ul className="inline-flex h-10 -space-x-px text-base">
          <li>
            <a
              className={`border-semi-10-contrast ml-0 flex h-10 items-center justify-center rounded-l-lg border px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === 1 ? 'pointer-events-none' : ''
              }`}
              href="#"
              onClick={handlePrevClick}>
              Prev
            </a>
          </li>
          {displayNumbers?.map((number) => (
            <li>
              <a
                className={`border-semi-10-contrast flex h-10 items-center justify-center border px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  currentPage === number
                    ? 'flex h-10 items-center justify-center border px-4 text-blue-600 dark:text-white'
                    : ''
                }`}
                key={number}
                data-id={number}
                href="#"
                onClick={handleClick}>
                {number}
              </a>
            </li>
          ))}
          <li>
            <a
              className={`border-semi-10-contrast flex h-10 items-center justify-center rounded-r-lg border px-4 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === pageNumbers.length ? 'pointer-events-none' : ''
              }`}
              href="#"
              onClick={handleNextClick}>
              Next
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Pagination;
