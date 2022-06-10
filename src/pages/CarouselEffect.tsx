import React from 'react'
import styled from 'styled-components'

interface IContainer {
  s: number
}

const Container = styled.div<IContainer>`
  --h: 36;
  --speed: 0.8s;
  --s: 6;
  width: 300px;
  margin: auto;
  height: calc(var(--h) * 1px);
  line-height: calc(var(--h) * 1px);
  font-size: 20px;
  background: #673ab7;
  color: #fff;
  overflow: hidden;
  ul li {
    flex-shrink: 0;
    width: 100%;
    padding-left: 10px;
    box-sizing: border-box;
  }

  ul {
    animation: move calc(var(--speed) * var(${({ s }) => s}))
      steps(var(${({ s }) => s})) infinite;
  }

  ul li {
    white-space: nowrap;
    cursor: pointer;
    animation: liMove calc(var(--speed)) infinite;
  }

  @keyframes move {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, calc(var(${({ s }) => s}) * var(--h) * -1px));
    }
  }

  @keyframes liMove {
    0% {
      transform: translate(0, 0);
    }
    80%,
    100% {
      transform: translate(0, calc(var(--h) * -1px));
    }
  }
`

type Props = {}

/**
 * https://github.com/chokcoco/iCSS/issues/184
 * @param param0
 * @returns
 */
function CarouselEffect({}: Props) {
  return (
    <Container s={6}>
      <ul>
        <li>Lorem ipsum 1111111</li>
        <li>Lorem ipsum 2222222</li>
        <li>Lorem ipsum 3333333</li>
        <li>Lorem ipsum 4444444</li>
        <li>Lorem ipsum 5555555</li>
        <li>Lorem ipsum 6666666</li>
        <li>Lorem ipsum 1111111</li>
      </ul>
    </Container>
  )
}

export default CarouselEffect
