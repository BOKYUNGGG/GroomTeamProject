import React from 'react'
import styled from 'styled-components'

const DropdownMenuItemTip = (props) => {
    // props 비구조화 할당
    const {size} = props
    
    // styled-components Handler
    const setItemSize = (size) =>{
        switch (size) {
            case "large" :
                return "height : 10px;"
            case "medium" :
                return "height : 8px;"
            case "small" :
                return "height : 6px;"
        }
    }

    // styled-components
    const StyledItem = styled.div`
    box-sizing : border-box;
    text-align : center;
    background-color : white;
    ${setItemSize(size)}
`

    return (
        <StyledItem></StyledItem>
    )
}

export default DropdownMenuItemTip