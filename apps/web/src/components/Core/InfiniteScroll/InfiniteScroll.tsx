import type { JSX, MutableRefObject, ReactNode } from 'react';
import type { DebouncedFunc } from 'lodash';

import { throttle } from 'lodash';
import { useEffect, useMemo, useRef } from 'react';

import TopLineLoading from '@/components/Loading/TopLineLoading';
import { useWindowSize } from '@/hooks';

interface IInfiniteScroll {
  children: ReactNode;
  hasMore?: boolean | null;
  loading: boolean;
  onLoadMore: () => void;
}

function InfiniteScroll({
  children,
  hasMore,
  loading,
  onLoadMore,
}: IInfiniteScroll): 0 | React.JSX.Element {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const isMounted: MutableRefObject<boolean> = useRef(true);
  useEffect(() => {
    const scrollHandler = (): typeof onLoadMore | undefined | void => {
      if (!ref.current) {
        return;
      }

      if (ref.current.scrollTop + ref.current.clientHeight >= ref.current.scrollHeight) {
        // Fix for the issue where the scroll event is triggered multiple times
        if (hasMore && isMounted.current) {
          return onLoadMore();
        }

        isMounted.current = false;
      }
    };
    function debounceScroll(): DebouncedFunc<typeof scrollHandler> {
      // execute the last handleScroll function call, in every 100ms
      return throttle(scrollHandler, 100);
    }

    ref?.current?.addEventListener('scroll', debounceScroll());
    return () => {
      ref?.current?.removeEventListener('scroll', debounceScroll());
    };
  }, [hasMore, onLoadMore]);

  const size = useWindowSize();

  const windowHeight = useMemo(() => size.height - 500, [size.height]);

  if (loading) return <TopLineLoading />;

  console.log('windowHeight', windowHeight);

  return (
    windowHeight && (
      <div
        className={`overflow-x-hidden overflow-y-scroll pb-[500px] h-[${windowHeight}px]`}
        ref={ref}>
        {children}
      </div>
    )
  );
}

export default InfiniteScroll;
