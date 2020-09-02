import React, { Component } from "react";
import axios from "../axiosconfig";

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      article: {},
    };
  }

  componentDidMount() {
    let { id } = this.props;
    axios.get(`/article/${id}`).then(({ data }) => {
      this.setState({
        loaded: true,
        article: data.data,
      });
    });
  }

  render() {
    let { article, loaded } = this.state;

    return !loaded ? <p>Loading...</p> : (
      <>

      </>
    );
  }
}

export default Articles;