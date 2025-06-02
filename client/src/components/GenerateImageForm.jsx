import React from 'react'
import styled from 'styled-components'
import Button from './buttons'
import TextInput from './TextInput'
import { AutoAwesome, CreateRounded } from '@mui/icons-material'

const Form = styled.div`
  flex: 1;
  min-width: 45%;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    min-width: 100%;
    padding: 12px 10px;
    gap: 24px;
  }
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_Primary};
`
const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_Secondary};
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_Secondary};
`

const Actions = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`

const GenerateImageForm = ({
  post,
  setPost,
  createPostLoading,
  setCreatePostLoading,
  generatedImageLoading,
  setGeneratedImageLoading
}) => {
  const generateImageFun = () => {
    setGeneratedImageLoading(true)
  }
  const createPostFun = () => {
    setCreatePostLoading(true)
  }

  return (
    <Form>
      <Top>
        <Title>Generate Image with prompt</Title>
        <Desc>
          Write your prompt according to the image you want to generate!
        </Desc>
      </Top>
      <Body>
        <TextInput
          label="Author"
          placeholder="Enter your name . . ."
          name="name"
          value={post.name}
          handleChange={(e)=>setPost({...post, name: e.target.value})}
        />
        <TextInput
          label="Image Prompt"
          placeholder="Write a detailed prompt about the image . . ."
          name="name"
          rows="8"
          textArea
          value={post.prompt}
          handleChange={(e)=>setPost({...post, prompt: e.target.value})}
        />
      </Body>
      <Actions>
        <Button text="Generate Image" flex leftIcon={<AutoAwesome />}
        isLoading={generatedImageLoading}
          isDisabled={post.prompt === ""}
          onClick={generateImageFun}
        />

        <Button
          text="Post Image"
          flex
          type="secondary"
          leftIcon={<CreateRounded />}
          isLoading={createPostLoading}
          isDisabled={post.name === "" || post.prompt === "" || post.photo ===""}
          onClick={createPostFun}
        />
      </Actions>
    </Form>
  )
}

export default GenerateImageForm
