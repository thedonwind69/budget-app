import {connect} from 'react-redux';
import UserShow from './user_show';
import {fetchUser} from '../actions/users_actions';

const mapStateToProps = (state) => ({
   user: state.entities.user,
   userPosts: state.entities.user.posts
});

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (user_id) => dispatch(fetchUser(user_id)),
});

const UserShowContainer = connect(mapStateToProps, mapDispatchToProps)(UserShow);

export default UserShowContainer;