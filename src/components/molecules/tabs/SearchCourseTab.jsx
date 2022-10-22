import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addSearchedCourses, deleteAllSearchedCourses } from '../../../modules/searchedCourses'
import { addReservedCourses } from '../../../modules/reservedCourses'
import axios from 'axios'
import {courseColumns} from '../../../assets/courseData'
import SearchCourseTable from '../../atoms/tables/SearchCourseTable'
const SearchCourseTab = () => {

  // redux
  const dispatch = useDispatch()
  const addSearchedCoursesInfo = (data) => dispatch(addSearchedCourses(data))
  const deleteAllSearchedCoursesInfo = () => dispatch(deleteAllSearchedCourses())
  const addReserved = (data) => dispatch(addReservedCourses(data))
  const data = useSelector(state=>state.searchedCoursesReducer)

  // onSubmit handler
  const handleOnSubmit = (e) =>{
    e.preventDefault() 
    // REST API 
    deleteAllSearchedCoursesInfo()
    
    axios.get('/course/courses',{
      params : {
        keyword : e.target.keyword.value,
        page : 0,
        semester : e.target.semester.value,
        size : 1000,
        type : e.target.type.value,
        year : e.target.year.value
      }
    }
    )
    .then((res)=>{addSearchedCoursesInfo(res.data)})
    .catch((e)=>{console.log(e)})
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <select name="type">
          <option value="TITLE">강의명</option>
          <option value="DEPARTMENT">학과명</option>
          <option value="PROFESSOR">교수명</option>
        </select>
        <select name="semester">
          <option value="SPRING">1학기</option>
          <option value="SUMMER">여름학기</option>
          <option value="FALL">2학기</option>
          <option value="WINTER">겨울학기</option>
        </select>
        <input name="keyword" type="text" placeholder='keyword'></input>
        <input name="year" type="text" placeholder='년도'></input>
        <button>검색</button>
      </form>
      {
        !data ? 
        (null) : ( 
          (data.length == 0) ? 
            (<div>검색 결과가 없습니다.</div>) : (<SearchCourseTable data={data} columns={courseColumns} addReserved={addReserved}></SearchCourseTable>)
        )
      }
      
      
    </div>
  )
}

export default SearchCourseTab