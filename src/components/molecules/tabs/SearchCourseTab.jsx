import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { addSearchedCourses, deleteAllSearchedCourses } from '../../../modules/searchedCourses'
import { addReservedCourses } from '../../../modules/reservedCourses'
import axios from 'axios'
import {courseColumns} from '../../../assets/courseData'
import SearchCourseTable from '../../atoms/tables/SearchCourseTable'
const Wrapper = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`
const FormWrapper = styled.div`
  & form{
    display : flex;
    gap : 10px;
    padding : 10px; 
  }
  & form *{
    font-size : large;
    height : 48px;
    background-color : white;
    border : solid 2px var(--smoke);
    border-radius : 4px;
  }
  & form .submit{
    background-color : var(--indigo);
    color : white;
  }
`
const EmptyBox = styled.div`
  width : 100%;
  height : 600px;
  text-align : center;
  line-height : 600px;
`
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
    const params = {
        keyword : e.target.keyword.value,
        page : 0,
        semester : e.target.semester.value,
        size : 1000,
        type : e.target.type.value,
        year : parseInt(e.target.year.value)
    }
    const config = {
      method:"get",
      params : params,
      url: '/course/courses'
    }
    axios(config)
    .then((res)=>{addSearchedCoursesInfo(res.data)})
    .catch((e)=>{
      console.log(e)
      alert(e)})
  }
  
  return (
    <Wrapper>
      <FormWrapper>
        <form onSubmit={handleOnSubmit}>
          <select name="type">
            <option value="TITLE">강의명</option>
            <option value="DEPARTMENT">학과명</option>
            <option value="PROFESSOR">교수명</option>
          </select>
          <select name="year">
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
          <select name="semester">
            <option value="SPRING">1학기</option>
            <option value="SUMMER">여름학기</option>
            <option value="FALL">2학기</option>
            <option value="WINTER">겨울학기</option>
          </select>
          <input name="keyword" type="text" placeholder='keyword'></input>
          <input className='submit' type="submit" value="Submit"></input>
        </form>
      </FormWrapper>
      {
        !data ? 
        (null) : ( 
          (data.length === 0) ? 
            (<EmptyBox>검색 결과가 없습니다.</EmptyBox>) : 
            (<SearchCourseTable data={data} columns={courseColumns} addReserved={addReserved}></SearchCourseTable>)
        )
      }
    </Wrapper>
  )
}

export default SearchCourseTab