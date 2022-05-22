/* eslint-disable */
import { FunctionComponent, ReactElement } from "react";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
  queries,
  Queries
} from "@testing-library/react";
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer, ApplicationState } from '../store';

// add options initialState and store to the usual
type ExtraOptions = {
  initialState?: ApplicationState;
  store?: ApplicationState;
};

const render = <
  // supports generics for Queries and Container
  // copied types from RTL version
  Q extends Queries = typeof queries,
  C extends Element | DocumentFragment = HTMLElement
  >(
  ui: ReactElement,
  // options argument includes the additional redux options
  options: ExtraOptions & RenderOptions<Q, C> = {}
): // returns the standard result plus a store property
  RenderResult<Q, C> & { store: ApplicationState } => {
  // destructure additional properties from the options and set defaults
  const {
    initialState = undefined,
    store = createStore(rootReducer(), initialState) as any,
    ...renderOptions
  } = options;

  // define a new Wrapper which includes a redux store Provider
  const Wrapper: FunctionComponent = ({ children }: any) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return {
    // call the regular RTL render function
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    // return store alongside the the other return values
    store
  };
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
