import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';
import UserPostIndexItemContainer from './user_post_index_item';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        const {fetchUser} = this.props
        fetchUser(this.props.match.params.user_id);
    }

    allThePosts () {
        const {user, userPosts} = this.props;
        const allPosts = userPosts;
        let allTheUsersPosts = null;
        if (userPosts) {
            allTheUsersPosts = allPosts.map((post) => (
                <UserPostIndexItemContainer post={post} />
            ))
            return allTheUsersPosts.reverse();
        } else {
            return <div></div>
        }

    }

    render () {
        const {user, userPosts} = this.props;
        return (
            <div>
                
                <div>
                    <h1>Profile Page for : {user.username}</h1>
                </div>

                {/* <div>
                    {this.allThePosts()}
                </div> */}
                
            </div>
        )
    }

}

UserShow.defaultProps = {
    user: {
        id: null,
        username: '',
        posts: []
    }
}

export default withRouter(UserShow);