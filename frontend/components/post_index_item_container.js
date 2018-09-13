import {connect} from 'react-redux';
import PostIndexItem from './post_index_item';
import {deletePost} from '../actions/post_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
    deletePost: (user_id, post_id) => dispatch(deletePost(user_id, post_id))
});

const PostIndexItemContainer = connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);

export default PostIndexItemContainer;