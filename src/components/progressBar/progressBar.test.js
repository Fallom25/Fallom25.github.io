import React from "react";
import ProgressBar from './ProgressBar';
import { render, cleanup } from '../../test-utils';

describe('Testing the ProgressBar component', () => {
  afterEach(cleanup);

  it('should increment width by 1 after 1 second', () => {
    //Arrange
    const { getByTestId } = render(<ProgressBar />);

    const bar = getByTestId('progress-bar-bar');

    //something like
    //expect(bar).toHaveStyle("width: 0%");
    //ACT
    //then increment time by 1 second
    //ASSERT
    //then check stying again ("width: 1%")
  });

  it('should stop incrementing when width is 100', () => {
    //Arrange
    const { getByTestId } = render(<ProgressBar />);

    const bar = getByTestId('progress-bar-bar');

    //something like
    //expect(bar).toHaveStyle("width: 0%");
    //ACT
    //then increment time by 101 second
    //ASSERT
    //then check stying again ("width: 100%")
  });
});