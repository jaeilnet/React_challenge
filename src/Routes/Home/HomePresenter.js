import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Section from "../../Components/Section"
import Loader from "../../Components/Loader";
import Message from "../../Components/Message"
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, upComing, popular, loading, error}) => loading ? <Loader /> :
  <Container>
    {upComing && upComing.length > 0 && (
    <Section title="UpComing movies">{upComing.map(movie => 
      <Poster 
        Key={movie.id}
        id={movie.id}
        imageUrl={movie.poster_path}
        title={movie.original_title}
        rating={movie.vote_average}
        year={movie.release_date && movie.release_date.substring(0,4)}
        isMovie={true}
      />
    )}</Section>)}

    {nowPlaying && nowPlaying.length > 0 && ( 
    <Section title="NowPlaying movies">{nowPlaying.map(movie => 
      <Poster 
        Key={movie.id}
        id={movie.id}
        imageUrl={movie.poster_path}
        title={movie.original_title}
        rating={movie.vote_average}
        year={movie.release_date && movie.release_date.substring(0,4)}
        isMovie={true}
      />
    )}</Section>)}
    
    {popular && popular.length > 0 && (
    <Section title="Popular movies">{popular.map(movie => 
      <Poster 
        Key={movie.id}
        id={movie.id}
        imageUrl={movie.poster_path}
        title={movie.original_title}
        rating={movie.vote_average}
        year={movie.release_date && movie.release_date.substring(0,4)}
        isMovie={true}
    />
    )}</Section>)}

    {error && <Message color="#e74c3c" text={error} />}
  </Container>

HomePresenter.propTypes = {
  nowPlaying : PropTypes.array,
  upComing : PropTypes.array,
  popular : PropTypes.array,
  loading : PropTypes.bool.isRequired,
  error: PropTypes.string
}

export default HomePresenter


