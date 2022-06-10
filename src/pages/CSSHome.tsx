import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {}

const StyledNav = styled.div`
  display: flex;
  gap: 10px;
  a {
    font-size: 1.5rem;
  }
`

function CSSHome({}: Props) {
  return (
    <>
      <StyledNav>
        <Link to="/content-visibility">content visibility</Link>
        <Link to="/carousel-effect">carousel</Link>
      </StyledNav>
    </>
  )
}

export default CSSHome
