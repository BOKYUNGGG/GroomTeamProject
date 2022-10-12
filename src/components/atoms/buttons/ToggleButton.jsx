import React from 'react'
import styled from 'styled-components'

const ToggleButton = (props) => {
    // props 비구조화 할당
    const {size, kind} = props;

    // styled-component Handlers
    const setButtonKind = (kind)=>{
        switch (kind) {
            case "filled" :
                return "background-color : var(--indigo); color : white; border : none;"
            case "outlined" :
                return "background-color : white; color : var(--indigo); border : solid 2px var(--indigo-bluh);"
        }
    }
    const setButtonSize = (size) =>{
        switch (size) {
            case "large" :
                return "height : 48px; width : 256px; font-size : large;"
            case "medium" :
                return "height : 40px; width : 200px; font-size : medium;"
            case "small" :
                return "height : 34px; width : 158px; font-size : small;"
        }
    }
    const setSvg = (size) =>{
        switch (size) {
            case "large" :
                return "right : 28px; width : 16px; height : 16px;"
            case "medium" :
                return "right : 26px; width : 14px; height : 14px;"
            case "small" :
                return "right : 24px; width : 12px; height : 12px;"
        }
    }

    // styled-components
    const Wrapper = styled.div`
        display: flex;
        align-items : center;
    `
    const StyledSvg = styled.svg`
        position : relative;
        fill : var(--indigo);
        ${setSvg(size)};
    `
    const StyledButton = styled.button`
        border-radius : 4px;
        box-sizing : border-box;
        ${setButtonKind(kind)};
        ${setButtonSize(size)};

    `

    // Renderer
    return (
        <Wrapper>
            <StyledButton>{props.value}</StyledButton>
            <StyledSvg xmlns="http://www.w3.org/2000/svg" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </StyledSvg>
        </Wrapper>
    )
}

export default ToggleButton