import React, { useState } from 'react'

import styled from 'styled-components'
import GenerateImageForm from '../components/GenerateImageForm'
import GenerateImageCard from '../components/GenerateImageCard'

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  max-width: 1200px;
  gap: 8%;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`

const CreatePost = () => {
  const [generatedImageLoading, setGeneratedImageLoading] = useState(false) //is it loading or not?

  const [createPostLoading, setCreatePostLoading] = useState(false) //is it loading or not?

  const [post, setPost] = useState({
    name: '',
    prompt: '',
    photo: ''
  })
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm
          post={post}
          setPost={setPost}
          
          createPostLoading={createPostLoading}
          setCreatePostLoading={setCreatePostLoading}

          generatedImageLoading={generatedImageLoading}
          setGeneratedImageLoading={setGeneratedImageLoading}
        />
        <GenerateImageCard src={post?.photo} loading={generatedImageLoading} />
      </Wrapper>
    </Container>
  )
}

export default CreatePost
