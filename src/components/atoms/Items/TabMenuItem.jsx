import React from 'react'
import styled from 'styled-components'

// styled-component handler function
const setWrapper  = (selectedId, id, color) => {
    if(selectedId == id){
        return `color : white; background-color : var(--${color});`
    }
    else {
        return `text-decoration: underline; color : var(--${color}); background-color : white;`
    }
}

const TabMenu = ({selectedId, id, value, color, onDelete, onToggle}) => {
    
    // styled components
    const Wrapper = styled.div`
        display : flex;
        align-items : center;
        gap : 10px;
        border : none;
        margin : 10px;
        padding-left : 10px;
        padding-right : 10px;
        font-size : large;
        // border-bottom : solid 2px var(--${color});
        border-radius : 2px;
        ${setWrapper(selectedId, id, color)}
    `
    const StyledSvg = styled.svg`
        fill : white;
        &:hover {
            fill : var(--smoke);
        }
    `
    const onToggleHandler = () => {
        if(selectedId !== id) onToggle(id)
    }
    const onDeleteHandler = () => {
        onDelete(id)
    }

    // render
    return (
        <Wrapper>
            <div onClick={onToggleHandler}>
                {value}
            </div>
            {selectedId == id ? 
                <StyledSvg 
                    onClick={onDeleteHandler}
                    xmlns="http://www.w3.org/2000/svg" 
                    width="10" height="10" viewBox="0 0 16 16"
                    >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </StyledSvg> : null
            }
        </Wrapper>
    )
}

export default TabMenu


