import React from 'react'
import { useGlobalFilter, useSortBy, useTable, usePagination, useRowSelect } from 'react-table'
import TableSearchForm from '../../molecules/forms/TableSearchForm'
import RightArrow from '../svgs/RightArrow'
import LeftArrow from '../svgs/LeftArrow'
import styled from 'styled-components'
const Styles = styled.div`
  width : 100%;
  display : flex;
  flex-direction : column;
  align-items : stretch;
  & table {
    
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
  }
  & table td{
    border : solid 1px #ddd;
    padding : 8px;
  }
  & table th{
    border : solid 1px #ddd;
    padding : 8px;
  }
  & table tr:nth-child(even){
    background-color: #f2f2f2;
  }
  & table tr:hover {
    background-color: #ddd;
  }
  & table th{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: var(--indigo);
    color: white;
  }
`
const TableTopWrapper = styled.div`
  display : flex;
  width : 100%;
  height : 40px;
  & select{
    font-size : medium;
  }
  & div{
    flex-grow : 1;
  }
`
const PagenationWrapper = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  font-size : medium;
  & svg:hover {
    fill : var(--indigo);
  }
  & button{
    align-self : flex-end;
  }
`
const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)

function SearchCourseTable({addReserved, columns, data }) {

  // useTable 객체
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable({columns,data,},useGlobalFilter,useSortBy,usePagination,useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

 
  // Render
  return (
    <Styles>
      <TableTopWrapper>
        <select
          value={pageSize}
          onChange={e => {setPageSize(Number(e.target.value))}}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
        </select>
        <div></div>
        <TableSearchForm onSubmit={setGlobalFilter}></TableSearchForm>
      </TableTopWrapper>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <PagenationWrapper>
        <button onClick={()=>{selectedFlatRows.map((element)=>addReserved(element.original))}}>관심과목 담기</button>
        <LeftArrow onClick={() => previousPage()} disabled={!canPreviousPage}/>
        <span>Page{' '}{pageIndex + 1} of {pageOptions.length}</span>
        <RightArrow onClick={() => previousPage()} disabled={!canNextPage}/>
      </PagenationWrapper>
    </Styles>
  )
}
export default SearchCourseTable

