import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

// eslint-disable-next-line react/prop-types
export function NewsTable({ news }) {
  const columns = [
    { field: 'time', headerName: 'Time', width: '10%' },
    { field: 'title', headerName: 'Title', width: '40%' },
    { field: 'url', headerName: 'URL', width: '50%' },
  ];

  // eslint-disable-next-line react/prop-types
  const newsMap = news.map((item) => ({
    ...item,
    time: new Date(item.time).toLocaleTimeString('en-US'),
  }));

  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <DataGrid rows={newsMap} columns={columns} hideFooterPagination autoHeight />
    </div>
  );
}
