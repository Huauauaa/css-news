import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  .paragraph {
    content-visibility: auto;
    contain-intrinsic-size: 320px;
  }
`

type Props = {}
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility
 * https://github.com/chokcoco/iCSS/issues/185
 * @param param0
 * @returns
 */
function ContentVisibility({}: Props) {
  return (
    <Wrapper>
      {Array.from({ length: 1000 }).map((item, index) => (
        <div key={index} className="paragraph">
          {index}. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
          nam eligendi minus mollitia quisquam doloremque illum praesentium,
          perferendis quidem perspiciatis ad incidunt distinctio, repellendus
          quod. Iure ut id doloremque iusto amet alias molestias, quo optio ad
          commodi dolorem ex odit voluptatum, non officia quod, ipsam modi porro
          vel. Quod, sit.
        </div>
      ))}
    </Wrapper>
  )
}

export default ContentVisibility
