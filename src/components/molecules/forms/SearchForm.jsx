import React from 'react'
import styled from 'styled-components';
const Wrapper = styled.div`
    & form input{
        color : red;
    }
`
const SearchForm = ({setGlobalFilter}) => {
    // Handler
    // form submit 시 element들의 value값을 props로 받아온 react-table Hook 함수에 전달
    const handleSubmit = (e) =>{
        e.preventDefault();
        setGlobalFilter(e.target.elements.filter.value)
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <input name="filter" placeholder='검색어'></input>
                <button>Search</button>
            </form>
        </Wrapper>
    )
}

export default SearchForm