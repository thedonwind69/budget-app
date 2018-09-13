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
import PostUpdateFormContainer from './post_update_form_container';

class PostIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
    }
    
    userShowLink () {
        const {post} = this.props;
        return (
            <Link to={`/users/${post.user_id}`}>{post.username}</Link>
        )
    }

    componentDidMount () {
        const {post} = this.props;
        const postRatingList = ReactDOM.findDOMNode(this.refs.postRating);
        for (let i=0; i<post.rating; i++) {
            postRatingList.children[i].classList.add('fa');
            postRatingList.children[i].classList.add('fa-star');
        }
    }

    componentDidUpdate () {
        const {post} = this.props;
        const postRatingList = ReactDOM.findDOMNode(this.refs.postRating) ? ReactDOM.findDOMNode(this.refs.postRating) : null;
        if (postRatingList) {
            for (let i=0; i<postRatingList.children.length; i++) {
                postRatingList.children[i].classList.remove('fa');
                postRatingList.children[i].classList.remove('fa-star');
            }
            for (let i=0; i<post.rating; i++) {
                postRatingList.children[i].classList.add('fa');
                postRatingList.children[i].classList.add('fa-star');
            }
        }
    }

    timeStamp () {
        const {post} = this.props;
        const monthDay = post.updated_at.toString().slice(5, 10);
        const year = post.updated_at.toString().slice(0, 4);
        return monthDay + '-' + year;
    }

    deletePost (event) {
        event.preventDefault();
        const {post, currentUser} = this.props;
        this.props.deletePost(currentUser.id, post.id);
    }

    toggleUpdateForm () {
        this.setState({editMode: !this.state.editMode});
    }

    updateButton () {
        const {post, currentUser} = this.props;
        if (currentUser && (post.user_id === currentUser.id)) {
            return (
                <button
                    class='post-update-button'
                    onClick={this.toggleUpdateForm.bind(this)}
                >
                Update Post
                </button>
            )
        }
    }

    deleteButton () {
        const {post, currentUser} = this.props;
        if (currentUser && (post.user_id === currentUser.id)) {
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

        if (!this.state.editMode) {
            return (
                <div class='post-index-item'>
                    <p class='post-stamp'>{this.timeStamp()}</p>
                    <p class='post-stamp'>Posted By: {this.userShowLink()}</p>

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
                    {this.updateButton()}
                    {this.deleteButton()}
                </div>
            )
        } else {
            return (
                <PostUpdateFormContainer post={post} cancel={this.toggleUpdateForm.bind(this)}/>
            )
        }
        
    }

}

export default PostIndexItem;