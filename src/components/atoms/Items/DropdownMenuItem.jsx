import React from 'react'
import styled from 'styled-components'


const DropdownMenuItem = (props) => {
    // props 비구조화 할당
    const {size} = props;

    // styled-components Handler
    const setItemSize = (size) =>{
        switch (size) {
            case "large" :
                return "line-height : 48px; height : 48px; width : 256px; font-size : large;"
            case "medium" :
                return "line-height : 40px; height : 40px; width : 200px; font-size : medium;"
            case "small" :
                return "line-height : 34px; height : 34px; width : 158px; font-size : small;"
        }
    }

    // styled-components
    const StyledItem = styled.div`
        box-sizing : border-box;
        text-align : center;
        ${setItemSize(size)}
        &:hover{
            background-color : var(--smoke);
        }
    `

    return (
        <StyledItem>
            {props.value}
        </StyledItem>
    )
}

export default DropdownMenuItem