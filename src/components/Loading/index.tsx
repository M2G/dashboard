/* eslint-disable */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import TopLineLoading from './TopLineLoading';

export namespace LoadingNS {
  export interface Props {
    isLoading: boolean;
  }
}

// @ts-ignore
const Loading: React.FC<LoadingNS.Props> = ({ isLoading }: boolean) => {
  if (!isLoading) {
    return null;
  }

  return <TopLineLoading />;
};

Loading.displayName = 'Loading';

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
