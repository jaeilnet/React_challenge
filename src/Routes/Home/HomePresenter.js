import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "../../Components/Section"
import Loader from "../../Components/Loader";
import Error from "../../Components/Error"

const Container = styled.div`
  padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, upComing, popular, loading, error}) => loading ? <Loader /> :
  <Container>
    {upComing && upComing.length > 0 && (
    <Section title="UpComing movies">{upComing.map(movie => <span key={movie.id}>{movie.title}</span>)}</Section>)}

    {nowPlaying && nowPlaying.length > 0 && ( 
    <Section title="NowPlaying movies">{nowPlaying.map(movie => <span key={movie.id}>{movie.title}</span>)}</Section>)}
    
    {popular && popular.length > 0 && (
    <Section title="Popular movies">{popular.map(movie => <span key={movie.id}>{movie.title}</span>)}</Section>)}

    {error && <Error text={error} />}
  </Container>

HomePresenter.propTypes = {
  nowPlaying : PropTypes.array,
  upComing : PropTypes.array,
  popular : PropTypes.array,
  loading : PropTypes.bool.isRequired,
  erorr : PropTypes.string,
}

export default HomePresenter


