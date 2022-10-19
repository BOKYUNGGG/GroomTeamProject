import React from 'react'

const TableSearchForm = ({onSubmit}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(event.target.elements.filter.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input name="filter"></input>
            <button>결과 내 검색</button>
        </form>
    )
}

export default TableSearchForm