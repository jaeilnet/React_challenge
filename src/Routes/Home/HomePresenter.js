import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "../../Components/Section"

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, upComing, popular, loading, error}) => 
  <Container>
    {nowPlaying && nowPlaying.length > 0 && 
    <Section title="nowPlaying">{nowPlaying.map(movie => movie.title)}</Section>}
    {nowPlaying && nowPlaying.length > 0 && 
    <Section title="nowPlaying">{nowPlaying.map(movie => movie.title)}</Section>}
  </Container>

HomePresenter.propTypes = {
  nowPlaying : PropTypes.array,
  upComing : PropTypes.array,
  popular : PropTypes.array,
  loading : PropTypes.bool.isRequired,
  erorr : PropTypes.string,
}

export default HomePresenter


