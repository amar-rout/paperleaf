import React, { useState } from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter, useFilters } from 'react-table';
import { BsChevronDoubleLeft, BsChevronLeft, BsChevronRight, BsChevronDoubleRight } from 'react-icons/bs';

const DataTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    gotoPage,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }, // Set initial page size and index
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const handlePageSizeChange = e => {
    setPageSize(Number(e.target.value));
  };

  return (
    <div className='table-responsive'>
      <div className="table-header">
        <input
          type="search"
          value={globalFilter || ''}
          onChange={e => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <table {...getTableProps()} className="datatable">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="header-row">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="data-row">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <BsChevronDoubleLeft />
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <BsChevronLeft />
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          <BsChevronRight />
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          <BsChevronDoubleRight />
        </button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageCount}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: '50px' }}
          />
        </span>
        <select value={pageSize} onChange={handlePageSizeChange}>
          {[10, 25, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DataTable;
