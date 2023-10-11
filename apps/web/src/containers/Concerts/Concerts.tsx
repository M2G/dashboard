import InfiniteScroll from '@/components/Core/InfiniteScroll';
import TopLineLoading from '@/components/Loading/TopLineLoading';
import NoData from '@/components/NoData';
import { debounce } from 'lodash';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { connect, useDispatch, useSelector } from 'react-redux';

import chunk from './helpers';
import { getConcertsAction } from '@/store/concerts/actions';

function Concerts() {
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
  }>({
    page: 1,
    pageSize: 2,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getConcertsAction({
        page: 1,
        pageSize: 5,
      }),
    );
  }, [dispatch]);

  const concert = useSelector((stateSelector) => stateSelector.concert);

  const [term, setTerm] = useState('');
  const debouncedSearch = useRef(
    debounce(async (filters: string): Promise<void> => {
      console.log('filters filters filters');
    }, 400),
  ).current;

  useEffect(
    () => (): void => {
      debouncedSearch.cancel();
    },
    [debouncedSearch],
  );

  function handleChange({ target: { value = '' } }: { target: { value: string } }): void {
    debouncedSearch(value);
    setTerm(value);
  }
  const loadMore = useCallback(async (d): Promise<void> => {
    console.log('loadMore loadMore loadMore', d);
    setPagination((prevState) => ({
      ...prevState,
      page: prevState.page + 1,
    }));
  }, []);

  // if (loading) return <TopLineLoading />;

  // if (!concerts) return <NoData />;

  const concerts = useMemo(() => chunk(concert?.data?.results, 4), [concert?.data?.results]);

  console.log('concert concert concert concert', concert);

  console.log('concerts concerts concerts concerts', concerts);

  console.log('pagination pagination pagination pagination', pagination);

  return (
    <div className="o-zone c-home">
      <div className="o-grid">
        <input
          aria-label="Search"
          className="form-control c-search-input"
          id="floatingInput"
          name="search"
          onChange={handleChange}
          placeholder="Search"
          type="search"
          value={term}
        />
        <InfiniteScroll
          loading={concert?.loading}
          hasMore={!!concert?.data?.pageInfo?.next}
          onLoadMore={loadMore}>
          {concerts?.map((concert, index: number) => (
            <div className="o-grid__row" key={index}>
              {concert?.map(
                (
                  node: {
                    node: {
                      city: string;
                      concert_id: string;
                      display_name: string;
                      uri: string;
                    };
                  },
                  concertIdx: number,
                ) => (
                  console.log('concert node node node node', node),
                  (
                    <div
                      className="o-col--one-quarter--large o-col--half--medium"
                      key={`${index}_${concertIdx}_${node?.concert_id}`}>
                      <div className="o-cell--one">
                        <div className="max-w-sm rounded-lg border border-gray-200 p-6 shadow dark:border-gray-700 dark:bg-gray-800">
                          <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                              {node?.display_name}
                            </h5>
                          </a>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {node?.city}
                          </p>
                          <a
                            className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            href={node?.uri || ''}>
                            Read more
                            <svg
                              aria-hidden="true"
                              className="ml-2 h-3.5 w-3.5"
                              fill="none"
                              viewBox="0 0 14 10"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                ),
              )}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

const mapStateToProps = (state: { concert: { data: never; loading: boolean } }) => ({
  concert: state.concert.data,
  loading: state.concert.loading,
});

export default connect(mapStateToProps)(Concerts);
