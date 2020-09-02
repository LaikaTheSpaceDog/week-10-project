import React, { Component } from "react";
import axios from "../axiosconfig";
import { ListGroup, Navbar } from "react-bootstrap";

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      articles: [],
    };
  }

  componentDidMount() {
    axios.get("/articles").then(({ data }) => {
      this.setState({
        loaded: true,
        articles: data.data,
      });
    });
  }

  render() {
    let { articles, loaded } = this.state;

    return !loaded ? <p>Loading...</p> : (
      <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Articles</Navbar.Brand>
        </Navbar>
        <ListGroup>
          { articles.map(article => (
            <ListGroup.Item key={ article.id } className="list-group-item">
                { article.title }
            </ListGroup.Item>
          )) }
        </ListGroup>
      </>
    );
  }
}

export default Articles;