import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
    & svg:hover {
        fill : var(--indigo);
    }
`
const LeftArrow = (props) => {
  return (
    <Wrapper>
        <svg 
            onClick={props.onClick} disabled={props.disabled}
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--indigo-bluh)" viewBox="0 0 16 16">
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
        </svg>
    </Wrapper>
  )
}

export default LeftArrow