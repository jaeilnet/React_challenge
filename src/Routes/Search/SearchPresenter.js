import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster"


const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all:unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, handleSubmit, loading, error, updataTerm}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input placeholder="검색어를 입력해주세요" value={searchTerm} onChange={updataTerm}></Input>
    </Form>
    {loading ? <Loader /> : (<>
        {movieResults && movieResults.length > 0 && (
        <Section title="Movie Results">{movieResults.map(movie =>    
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
        
        {tvResults && tvResults.length > 0 && (
        <Section title="TV Results">{tvResults.map(show => 
          <Poster 
            Key={show.id}
            id={show.id}
            imageUrl={show.poster_path}
            title={show.original_name}
            rating={show.vote_average}
            year={show.first_air_date && show.first_air_date.substring(0,4)}
        />
        )}</Section>)}

        {error && <Message color="#e74c3c" text={error} />}
        
        {movieResults && tvResults && movieResults.length === 0 && tvResults === 0 && 
        <Message text="검색 결과가 없습니다." color="#95a5a6" />}
    </>)}
  </Container>
)

SearchPresenter.propTypes = {
  movieResults : PropTypes.array,
  tvResults : PropTypes.array,
  loading : PropTypes.bool.isRequired,
  error : PropTypes.string,
  searchTerm : PropTypes.string,
  updataTerm : PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default SearchPresenter


