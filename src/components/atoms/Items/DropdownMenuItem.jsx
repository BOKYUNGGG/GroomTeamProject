import React from 'react'
import styled from 'styled-components'


const DropdownMenuItem = ({onAdd, size, value}) => {
    // styled-components Handler
    const setItemSize = (size) =>{
        switch (size) {
            case "large" :
                return "line-height : 48px; height : 48px; font-size : large;"
            case "medium" :
                return "line-height : 40px; height : 40px; font-size : medium;"
            case "small" :
                return "line-height : 34px; height : 34px; font-size : small;"
        }
    }

    // styled-components
    const StyledItem = styled.div`
        box-sizing : border-box;  
        text-align : center;
        background-color : white;
        ${setItemSize(size)}
        &:hover{
            background-color : var(--smoke);
        }
    `
    const returnColor = (value) =>{
        if(value=="Search Course") return "indigo"
        else if(value=="Student's Course") return "mint"
        else if(value=="Put Enrollment") return "orange"
        else if(value=="Professor's Course") return "pink"
        else if(value=="Create Enrollment") return "blue"
    }
    const data = {
        value :value,
        color : returnColor(value)
    }

    return (
        <StyledItem onClick={()=>{onAdd(data)}}>
            {value}
        </StyledItem>
    )
}

export default DropdownMenuItem