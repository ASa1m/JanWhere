import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Placeholder from '../../placeholder-image.png';
import Button from 'react-bootstrap/Button'

export default class PostRow extends Component {
  constructor(props) {
    super(props)
    this.deleteStudent = this.deleteStudent.bind(this)
  }

  deleteStudent() {
    const postId = this.props.obj._id;
    this.props.handlePostDelete(postId);
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.obj.images ? (
          <img src={this.props.obj.images[0]} alt="cover" width="100" height="100" />
          ) : (
            <img src={Placeholder} alt="cover" width="100" height="100" />
          )}
        </td>
        <td>{this.props.obj.cover}</td>
        <td>{this.props.obj.date}</td>
        <td>{this.props.obj.likes.length}</td>
        <td>
        <Link to={`/post/${this.props.obj._id}`}>
          <Button className='btn btn-primary text-center' size="sm" variant="primary">
            Open
          </Button>
        </Link>
          <Button onClick={this.deleteStudent} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}
