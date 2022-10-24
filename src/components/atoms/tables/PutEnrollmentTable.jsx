import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useTable, useRowSelect } from 'react-table'
const Styles = styled.div`
  width : 1600px;
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
const PutEnrollmentTable = ({ data, columns}) => {
  const {studentId} = useSelector(state=>state.profileReducer)
  // 수강신청 버튼 기능
  const onPutEnrollment = (e, row)=>{
    e.preventDefault();
    var data = JSON.stringify({
      studentId : studentId,
      courseId : parseInt(row.original.courseId),
    })
    console.log(data)
    var config = {
      method: 'put',
      url: '/api/enrolment',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    }
    axios(config)
    .then(()=>{e.target.submit.style = "color : white; background-color : var(--mint);"}) 
    .catch((error)=>{
      console.log(error)
      e.target.submit.style = "color : white; background-color : var(--red);"}
      );
  }

  // react-table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          Header: (<div>신청 버튼</div>),
          Cell: ({ row }) => (
            <form onSubmit={(e)=>{onPutEnrollment(e,row)}}>
              <input name="submit" type="submit" value="submit"></input>
            </form>
          ),
        },
        ...columns,
      ])
    }
  )

  // Render the UI for your table
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
export default PutEnrollmentTable