import React, { Component } from "react";
import axios from "../axiosconfig";
import { Form, Button, Navbar, Alert } from "react-bootstrap";


class CreateArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
        titleInput: "",
        articleInput: "",
        tagsInput: "",
        success: true
    };

    this.handleArticleChange = this.handleArticleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);

  }

  handleTitleChange(e) {
      this.setState({ titleInput: e.currentTarget.value });
  }

  handleArticleChange(e) {
    this.setState({ articleInput: e.currentTarget.value });
  }

  handleTagsChange(e) {
    this.setState({ tagsInput: e.currentTarget.value });
  }
  
  handleClick(e) {
    e.preventDefault();

    let { titleInput, articleInput, tagsInput } = this.state;

    let success = () => {
        this.setState({
            success: true,
            titleInput: "",
            articleInput: "",
            tagsInput: "",
        });
    }

    let fail = () => {
        this.setState({
            success: false,
        });
    }

    axios.post("/articles", {
        title: titleInput,
        content: articleInput,
        tags: tagsInput.split(', '),
    }).then(success, fail);
  }

  render() {

    let { success } = this.state;
    
    return (
      <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/news">An Amazing Blog</Navbar.Brand>
        </Navbar>
        {!success ? <Alert variant="danger">Failed to create article</Alert> : null}
        <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={ this.handleTitleChange } value={ this.state.titleInput } />
            </Form.Group>
            <Form.Group>
                <Form.Label>Article</Form.Label>
                <Form.Control onChange={ this.handleArticleChange } value={ this.state.articleInput } />
            </Form.Group>
            <Form.Group>
                <Form.Label>Tags</Form.Label>
                <Form.Control onChange={ this.handleTagsChange } value={ this.state.tagsInput } />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleClick}>Submit</Button>
        </Form>
      </>
    );
  }
}

export default CreateArticle;