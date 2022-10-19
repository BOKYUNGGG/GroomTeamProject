import React from 'react'

const SearchForm = ({setGlobalFilter}) => {
    // Handler
    // form submit 시 element들의 value값을 props로 받아온 react-table Hook 함수에 전달
    const handleSubmit = (e) =>{
        e.preventDefault();
        setGlobalFilter(e.target.elements.filter.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="filter"></input>
            <button>Search</button>
        </form>
    )
}

export default SearchForm