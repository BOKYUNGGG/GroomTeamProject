import React from 'react'
import {courseColumns} from '../../../assets/courseData'
import { useSelector, useDispatch } from 'react-redux'

import PutEnrollmentTable from '../../atoms/tables/PutEnrollmentTable'
const PutEnrollmentTab = () => {


  const reservedData = useSelector(state=>state.reservedCoursesReducer)



  return (
    <div>
      <div>관심과목</div>
      <PutEnrollmentTable data={reservedData.slice(1, reservedData.length)} columns={courseColumns}></PutEnrollmentTable>
    </div>
  )
}

export default PutEnrollmentTab