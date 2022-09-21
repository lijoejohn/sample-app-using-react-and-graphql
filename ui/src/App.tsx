import { gql, useLazyQuery } from '@apollo/client';

import './App.css';
import './scss/main.scss';

interface PlaceTypeProps {
  commonName: string;
  lat: string;
  lon: string;
  additionalProperties: [{ key: string; value: string }];
}

interface GetPlaceType {
  getPlaceTypes: [string];
}

interface PlaceType {
  getPlaces: [PlaceTypeProps];
}

const App: React.FC = function () {
  const USE_QUERY = gql`
    {
      getPlaceTypes
    }
  `;

  const USE_QUERY_PLACE = gql`
    query USE_QUERY_PLACE($type: String!) {
      getPlaces(type: $type) {
        commonName
        lat
        lon
      }
    }
  `;

  const [getData, { data }] = useLazyQuery<GetPlaceType>(USE_QUERY);

  const [getPlaceInfo, { data: placeListData }] = useLazyQuery<PlaceType>(USE_QUERY_PLACE);

  const onClickFunction = async () => {
    await getData();
    return true;
  };
  return (
    <div className="App">
      <h1>Sample app using react and graphQl </h1>
      <div className="card">
        <button
          type="button"
          data-testid="count-button"
          className="govuk-button"
          data-module="govuk-button"
          onClick={() => onClickFunction()}>
          Load data from api
        </button>

        <div className="block">
          <div className="left">
            {data?.getPlaceTypes?.length ? (
              <div className="block">
                {data?.getPlaceTypes.map((item) => {
                  return (
                    <div
                      onKeyDown={() => {
                        getPlaceInfo({ variables: { type: item } });
                      }}
                      onClick={() => {
                        getPlaceInfo({ variables: { type: item } });
                      }}
                      tabIndex={0}
                      role="button"
                      aria-pressed="false"
                      className="item"
                      key={item}>
                      {item}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
          <div className="right">
            {placeListData?.getPlaces ? <h2>Places under selected place type </h2> : ''}
            <div className="block">
              {placeListData?.getPlaces.map((item) => {
                return (
                  <span className="place-name" key={item.commonName}>
                    {item.commonName}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
