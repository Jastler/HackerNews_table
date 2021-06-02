import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import Media from 'react-media';
import { getData } from './redux/actions';
import { NewsTable } from './components/NewsTable';
import { MobileTable } from './components/MobileTable';
import { useLocation, Link } from "react-router-dom";
import { routes } from './redux/utils';
import './App.css';
import { ButtonAppBar } from './components/AppBar';

function App() {
  const { pathname } = useLocation();
  const route = pathname.slice(1);
  const { data } = useSelector((state) => state[route]);
  const dispatch = useDispatch();

  console.log(pathname)
  useEffect(() => {
    setTimeout(() => {
      dispatch(getData(route));
    }, 1000);
    console.log('render app')
  }, [route]);

  if (!data.length) {
    return (
      <LinearProgress />
    );
  }

  const routeLinks = routes.map((route) => (
    <Link to={route} >{route}</Link>
  ));

  return (
    <div className="App">
        <Media queries={{
          small: '(max-width: 599px)',
          large: '(min-width: 600px)',
        }}
        >
          
          {(matches) => (
            <>
              {matches.small && <ButtonAppBar routeLinks={routeLinks} />}
              {matches.large && (
                <div>
                {routeLinks}
              </div>
              )}
              <InfiniteScroll
                dataLength={data.length}
                next={() => dispatch(getData(route))}
                hasMore
              >
                {matches.small && <MobileTable news={data} />}
                {matches.large && <NewsTable news={data} />}
              </InfiniteScroll>
            </>
          )}
        </Media>
    </div>
  );
}

export default App;
