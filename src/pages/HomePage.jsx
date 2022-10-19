import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import RoundButton from '../components/atoms/buttons/RoundButton'

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    height : 90vh;
`
function reducer(state, action){
    switch(action.type){
        case 'login':
            return {head : "Login", path : "/login"}
        case 'signin':
            return {head : "Sign In", path : "/signin"}
    }
}

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
            <RoundButton onClick={()=>{setLogin(!login)}} value="Login" kind="outlined" size="large"></RoundButton>
            <RoundButton onClick={()=>{setSignin(!signin)}} value="Sign In" kind="outlined" size="large"></RoundButton>
        </Wrapper>
    )
}

export default HomePage