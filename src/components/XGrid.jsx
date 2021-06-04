import * as React from 'react';
import { XGrid } from '@material-ui/x-grid';

const columns = [
  { field: 'time', headerName: 'Time', width: '20%' },
  { field: 'title', headerName: 'Title', width: '40%' },
  { field: 'url', headerName: 'URL', width: '40%' },
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
        onCellClick={(cell) => {
          if (cell.field === 'url') window.open(cell.value, '_blank').focus();
        }}
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
