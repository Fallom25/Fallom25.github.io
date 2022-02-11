import React from "react";
import ProgressBar from './ProgressBar';
import { render, cleanup } from '../../test-utils';

describe('Testing the ProgressBar component', () => {
  afterEach(cleanup);

  //Arrange
  const { getByTestId } = render(<ProgressBar />);

  const bar = getByTestId('progress-bar-bar');

  it('should increment width by 1 after 1 second', () => {
  });

  it('should stop incrementing when width is 100', () => {
  });
});