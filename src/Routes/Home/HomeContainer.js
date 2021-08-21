import React from "react"
import { moviesApi } from "../../api";
import HomePresenter from "./HomePresenter"

class HomeContainer extends React.Component{
  state = {
    nowPlaying : null,
    upComing : null,
    popular : null,
    erorr : null,
    loading : true,
  };

  async componentDidMount(){
    try {
      const { data : { results : nowPlaying }} =  await moviesApi.nowPlaying()
      const { data : { result : upComing }} = await moviesApi.upComing()
      const { data : { result : popular}} = await moviesApi.popular()
      this.setState({
        nowPlaying,
        upComing,
        popular,
      })
    } catch (error) {
      this.setState({
        error: "영화정보를 찾지 못했습니다."
      })
    } finally{
      this.setState({
        loading:false
      })
    }
  }

  render(){
    // console.log(this.state)
    const { nowPlaying, upComing, popular, error, loading} = this.state;
    return (
      <HomePresenter 
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        error={error}
        loading={loading}
     />
    )
  }
}

export default HomeContainer