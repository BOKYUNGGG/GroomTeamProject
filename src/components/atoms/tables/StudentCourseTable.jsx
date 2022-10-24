import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useTable, useRowSelect } from 'react-table'
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

const StudentCourseTable = ({ data, columns}) => {
  const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,} = useTable({columns,data,},useRowSelect)

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
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
    </Styles>
  )
}
export default StudentCourseTable