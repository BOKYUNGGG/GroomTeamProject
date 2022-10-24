import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    gap : 4px;
    justify-content : center;
    align-items : center;
    height : 90vh;
    & button{
        background-color : white;
        border-radius : 4px;
        border : solid 2px var(--smoke);
        color : var(--indigo);
        font-size : large;
        width : 256px;
        height : 48px;
    }
    & button:hover{
        border-color : var(--indigo);
    }
`

const HomePage = () => {
    const [login, setLogin] = useState(false)
    const [signin, setSignin] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        if(login){
            console.log("로그인 클릭")
            navigate('/login')
        }
        else if (signin){
            console.log("회원가입 클릭")
            navigate('/signin')
        }

    },[login, signin])
    return (
        <Wrapper>
            <h1>Hello, World</h1>
            <button onClick={()=>{setLogin(!login)}}>Login</button>
            <button onClick={()=>{setSignin(!signin)}}>Sign In</button>
        </Wrapper>
    )
}

export default HomePage