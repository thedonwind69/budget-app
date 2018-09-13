import {connect} from 'react-redux';
import UserPostIndexItem from './post_index_item';
import {deletePost} from '../actions/post_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    user: state.entities.user,
});

const mapDispatchToProps = (dispatch) => ({
    deletePost: (user_id, post_id) => dispatch(deletePost(user_id, post_id))
});

const UserPostIndexItemContainer = connect(mapStateToProps, mapDispatchToProps)(UserPostIndexItem);

export default UserPostIndexItemContainer;