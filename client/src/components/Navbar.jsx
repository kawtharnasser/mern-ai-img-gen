import React from 'react'
import styled from 'styled-components'
import Button from './buttons'
import { AddRounded, ExploreRounded } from '@mui/icons-material'
import { useNavigate, useLocation } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  background-color:rgb(16, 14, 27);
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  font-size: 20px;
  padding: 14px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
  flex-wrap: wrap;       /* ✅ allow content to wrap */
  overflow-x: hidden;    /* ✅ stop horizontal scroll */

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 18px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname.split('/')
  return (
    <Container>
      GenAI
      {path[1] === 'post' ? (
        <Button
          onClick={() => navigate('/')}
          text="Explore Posts"
          leftIcon={
            <ExploreRounded
              style={{
                fontSize: '18px'
              }}
            />
          }
          type="secondary"
        />
      ) : (
        <Button
          onClick={() => navigate('/post')}
          text="Create new post"
          leftIcon={
            <AddRounded
              style={{
                fontSize: '18px'
              }}
            />
          }
        />
      )}
    </Container>
  )
}

export default Navbar
