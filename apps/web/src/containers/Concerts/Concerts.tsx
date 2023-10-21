import InfiniteScroll from '@/components/Core/InfiniteScroll';
import TopLineLoading from '@/components/Loading/TopLineLoading';
import NoData from '@/components/NoData';
import { getConcertsAction } from '@/store/concerts/actions';
import { IConcert } from '@/store/concerts/types';

import { debounce } from 'lodash';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Field } from 'ui';
import ConcertList from './ConcertList';
import chunk from './helpers';

const WAIT = 500;

function Concerts() {
  const [state, setState] = useState({ concert: [] });
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
  }>({
    page: 1,
    pageSize: 5,
  });
  const {
    control,
    formState: { errors },
    register,
    watch,
  } = useForm();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getConcertsAction({
        page: 1,
        pageSize: 5,
      }),
    );
  }, [dispatch]);

  const concert = useSelector((stateSelector: any) => stateSelector.concert);

  const debouncedSearch = useRef(
    debounce((filters: string): void => {
      console.log('filters filters filters', filters);
      dispatch(
        getConcertsAction({
          filters,
        }),
      );
    }, WAIT),
  ).current;

  const search = watch('search');

  console.log('----------------------------', search);

  function handleChange(value: string): void {
    debouncedSearch(value);
  }

  useEffect(() => {
    handleChange(search);
    return () => {
      debouncedSearch.cancel();
    };
  }, [search, debouncedSearch]);

  const loadMore = useCallback((): void => {
    setPagination((prevState) => ({
      ...prevState,
      page: prevState.page + 1,
    }));

    console.log(
      'pagination pagination pagination loadMore loadMore loadMore',
      pagination,
    );

    dispatch(
      getConcertsAction({
        page: pagination.page,
        pageSize: 5,
      }),
    );
  }, [dispatch, pagination]);

  // if (loading) return <TopLineLoading />;

  // if (!concerts) return <NoData />;

  useEffect(() => {
    setState(
      (prevState: { concert: IConcert[] }) =>
        ({
          concert:
            concert?.data?.results && prevState?.concert
              ? [...prevState?.concert, ...concert?.data?.results]
              : [],
        } as never),
    );
  }, [concert?.data?.results]);

  const concertList: IConcert[] = useMemo(() => {
    const initialValue = {};
    return Object.values(
      state?.concert?.reduce((obj, item: { datetime: string }) => {
        const id = new Date(item.datetime).getTime();
        return {
          ...obj,
          [id]: item,
        };
      }, initialValue),
    );
  }, [state?.concert]);

  const concerts = useMemo(() => concert?.data, [concert?.data]);

  console.log('concert concert concert concert', concert);

  console.log('concerts concerts concerts concerts', concerts);

  console.log('pagination pagination pagination pagination', pagination);

  console.log('concertList concertList concertList concertList', concertList);

  console.log(
    'hasMore hasMore hasMore hasMore',
    !!concert?.data?.pageInfo?.next,
  );

  return (
    <div className="o-zone c-home">
      <div className="o-grid">
        <div className="flex items-center">
          <label className="sr-only" htmlFor="simple-search">
            Search
          </label>
          <form className="relative w-full">
            <Field
              className="focus:shadow-none;
              mb-2.5 ml-[7px] block w-full rounded-sm
              border-[hsla(0deg,0%,100%,0.1)] border-gray-300 bg-gray-50 bg-transparent text-sm text-[color:var(--color-text-heading)] text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              id="simple-search"
              label="Search branch name..."
              name="search"
              required
              type="text"
              {...{ control, errors, register }}
            />
          </form>
        </div>
        {/*<input
          aria-label="Search"
          className="form-control c-search-input"
          id="floatingInput"
          name="search"
          onChange={handleChange}
          placeholder="Search"
          type="search"
          value={term}
        />*/}
        <InfiniteScroll
          hasMore={!!concerts?.pageInfo?.next}
          loading={concert?.loading}
          onLoadMore={loadMore}>
          {concertList?.length > 0 &&
            chunk(concertList, 4)?.map((nodes, index: number) => (
              <div className="o-grid__row" key={`concert_${index}`}>
                {nodes?.map((node: IConcert, concertIdx: number) => (
                  <ConcertList
                    city={node?.city}
                    display_name={node?.display_name}
                    key={`${index}_${concertIdx}_${node?.concert_id}`}
                    uri={node?.uri}
                  />
                ))}
              </div>
            ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

const mapStateToProps = (state: {
  concert: { data: never; loading: boolean };
}) => ({
  concert: state.concert.data,
  loading: state.concert.loading,
});

export default connect(mapStateToProps)(Concerts);
