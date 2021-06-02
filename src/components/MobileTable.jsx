import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
// eslint-disable-next-line react/prop-types
export function MobileTable({ news }) {
  const [sort, setSort] = useState(true);
  console.log(news)
  return (
    <>
      <div className="mobile__list">
        {news.sort((a, b) =>
          (sort ? a.time - b.time : b.time - a.time)) 
          .map((item) => (
            <div className='mobile__list_item' key={item.id}>
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
    </>
  );
}
