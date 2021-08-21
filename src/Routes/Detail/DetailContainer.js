import React from "react"
import DetailPresenter from "./DetailPresenter"

class DetailContainer extends React.Component{
  state = {
    result: null,
    erorr : null,
    loading: false,
  };

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