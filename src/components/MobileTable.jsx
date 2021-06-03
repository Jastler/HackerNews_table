import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import InfiniteScroll from 'react-infinite-scroll-component';

export function MobileTable({ data, dispatchData }) {
  const [sort, setSort] = useState(true);

  return (
    <>
      <InfiniteScroll
        dataLength={data.length}
        next={() => setTimeout(() => {
          dispatchData();
        }, 1000)}
        hasMore
        scrollThreshold="20px"
      >
        <div className="mobile__list">
          {data.sort((a, b) => (sort ? a.time - b.time : b.time - a.time))
            .map((item) => (
              <div className="mobile__list_item" key={item.id}>
                {item.title}
              </div>
            ))}
        </div>
        <Button
          className="btn__sort"
          variant="contained"
          onClick={() => setSort(!sort)}
        >
          Sort by Date
        </Button>
      </InfiniteScroll>
    </>
  );
}
