import React from 'react'
import styled from 'styled-components'
// A 34
// + 16
// CLEAR 26
const Svg = styled.svg`
    width : 120px;
    height : 58px
`
const A = styled.text`
    font-size : 34px;
    fill : var(--indigo);
`
const Plus = styled.text`
    font-size : 16px;
    font-weight : bold;
    fill : var(--indigo);
`
const Clear = styled.text`
    font-size : 26px;
`

const Logo = () => {
  return (
    <Svg>
        <A x="6" y="40">A</A>
        <Plus x="20" y="18">+</Plus>
        <Clear x="34" y="38">CLEAR</Clear>
    </Svg>
  )
}

export default Logo
