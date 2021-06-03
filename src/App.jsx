import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import Media from 'react-media';
import { getData } from './redux/actions';
import { NewsTable } from './components/NewsTable';
import { MobileTable } from './components/MobileTable';
import { routes } from './redux/utils';
import './App.css';
import { ButtonAppBar } from './components/AppBar';
import InfiniteLoadingGrid from './components/XGrid';

function App() {
  const { pathname } = useLocation();
  const route = pathname.slice(1);
  const { data, canLoadMore } = useSelector((state) => state[route]);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getData(route));
    }, 1000);
  }, [route]);

  if (!data.length) {
    return (
      <LinearProgress />
    );
  }

  return (
    <div className="App">
      <ButtonAppBar route={route} routes={routes} />
      <Media queries={{
        small: '(max-width: 599px)',
        large: '(min-width: 600px)',
      }}
      >
        {(matches) => (
          <>
            {matches.small && (
            <MobileTable
              dispatchData={() => dispatch(getData(route))}
              data={data}
            />
            )}
            {matches.large && (
            <InfiniteLoadingGrid
              dispatchData={() => dispatch(getData(route))}
              data={data}
              canLoadMore={canLoadMore}
            />
            )}
          </>
        )}
      </Media>
    </div>
  );
}

export default App;
