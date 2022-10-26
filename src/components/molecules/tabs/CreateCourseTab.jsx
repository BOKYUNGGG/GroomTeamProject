import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { addCreateCourses, deleteAllCreateCourses } from '../../../modules/createCourses'
import CreateCourseForm from '../forms/CreateCourseForm'
const Wrapper = styled.div`
  display : flex;
  align-items : center;
  flex-wrap : wrap ;
`

const PlusBoxWrapper = styled.div`
  margin : 10px;
  width : 480px;
  height : 435px;
  display : flex;
  border : solid 2px var(--smoke);
  width : 416px;
  justify-content : center;
  align-items : center;
  &:hover{
    background-color : #f3f5f7;
  }
`
const CreateCourseTab = () => {
  // redux
  const createCourseInfo = useSelector(state => state.createCoursesReducer)
  const dispatch = useDispatch();
  const dispatchedAdd = () => dispatch(addCreateCourses())
  const dispatchedDeleteAll = () => dispatch(deleteAllCreateCourses())
  useEffect(()=>{dispatchedDeleteAll()}, [])
  const onAddForm = () => {dispatchedAdd()}
  return (
    <Wrapper>
      {
        createCourseInfo.map((element, index)=>
        (<CreateCourseForm key={index} data={element}/>))
      }
      
      <PlusBoxWrapper onClick={onAddForm}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
            <line x1="8" x2="28" y1="18" y2="18" stroke="var(--mint)" strokeWidth="4"/>
            <line x1="18" x2="18" y1="8" y2="28" stroke="var(--mint)" strokeWidth="4"/>
        </svg>
      </PlusBoxWrapper>
    </Wrapper>
  )
}

export default CreateCourseTab