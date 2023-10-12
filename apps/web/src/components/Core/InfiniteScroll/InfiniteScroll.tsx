import type { JSX, MutableRefObject, ReactNode } from 'react';
import type { DebouncedFunc } from 'lodash';

import { throttle } from 'lodash';
import { useEffect, useMemo, useRef } from 'react';

import TopLineLoading from '@/components/Loading/TopLineLoading';
import { useWindowSize } from '@/hooks';

interface IInfiniteScroll {
  children: ReactNode;
  hasMore: boolean | null;
  loading: boolean;
  onLoadMore: () => void;
}

const LIMIT_SCROLL = 750;
const WAIT = 250;

function InfiniteScroll({
  children,
  hasMore,
  loading,
  onLoadMore,
}: IInfiniteScroll): 0 | JSX.Element {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const isMounted: MutableRefObject<boolean> = useRef(true);
  useEffect(() => {
    const scrollHandler = (): undefined | void => {
      if (!ref.current) {
        return;
      }

      console.log('ref.current.scrollTop', ref.current.scrollTop);
      console.log('ref.current.clientHeight', ref.current.clientHeight);
      if (
        ref.current.scrollTop + ref.current.clientHeight >=
        ref.current.scrollHeight
      ) {
        // Fix for the issue where the scroll event is triggered multiple times
        if (hasMore && isMounted.current) {
          onLoadMore();
          return;
        }

        isMounted.current = false;
      }
    };
    function debounceScroll(): DebouncedFunc<typeof scrollHandler> {
      // execute the last handleScroll function call, in every 100ms
      return throttle(scrollHandler, WAIT);
    }

    ref?.current?.addEventListener('scroll', debounceScroll());
    return () => {
      ref?.current?.removeEventListener('scroll', debounceScroll());
    };
  }, [hasMore, onLoadMore, loading]);

  const size = useWindowSize();

  const windowHeight = useMemo(() => size.height - LIMIT_SCROLL, [size.height]);

  if (loading) return <TopLineLoading />;

  return (
    windowHeight && (
      <div
        className={`overflow-x-hidden overflow-y-scroll pb-[500px] h-[${windowHeight}px]`}
        ref={ref}
        style={{ height: `${windowHeight}px` }}>
        {children}
      </div>
    )
  );
}

export default InfiniteScroll;
