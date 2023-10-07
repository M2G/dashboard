import InfiniteScroll from '@/components/Core/InfiniteScroll';
import TopLineLoading from '@/components/Loading/TopLineLoading';
import NoData from '@/components/NoData';
import { debounce } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';

import { connect, useDispatch, useSelector } from 'react-redux';

import chunk from './helpers';
import { getConcertsAction } from '@/store/concerts/actions';

function Concerts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConcertsAction());
  }, [dispatch]);

  const { concert: { data: { data } } = {} } = useSelector(({ concert }) => ({
    concert,
  }));

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
  const loadMore = useCallback(async (): Promise<void> => {
    console.log('ok');
  }, []);

  // if (loading) return <TopLineLoading />;

  // if (!concerts) return <NoData />;

  const concerts = data?.results;

  console.log('concert concert concert concert concert', chunk(concerts, 4));

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
        // hasMore={pageInfo?.hasNextPage} loading={loading} onLoadMore={loadMore}
        >
          {(chunk(concerts, 4) || [])?.map((concert, index: number) => (
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
                  }[],
                  concertIdx: number,
                ) => (
                  console.log('concert node node node node', node),
                  (
                    <div
                      className="o-col--one-quarter--large o-col--half--medium"
                      key={`${index}_${concertIdx}_${node?.concert_id}`}>
                      <div className="o-cell--one">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">{node?.display_name}</h5>
                            <p className="card-text">{node?.city}</p>
                            <a className="btn btn-light" href={node?.uri || ''}>
                              Go somewhere
                            </a>
                          </div>
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
