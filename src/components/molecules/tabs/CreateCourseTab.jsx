import React, {useState} from 'react'
import {departmentList} from '../../../assets/courseData'
import styled from 'styled-components'
const Wrapper = styled.div`
  display : flex;
  align-items : center;
`
const FormWrapper = styled.div`
  & form {
    display : flex;
    flex-direction : column;
    gap : 5px;
    padding : 20px;
    border : solid 2px var(--slate);
  }
  & form div{
    background-color : aqua;
  }
`
const CreateCourseTab = () => {
  const [form, setForm] = useState(null)

  return (
    <Wrapper>
      <FormWrapper>
        Create Course
        <div>
          <button>close</button>  
        </div>
        <form>
          <div>
            <label for="year">Year</label>
            <input name="year" type="text" placeholder='2022'></input>
          </div>
          <div>
            <label for="year">Credit</label>
            <input name="year" type="text" placeholder='3'></input>
          </div>
          <div>
            <label for="semester">Semester</label>
            <select>
              <option value="SPRING">SPRING</option>
              <option value="SUMMER">SUMMER</option>
              <option value="FALL">FALL</option>
              <option value="WINTER">WINTER</option>
            </select>
          </div>
          <div>
            <label for="year">courseId</label>
            <input name="year" type="text" placeholder='year'></input>
          </div>
          <div>
            <label for="year">Capacity</label>
            <input name="year" type="text" placeholder='year'></input>
          </div>
          <div>
            <label for="year">Title</label>
            <input name="year" type="text" placeholder='year'></input>
          </div>
          <div>
            <label for="department">Department</label>
            <select name="department">
              {departmentList.map((element)=>(
                <option value={element}>{element}</option>
              ))}
            </select>
          </div>
          <div>
            <button>Submit</button>
          </div>     
        </form>
      </FormWrapper>
      <div>
        Plus
      </div>
    </Wrapper>
  )
}

export default CreateCourseTab