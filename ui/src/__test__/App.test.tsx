import { fireEvent, render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { MockedProvider } from '@apollo/client/testing';

import App from '../App';

describe('Test App Entry point', function () {
  it('should have a header tag with Hello world React!', async function () {
    const myMock1 = jest.fn();
    expect.extend(toHaveNoViolations);
    const { container } = render(
      <MockedProvider addTypename={false}>
        <App onClickFn={myMock1} mess="hello" />
      </MockedProvider>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();

    expect(screen.getByTestId('save-button').textContent).toEqual('Hello');
    expect(screen.getByTestId('count-button').textContent).toEqual('count is 0');

    fireEvent.click(screen.getByTestId('count-button'));
    expect(screen.getByTestId('count-button').textContent).toEqual('count is 1');
    expect(myMock1).toHaveBeenCalled();
  });
});
