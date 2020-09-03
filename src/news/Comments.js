import React, { Component } from "react";
import axios from "../axiosconfig";
import { ListGroup, Navbar } from "react-bootstrap";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      comments: [],
    };
  }

  componentDidMount() {
    let { articleId } = this.props;

    axios.get(`/articles/${articleId}/comments`).then(({ data }) => {
      this.setState({
        loaded: true,
        comments: data.data,
      });
    });
  }

  render() {
    let { comments, loaded } = this.state;

    return !loaded ? <p>Loading...</p> : (
      <>
        <Navbar bg="dark" variant="dark" style={{ marginTop: 10 }}>
            <Navbar.Brand>Comments</Navbar.Brand>
        </Navbar>
        <ListGroup>
            {comments.map(comment => (
                <ListGroup.Item key={ comment.id }>{comment.comment}</ListGroup.Item>
            ))}
        </ListGroup>
      </>
    );
  }
}

export default Comments;