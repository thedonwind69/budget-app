import {connect} from 'react-redux';
import CityPostForm from './city_post_form';
import {fetchCity} from '../actions/city_actions';
import {createPost, resetPostErrors} from '../actions/post_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    postErrors: Object.keys(state.entities.postErrors).map((key) => {
        return `${key} ${state.entities.postErrors[key]}`
    })
});

const mapDispatchToProps = (dispatch) => ({
    fetchCity: (city_id) => dispatch( fetchCity(city_id) ),
    createPost: (post) => dispatch(createPost(post)),
    resetPostErrors: () => dispatch(resetPostErrors())
});

const CityPostFormContainer = connect(mapStateToProps, mapDispatchToProps)(CityPostForm);

export default CityPostFormContainer;