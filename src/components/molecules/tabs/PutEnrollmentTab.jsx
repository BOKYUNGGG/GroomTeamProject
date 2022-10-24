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
const EmptyBox = styled.div`
  width : 100%;
  height : 600px;
  text-align : center;
  line-height : 600px;
`
const PutEnrollmentTab = () => {
  const reservedData = useSelector(state=>state.reservedCoursesReducer)
  console.log(reservedData)
  return (
    <Wrapper>
      {
        !reservedData ? 
        (null) : ( 
          (reservedData.length == 0) ? 
            (<EmptyBox>강의검색 ➙ 관심과목 담기를 진행해주세요. </EmptyBox>) : 
            (<PutEnrollmentTable data={reservedData} columns={courseColumns}/>)
        )
      }
    </Wrapper>
  )
}

export default PutEnrollmentTab