import InfiniteScroll from '@/components/Core/InfiniteScroll';
import TopLineLoading from '@/components/Loading/TopLineLoading';
import NoData from '@/components/NoData';
import { getConcertsAction } from '@/store/concerts/actions';
import { IConcert } from '@/store/concerts/types';

import { debounce } from 'lodash';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import type { z } from 'zod';

export const formSchema = z.object({
  email: z
    .string()
    .email('Invalid email')
    .min(1, ERROR_TEXT_REQUIRED.ERROR_TEXT_REQUIRED_EMAIL),
  password: z.string().min(1, ERROR_TEXT_REQUIRED.ERROR_TEXT_REQUIRED_PASSWORD),
  // .min(8, 'Password must have more than 8 characters'),
});

type FormSchemaType = z.infer<typeof formSchema>;

import ConcertList from './ConcertList';
import chunk from './helpers';
import {
  ERROR_TEXT_REQUIRED,
  formSchema,
} from '@/components/SigninForm/constants';

const WAIT = 500;

export const INPUT_NAME = {
  EMAIL: 'email',
};

export const INITIAL_VALUES = {
  [INPUT_NAME.EMAIL]: '',
};

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
    formState: { errors, isValid },
    handleSubmit,
    register,
  } = useForm<FormSchemaType>({
    defaultValues: useMemo(
      () => ({
        ...INITIAL_VALUES,
      }),
      [],
    ),
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
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

  const concert = useSelector((stateSelector: any) => stateSelector.concert);

  const [term, setTerm] = useState('');
  const debouncedSearch = useRef(
    debounce(async (filters: string): Promise<void> => {
      console.log('filters filters filters');
    }, WAIT),
  ).current;

  useEffect(
    () => (): void => {
      debouncedSearch.cancel();
    },
    [debouncedSearch],
  );

  function handleChange({
    target: { value = '' },
  }: {
    target: { value: string };
  }): void {
    debouncedSearch(value);
    setTerm(value);
  }

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
  }, [concert?.data]);

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
            <input
              className="focus:shadow-none;
              -ml-px mb-2.5 ml-[7px] block w-full rounded-md rounded-sm border border-b

              border-[hsla(0deg,0%,100%,0.1)] border-gray-300 bg-gray-50 bg-transparent bg-transparent p-2 p-2 pl-10 text-sm text-[color:var(--color-text-heading)] text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              id="simple-search"
              placeholder="Search branch name..."
              required
              type="text"
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
