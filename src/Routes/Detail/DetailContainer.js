import React from "react"
import { moviesApi, tvApi } from "../../api"
import DetailPresenter from "./DetailPresenter"

class DetailContainer extends React.Component{
  constructor(props){
    super(props)
    const { location : { pathname} } = props
    this.state = {
      result: null,
      erorr : null,
      loading: true,
      isMovie : pathname.includes("/movie/")
    }
  };

  async componentDidMount() {
    const { match : { params : {id}}, history : { push }, location : { pathname }} = this.props
    const { isMovie } = this.state
    const parsedId = parseInt(id);
    if (isNaN(parsedId)){
      return push("/")
    }
    let result = null
    try {
      if(isMovie){
        ({ data : result } = await moviesApi.movieDetail(parsedId))
      }else{
        ({ data : result } = await tvApi.showDetail(parsedId))
      }
      console.log(result)
    } catch (error) {
      this.setState({
        error : "아무것도 찾지 못했습니다."
      })
    }finally{
      this.setState({
        loading:false,
        result
      })
    }
  }
  
  render(){
    const { result, error, loading} = this.state
    return(
      <DetailPresenter 
        result={result}
        error={error}
        loading={loading}
      />
    )
  }
}

export default DetailContainer