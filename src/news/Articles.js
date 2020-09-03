import React, { Component } from "react";
import axios from "../axiosconfig";
import { Link } from "react-router-dom";
import Article from "./Article";
import { ListGroup, Navbar, Button, Container } from "react-bootstrap";

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
            <Navbar.Brand href="/news">An Amazing Blog</Navbar.Brand>
        </Navbar>
        <ListGroup>
          { articles.map(article => (
            <ListGroup.Item key={ article.id } className="list-group-item" style={{ display: "flex"}}>
                <Link to={`/news/${article.id}`} render={ ({ match }) => (
                  <Article id={match.params.id} />
                )}>{ article.title }</Link>
                <Container style={{ display: "flex", justifyContent: "flex-end" }}>
                    {article.tags.map((tag, index) => (
                        <Button key={ index }variant="dark" style={{ margin: 3 }}>{ tag }</Button>
                    ))}
                </Container>
            </ListGroup.Item>
          )) }
        </ListGroup>
      </>
    );
  }
}

export default Articles;