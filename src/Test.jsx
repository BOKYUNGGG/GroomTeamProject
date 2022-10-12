import React from 'react'
import LoginForm from './components/Forms/LoginForm'
import Counter from './Counter'


function reducer(state, action){
    switch(action.type){
        case "LOADING":
            return{
                loading : true,
                data : null,
                error : null
            }
        case "SUCCESS":
            return{
                loading : false,
                data : action.data,
                error : null
            }
        case "ERROR":
            return{         
                loading : false,
                data : null,
                error : action.error
            }
        default :
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}


const Test = () => {
    

    return (
        <div>
            <Counter></Counter>
            <LoginForm reducer={reducer}></LoginForm>

        </div>
    )
}

export default Test