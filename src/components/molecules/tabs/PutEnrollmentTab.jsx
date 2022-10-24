import React from 'react'
import {courseColumns} from '../../../assets/courseData'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import PutEnrollmentTable from '../../atoms/tables/PutEnrollmentTable'
const Wrapper = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`
const PutEnrollmentTab = () => {
  const reservedData = useSelector(state=>state.reservedCoursesReducer)
  console.log('reservedData :',reservedData)
  return (
    <Wrapper>
      <PutEnrollmentTable data={reservedData.slice(1, reservedData.length)} columns={courseColumns}></PutEnrollmentTable>
    </Wrapper>
  )
}

export default PutEnrollmentTab