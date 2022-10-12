import React from 'react'
import styled from 'styled-components'

const DropdownMenuItemTip = (props) => {
    // props 비구조화 할당
    const {size} = props
    
    // styled-components Handler
    const setItemSize = (size) =>{
        switch (size) {
            case "large" :
                return "height : 10px; width : 256px;"
            case "medium" :
                return "height : 8px; width : 200px;"
            case "small" :
                return "height : 6px; width : 158px;"
        }
    }

    // styled-components
    const StyledItem = styled.div`
    box-sizing : border-box;
    text-align : center;
    ${setItemSize(size)}
`

    return (
        <StyledItem></StyledItem>
    )
}

export default DropdownMenuItemTip