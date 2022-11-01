import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
  & svg{
    fill : white;
    position : relative;
    top : 2px;
  }
  & svg:hover {
      fill : var(--smoke);
  }
`

const DeleteSvg = ({index, onDelete, id}) => {
  return (
    <Wrapper>
      <svg 
        key={index}
        onClick={onDelete}
        id={id}
        xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
      </svg>
  </Wrapper>
  )
}

export default DeleteSvg