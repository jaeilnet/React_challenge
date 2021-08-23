import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";


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
        <Section title="Movie Results">{movieResults.map(movie => <span key={movie.id}>{movie.title}</span>)}</Section>)}
        
        {tvResults && tvResults.length > 0 && (
        <Section title="TV Results">{tvResults.map(show => <span key={show.id}>{show.name}</span>)}</Section>)}
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


