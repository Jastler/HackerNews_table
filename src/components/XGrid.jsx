import * as React from 'react';
import { XGrid, GridOverlay } from '@material-ui/x-grid';
import LinearProgress from '@material-ui/core/LinearProgress';

const columns = [
  { field: 'time', headerName: 'Time', width: '10%' },
  { field: 'title', headerName: 'Title', width: '40%' },
  { field: 'url', headerName: 'URL', width: '50%' },
];

export default function InfiniteLoadingGrid({ dispatchData, data, canLoadMore }) {
  const newsMap = data.map((item) => ({
    ...item,
    time: new Date(item.time).toLocaleTimeString('en-US'),
  }));

  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <XGrid
        columns={columns}
        rows={newsMap}
        loading={false}
        onRowsScrollEnd={() => {
          if (canLoadMore) {
            dispatchData();
          }
        }}
        hideFooterPagination
      />
    </div>
  );
}
