import React from "react"
import { moviesApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends React.Component{
  state = {
    movieResults : null,
    tvResults : null,
    searchTerm : "",
    error : null,
    loading : false,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    if(searchTerm !== ""){
      this.searchByTerm();
    }
  }

  updataTerm = (e) => {
    const { target : { value } } = e
    this.setState({
      searchTerm : value
    })
  }

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading : true })
    try {
      const { data : { results : movieResults }}= await moviesApi.search(searchTerm)
      const { data : { results : tvResults }} = await tvApi.search(searchTerm)
      this.setState ({
        movieResults,
        tvResults
      })
    } catch (error) {
      this.setState({
        error : "결과를 찾을 수 없습니다."
      })
    } finally {
      this.setState({
        loading : false,
      })
    }
  }

  render(){
    const { movieResults, tvResults, searchTerm, loading, error} = this.state;
    // console.log(this.state)
    return(
    <SearchPresenter 
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      error={error}      
      loading ={loading}
      handleSubmit={this.handleSubmit}
      updataTerm = {this.updataTerm}
      />
    )
  }
}

export default SearchContainer;