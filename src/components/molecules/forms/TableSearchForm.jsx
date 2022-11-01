import React from 'react'
import styled from 'styled-components';
const Wrapper = styled.div`
    display : flex;
    flex-direction : row-reverse;
    & form input{
        font-size: medium;
        height : 40px;
    }

`
const TableSearchForm = ({onSubmit}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(event.target.elements.filter.value)
    }
    return (
    <Wrapper>
        <form onSubmit={handleSubmit}>
            <input name="filter" placeholder='결과 내 검색'></input>
            <input type="Submit" value="Submit"></input>
        </form>
    </Wrapper>
    )
}

export default TableSearchForm