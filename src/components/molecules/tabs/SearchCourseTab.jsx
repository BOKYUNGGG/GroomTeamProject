import React from 'react'
import {courseData, courseColumns} from '../../../assets/courseData'
import SearchCourseTable from '../../atoms/tables/SearchCourseTable'
const SearchCourseTab = () => {
  return (
    <div>
      <form>
        <select id="type">
          <option value="TITLE">강의명</option>
          <option value="DEPARTMENT">학과명</option>
          <option value="PROFESSOR">교수명</option>
        </select>
        <select id="semester">
          <option value="SPRING">1학기</option>
          <option value="SUMMER">여름학기</option>
          <option value="FALL">2학기</option>
          <option value="WINTER">겨울학기</option>
        </select>
        <input type="text" placeholder='keyword'></input>
        <input type="text" placeholder='년도'></input>
        <button>검색</button>
      </form>
      <SearchCourseTable data={courseData} columns={courseColumns}></SearchCourseTable>


    </div>
  )
}

export default SearchCourseTab