import React from "react"
import { useQuery, gql } from '@apollo/client'
import styled from "styled-components"
import Logo from "../images/logo.png"

// +++++++++++++++++++++++++++++++++++++++++++++++

export default function Index() {
  const { loading, error, data } = useQuery(NERDS)

  if(loading) return 'hurry up dude...'
  if(error) return 'ITS A TRAP ${error.message}'

  return (
    <>
      <Container>
        <img src={Logo} alt="" />
        {/* insert data here: */}
        {data?.getAllNerds?.map((nerd)=>{
          return(
            <div key={nerd.id}>
              <h1>{nerd.name}</h1>
              {nerd.married === true ? 'married mofo': 'lonely'}
            </div>
          )
        })}
      </Container>
    </>
  )
}

// +++++++++++++++++++++++++++++++++++++++++++++
// Add GQL query definition

const NERDS = gql`
query {
  getAllNerds {
    id
    name
    married
  }
}
`

// +++++++++++++++++++++++++++++++++++++++++++++
// styled components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  img {
    height: 200px;
    margin: 20px;
  }
`
