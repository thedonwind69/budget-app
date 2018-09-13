import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';

class UserPostIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount () {
        const {post} = this.props;
        const postRatingList = ReactDOM.findDOMNode(this.refs.postRating);
        for (let i=0; i<post.rating; i++) {
            postRatingList.children[i].classList.add('fa');
            postRatingList.children[i].classList.add('fa-star');
        }
    }

    timeStamp () {
        const {post} = this.props;
        const monthDay = post.created_at.toString().slice(5, 10);
        const year = post.created_at.toString().slice(0, 4);
        return monthDay + '-' + year;
    }

    deletePost (event) {
        event.preventDefault();
        const {post, currentUser} = this.props;
        this.props.deletePost(currentUser.id, post.id);
    }

    deleteButton () {
        const {post, user} = this.props;
        if (user && (post.user_id === user.id)) {
            return (
                <button
                    class='post-delete-button'
                    onClick={this.deletePost.bind(this)}
                >
                Delete Post
                </button>
            )
        }
    }
   
    render () {
        const {post} = this.props;
        console.log(this.props.user);
        return (
                <div class='post-index-item'>

                    <ul class='post-star-rating-list' ref='postRating'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <h1 class='post-index-item-subject'>{post.subject}</h1>
                    <div class='post-index-item-content'>
                        <p>{post.content}</p>
                    </div>
                    {this.deleteButton()}
                </div>
        )
    }

}

export default withRouter(UserPostIndexItem);