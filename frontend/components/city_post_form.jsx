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
import FormButton from './form_button';

class CityPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: null,
            content: null,
            rating: null,
            user_id: this.props.currentUser ? this.props.currentUser.id : null,
            city_id: this.props.match.params.city_id,
            category_id: null,
        }
    }

    componentWillMount () {
        this.props.postErrors = [];
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps !== this.props) {
            this.props.postErrors = [];
        }
    }

    componentWillUnmount () {
        this.props.resetPostErrors();
    }

    toggleForm () {
        const postForm = ReactDOM.findDOMNode(this.refs.postForm);
        postForm.classList.toggle('hide-this-shit');
    }

    clearForm () {
        const postFormReset = ReactDOM.findDOMNode(this.refs.postFormReset);
        postFormReset.reset();
        const postCategory = ReactDOM.findDOMNode(this.refs.postCategory);
        const starList = ReactDOM.findDOMNode(this.refs.starList);
        postCategory.selectedIndex = 0;
        for (let i=0; i<starList.children.length; i++) {
            starList.children[i].classList.remove('active');
            starList.children[i].classList.remove('secondary-active');
        }
        this.setState({
            subject: null,
            content: null,
            rating: null,
            category_id: null
        })
    }

    submitPost (event) {
        event.preventDefault();
        const createdPost = Object.assign({}, this.state);
        this.props.createPost(createdPost);
        this.props.resetPostErrors();
        this.clearForm();
    }

    update (field) {
        return (event) => {
            this.setState({
                [field]: event.currentTarget.value
            })
        }
    }

    getCurrentIndex (element) {
        const currentIndex = Array.prototype.indexOf.call(element.parentNode.children, element);
        return currentIndex;
    }

    setStar (field) {
        return (event) => {
            event.preventDefault();
            const starList = ReactDOM.findDOMNode(this.refs.starList);
            let star = event.currentTarget;
            const currentStarIndex = this.getCurrentIndex(star);
            star.classList.remove('active');
            for (let i=0; i<starList.children.length; i++) {
                starList.children[i].classList.remove('active');
                starList.children[i].classList.remove('secondary-active');
            }
            star.classList.add('active');
            for (let j=0; j<currentStarIndex; j++) {
                starList.children[j].classList.add('secondary-active');
            }
            this.setState({
                [field]: event.currentTarget.value,
            })
        }
    }

    starHover (event) {
        event.preventDefault();
        const starList = ReactDOM.findDOMNode(this.refs.starList);
        let star = event.currentTarget;
        const currentStarIndex = this.getCurrentIndex(star);
        star.classList.remove('active');
            for (let i=0; i<starList.children.length; i++) {
                starList.children[i].classList.remove('active');
                starList.children[i].classList.remove('secondary-active');
            }
        star.classList.add('active');
            for (let j=0; j<currentStarIndex; j++) {
                starList.children[j].classList.add('secondary-active');
            }
    }

    starHoverOut (event) {
        event.preventDefault();
        const starList = ReactDOM.findDOMNode(this.refs.starList);
        let star = event.currentTarget;
        star.classList.remove('active');
            for (let i=0; i<starList.children.length; i++) {
                starList.children[i].classList.remove('active');
                starList.children[i].classList.remove('secondary-active');
            }
            for (let j=0; j<this.state.rating; j++) {
                starList.children[j].classList.add('secondary-active');
            }
    }

    renderErrors () {  
        if (this.props.postErrors.length > 0) {
            return (
                <ul>
                    {this.props.postErrors.map((error, i) => (
                    <li class='post-error-message' key={`error-${i}`}>
                        {error}
                    </li>
                    ))}
                </ul>
            );
        }
    }

    profilePicClass () {
        const { currentCity } = this.props;
        return currentCity.name.split(' ').join('') + "Page"
    }

    render () {
        return (
            <div>
                <div>
                    <FormButton currentUser={this.props.currentUser} toggleForm={this.toggleForm.bind(this)}/>
                </div>

                <br />

                <div ref='postForm' class={`post-form-container hide-this-shit`}>
                    <form ref="postFormReset" onSubmit={this.submitPost.bind(this)}>
                        <label for='subject' >Subject</label>
                            <br />
                        <input class='post-subject' id='subject' type='text' onChange={this.update('subject')}/>

                                <br /><br />
                            <label>Category</label>
                                <br />
                            <select class='post-category-dropdown' ref='postCategory' onChange={this.update('category_id')}>
                                <option value="" selected disabled hidden>Choose Category</option>
                                <option value="1">Food</option>
                                <option value="2">Culture</option>
                                <option value="3">Nightlife</option>
                                <option value="4">Economy</option>
                            </select>
                                <br /><br />
                            <label>Rating</label>

                        <div class='star-rating-container'>
                            <ul class='star-rating-list' ref='starList'>
                                <li onMouseOver={this.starHover.bind(this)} onMouseOut={this.starHoverOut.bind(this)} onClick={this.setStar('rating')} value='1'><label for='star1'></label><i class='fa fa-star' aria-hidden='true'></i><input type='radio' name='rating' id='star1' value='1'/></li>
                                <li onMouseOver={this.starHover.bind(this)} onMouseOut={this.starHoverOut.bind(this)} onClick={this.setStar('rating')} value='2'><label for='star2'></label><i class='fa fa-star' aria-hidden='true'></i><input type='radio' name='rating' id='star2' value='2'/></li>
                                <li onMouseOver={this.starHover.bind(this)} onMouseOut={this.starHoverOut.bind(this)} onClick={this.setStar('rating')} value='3'><label for='star3'></label><i class='fa fa-star' aria-hidden='true'></i><input type='radio' name='rating' id='star3' value='3'/></li>
                                <li onMouseOver={this.starHover.bind(this)} onMouseOut={this.starHoverOut.bind(this)} onClick={this.setStar('rating')} value='4'><label for='star4'></label><i class='fa fa-star' aria-hidden='true'></i><input type='radio' name='rating' id='star4' value='4'/></li>
                                <li onMouseOver={this.starHover.bind(this)} onMouseOut={this.starHoverOut.bind(this)} onClick={this.setStar('rating')} value='5'><label for='star5'></label><i class='fa fa-star' aria-hidden='true'></i><input type='radio' name='rating' id='star5' value='5'/></li>
                            </ul>
                        </div>

                        <label for='content'>Content</label>
                            <br />
                        <textarea id='content' class='post-content' onChange={this.update('content')}></textarea>
                            
                            {this.renderErrors()}

                            <br />
                        <input class='post-submit-button' type='submit' value='Submit Post' />
                    </form>
                </div>

            </div>
        )
    }
}

export default withRouter(CityPostForm);