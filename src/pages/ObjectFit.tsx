import React from 'react'
import logo from '../assets/images/logo.svg'
import styled from 'styled-components'

type Props = {}
interface IWrapper {}

const Wrapper = styled.section<IWrapper>`
  h2 {
    font-family: Courier New, monospace;
    font-size: 1em;
    margin: 1em 0 0.3em;
  }

  img {
    width: 150px;
    height: 100px;
    border: 1px solid #000;
    margin: 10px 0;
  }

  .narrow {
    width: 100px;
    height: 150px;
  }

  .fill {
    object-fit: fill;
  }

  .contain {
    object-fit: contain;
  }

  .cover {
    object-fit: cover;
  }

  .none {
    object-fit: none;
  }

  .scale-down {
    object-fit: scale-down;
  }
`
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
 * @param param0
 * @returns
 */
function ObjectFit({}: Props) {
  return (
    <Wrapper>
      <h2>object-fit: fill</h2>
      <img className="fill" src={logo} alt="MDN Logo" />

      <img className="fill narrow" src={logo} alt="MDN Logo" />

      <h2>object-fit: contain</h2>
      <img className="contain" src={logo} alt="MDN Logo" />

      <img className="contain narrow" src={logo} alt="MDN Logo" />

      <h2>object-fit: cover</h2>
      <img className="cover" src={logo} alt="MDN Logo" />

      <img className="cover narrow" src={logo} alt="MDN Logo" />

      <h2>object-fit: none</h2>
      <img className="none" src={logo} alt="MDN Logo" />

      <img className="none narrow" src={logo} alt="MDN Logo" />

      <h2>object-fit: scale-down</h2>
      <img className="scale-down" src={logo} alt="MDN Logo" />

      <img className="scale-down narrow" src={logo} alt="MDN Logo" />
    </Wrapper>
  )
}

export default ObjectFit
