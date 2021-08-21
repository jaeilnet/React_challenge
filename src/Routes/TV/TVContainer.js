import React from "react"
import { tvApi } from "../../api";
import TVPresenter from "./TVPresenter"

class TVContainer extends React.Component{
  state={
    topRated : null,
    popular : null,
    airingToday : null,
    error : null,
    loading : true,
  };

  async componentDidMount(){
    try {
      const { data : { results : topRated }} = await tvApi.topRated()
      const { data : { results : popular}} = await tvApi.popular()
      const { data : { results : airingToday }} = await tvApi.airingToday()
      this.setState({
        topRated,
        popular,
        airingToday,
      })
    } catch (error) {
      this.setState({
        error : "TV 정보를 찾지 못했습니다."
      })
    } finally{
      this.setState({
        loading:false,
      })
    }
  }

  render(){
    // console.log(this.state)
    const { topRated, popular, airingToday, error, loading} = this.state;
    return(
      <TVPresenter 
        topRated = {topRated}
        popular = {popular}
        airingToday = {airingToday}
        error = {error}
        loading = {loading}
      />
    )
  }
}

export default TVContainer;