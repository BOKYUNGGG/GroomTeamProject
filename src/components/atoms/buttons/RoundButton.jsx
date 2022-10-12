import React from 'react'
import styled from 'styled-components';

const RoundButton = (props) => {
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


  // styled-components
  const StyledButton = styled.button`
      border-radius : 4px;
      box-sizing : border-box;
      ${setButtonKind(kind)};
      ${setButtonSize(size)};

  `

  return (
    <StyledButton>{props.value}</StyledButton>
  )
}

export default RoundButton