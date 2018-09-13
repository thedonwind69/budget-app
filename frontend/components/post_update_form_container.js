import {connect} from 'react-redux';
import PostUpdateForm from './post_update_form';
import {updatePost} from '../actions/post_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
    updatePost: (post, user_id, post_id) => dispatch(updatePost(post, user_id, post_id))
});

const PostFormUpdateContainer = connect(mapStateToProps, mapDispatchToProps)(PostUpdateForm);

export default PostFormUpdateContainer;