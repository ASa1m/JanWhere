import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Row from './PostRow';
import axios from 'axios';

class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    };
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    const userId = this.props.auth.user.id;
    axios.get(`${process.env.REACT_APP_API_URL}/api/posts/list/${userId}`)
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handlePostDelete = (postId) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/api/posts/${postId}/removepost`)
      .then((res) => {
        alert(res.data);
        this.setState(prevState => ({
          posts: prevState.posts.filter(post => post._id !== postId)
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    const { user } = this.props.auth;

    return (
      <div className="d-flex center flex-lg-row flex-column">
        <div className="col s12 center-align p-5 text-white">
          <h3>My Posts</h3>
          <table className="table table-striped text-white" style={{ marginTop: 20 }} >
            <thead>
              <tr>
                <th>Cover</th>
                <th>Title</th>
                <th>Date</th>
                <th>Likes</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.length > 0 ? (
                this.state.posts.map((post, i) => (
                  <Row key={post._id} obj={post} handlePostDelete={this.handlePostDelete} />
                ))
              ) : (
                <tr>
                  <td colSpan={4}>No posts yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="landing-copy col s12 center-align">
          <h4 className="white-text">
            <b>Hey there,</b> {user.name.split(" ")[0]}
            <p className="flow-text grey-text text-darken-1">
              You are logged into JanWhere{" "} 😺
            </p>
          </h4>
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }}
            onClick={this.onLogoutClick}
            className="btn btn-large waves-effect waves-light hoverable red accent-3 text-white"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
