import { CircularProgress } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  padding: 16px;
  min-height: 300px; 
  border: 2px dashed ${({ theme }) => theme.yellow || '#FFD700'};
  color: ${({ theme }) => theme.arrow + '80' || '#FFD700'};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.bg || '#1e1e1e'};

  @media (max-width: 768px) {
    width: 100%;
    min-height: 250px;
  }
`

const Image = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  background: ${({ theme }) => theme.black};
`

const GenerateImageCard = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress
            style={{ color: 'inherit', width: '24px', height: '24px' }}
          />
          &nbsp; Generating Your Image . . .
        </>
      ) : (
        <>{src ? <Image src={src}/> : <>Write a prompt to generate an image</>}</>
      )}
    </Container>
  )
}

export default GenerateImageCard
