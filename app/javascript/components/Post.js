import React from "react";
import PropTypes from "prop-types";
class Post extends React.Component {
  render() {
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Body: {this.props.body}</div>
        <div>blah</div>
      </div>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};
export default Post;
