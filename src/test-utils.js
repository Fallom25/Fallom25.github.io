import { Provider } from "react-redux";
import store from './store';
import { render } from "@testing-library/react";

/**
 * This functions purpose is to wrap the Provider around any component rendered. This is in order to access redux while testing. 
 * '@testing-library/react' is re-exported and so this file should be reference in all test files instead of '@testing-library/react' directly.
 * 
 */

const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

const reduxRender = (ui, options) =>
  render(ui, { wrapper: ReduxProvider, ...options });

export * from '@testing-library/react';
export { reduxRender as render };
