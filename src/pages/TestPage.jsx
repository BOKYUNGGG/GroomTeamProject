import React, {useState} from 'react'

const TestPage = () => {

    const [state, setState] = useState({
        name : ""
    })
    const onChange = (e) =>{
        setState({
            ...state,
            [e.target.id] : e.target.value
        })   
        console.log(state)
    }
  return (
    <div>
        
        <input id="test" onChange={onChange}></input>
    </div>
  )
}

export default TestPage