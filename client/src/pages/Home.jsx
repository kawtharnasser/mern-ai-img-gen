import React from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
import ImageCard from '../components/ImageCard'

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column; /* ✅ 'center' is invalid */
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    /* ✅ needs 'px' */
    padding: 6px 10px;
  }
`

const HeadLine = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`

const Span = styled.div`
  font-size: 30px;
  font-weight: bolder;
  color: rgb(159, 97, 201);
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
`

const CardWrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 640px) (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Home = () => {
  const item = {
    photo:
      'https://th.bing.com/th/id/OIP.zFuBl0D3yaOGPvTveDtRngHaE8?rs=1&pid=ImgDetMain',
    author: 'Kawther',
    prompt: 'HEY Prompt!'
  }
  return (
    <Container>
      <HeadLine>
        Explore popular posts in the community.
        <Span>ⵙ Generated with AI ⵙ</Span>
      </HeadLine>
      <SearchBar />
      <Wrapper>
        <CardWrapper>
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
        </CardWrapper>
      </Wrapper>
    </Container>
  )
}

export default Home
