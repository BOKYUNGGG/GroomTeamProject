import React from 'react'
import styled from 'styled-components'
import { useTable } from "react-table"
const Styles = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
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
const ProfessorCourseTable = ({ data, columns}) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({columns, data})
    

  // Render the UI for your table
  return (
    <Styles>
      <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
    </Styles>
  )
}

export default ProfessorCourseTable