import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { gql } from '@apollo/client';
import App from '../App';

const USER_QUERY = gql`
  {
    getPlaceTypes
  }
`;
const mocks = [
  {
    request: {
      query: USER_QUERY
    },
    result: {
      data: { getPlaceTypes: ['a', 'b', 'c'] }
    }
  }
];
it('renders without error', async () => {
  const myMock1 = jest.fn();
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App onClickFn={myMock1} mess="hello" />
    </MockedProvider>
  );
  fireEvent.click(screen.getByTestId('count-button'));
  await waitFor(
    () => {
      const menuButton = screen.getByTestId('save-button');
      expect(menuButton.textContent).toEqual('3');
    },
    { timeout: 1000 }
  );
});
