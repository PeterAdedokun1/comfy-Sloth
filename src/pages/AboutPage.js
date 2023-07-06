import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title="About" />
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="comfy-sloth" />
      <article>
        <div className="title">
          <h2>Our story</h2>
          <div className="underline"></div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quia esse cumque eaque ex facilis. Velit, molestiae? Corporis repudiandae excepturi necessitatibus voluptatem, commodi, nam suscipit sequi quasi modi autem minima quidem iure ipsa eum vitae ut possimus harum maiores libero omnis aliquid, illum iste in! Nihil qui quae excepturi modi esse et, eveniet dolor blanditiis saepe repellendus vero explicabo eaque! Aperiam eius doloremque suscipit? Harum minus expedita nemo laudantium debitis?</p>
        </div>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
