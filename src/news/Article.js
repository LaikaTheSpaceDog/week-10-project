import React, { Component } from "react";
import axios from "../axiosconfig";
import FourOhFour from './FourOhFour';
import Comments from './Comments';
import { Navbar, Container, Button } from "react-bootstrap";


class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      notFound: false,
      article: {},
    };
  }

  componentDidMount() {
    let { id } = this.props;
    
    let success = ({ data }) => this.setState({
      loaded: true,
      article: data.data,
    });

    let fail = ({ data }) => this.setState({
      loaded: true,
      notFound: true,
    });
    
    axios.get(`/articles/${id}`).then(success, fail);
  }

  render() {
    let { article, loaded, notFound } = this.state;

    return !loaded ? <p>Loading...</p> : ( notFound ? <FourOhFour /> : (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/news">An Amazing Blog</Navbar.Brand>
        </Navbar>
        <Container>
          <h2>{ article.title }</h2>
          <p>{ article.content }</p>
          {article.tags.map((tag, index) => (
            <Button key={ index }variant="dark" style={{ marginRight: 3 }}>{ tag }</Button>
          ))}
        </Container>
        <Comments articleId={ article.id } />
      </>
    ));
  }
}

export default Articles;