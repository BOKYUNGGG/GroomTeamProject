import React from 'react';
import styled from 'styled-components';

const RoundInput = (props) => {
  // props 비구조화 할당
  const {size, kind} = props;

  // styled-component Handlers
  const setInputKind = (kind)=>{
      switch (kind) {
          case "normal" :
              return "border : 2px solid var(--smoke);"
          case "error" :
              return "border : 2px solid var(--red);"
      }
  }
  const setInputSize = (size) =>{
      switch (size) {
          case "large" :
            return "font-size : large; height : 48px; padding-left : 12px;"
          case "medium" :
            return "font-size : medium; height : 40px; padding-left : 10px;"
          case "small" :
            return "font-size : small; height : 34px; padding-left : 8px;"
      }
  }


  // styled-components
  const StyledInput = styled.input`
      border-radius : 4px;
      color : var(--slate);
      box-sizing : border-box;
      font-weight : bold;
      ${setInputKind(kind)};
      ${setInputSize(size)};

      &::placeholder{
        color: var(--smoke);
      }
      &:focus{
        outline : none !important;
        border-color: var(--indigo)
      }
  `
  const onChange = e =>{
    const key = e.target.id
    const value = e.target.value
    props.HandleLiftUp(key, value)
  }

  // render
  return (
    <StyledInput 
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={onChange}
    ></StyledInput>
  )
}

export default RoundInput