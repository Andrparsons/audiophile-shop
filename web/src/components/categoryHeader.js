import React, { useState, useEffect } from "react"
import styled from "styled-components"

const CategoryHeaderContainer = styled.div`
  background-color: var(--darkBG);
  text-align: center;
`

const CategoryTitle = styled.h2`
  color: var(--white);
  padding: 2rem 0;

  @media (min-width: 600px) {
    padding-top: 6.5rem;
    padding-bottom: 6rem;
  }
`

export default function CategoryHeader({ title }) {
  return (
    <CategoryHeaderContainer>
      <CategoryTitle>{title || "Title"}</CategoryTitle>
    </CategoryHeaderContainer>
  )
}
