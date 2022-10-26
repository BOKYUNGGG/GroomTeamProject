import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useTable, useRowSelect } from 'react-table'
import { deleteReservedCourses } from '../../../modules/reservedCourses'

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
const Submit = styled.div`
  & form input{
    border : none;
    border-radius : 4px;
    color : white;
    background-color : var(--indigo-bluh);
  }
  & form input:hover{
    background-color : var(--indigo);
  }
`
const Delete = styled.div`
  & form input{
    border : none;
    border-radius : 4px;
    color : white;
    background-color : var(--red-bluh);
  }
  & form input:hover{
    background-color : var(--red);
  }
`
const PutEnrollmentTable = ({ data, columns}) => {
  // redux
  const {studentId} = useSelector(state=>state.profileReducer)
  const dispatch = useDispatch()
  const dispatchedDelete = (data) => dispatch(deleteReservedCourses(data))

  // 수강신청 버튼 기능
  const onPutEnrollment = (e, row)=>{
    e.preventDefault();
    e.target.submit.style = "color : white; background-color : var(--orange);"

    var data = {
      studentId : studentId,
      courseId : row.original.courseId,
    }
    
    var config = {
      method: 'put',
      url: '/enrolment',
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
  // 관심과목 삭제
  const onDeleteReserved = (e, row) =>{
    e.preventDefault();
    dispatchedDelete(row.original.courseId)
  }
  // react-table
  const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,} = useTable({columns,data,}, useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          Header: (<div>신청 버튼</div>),
          Cell: ({ row }) => (
            <div>
              <Submit>
                <form onSubmit={(e)=>{onPutEnrollment(e,row)}}>
                  <input name="submit" type="submit" value="submit"></input>
                </form>
              </Submit>
              <Delete>
                <form onSubmit={(e)=>{onDeleteReserved(e,row)}}>
                  <input name="submit" type="submit" value="delete"></input>
                </form>
              </Delete>
            </div>
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