import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
  } from 'react-router-dom';
import ReactDOM from 'react-dom';
import PostIndexItem from './post_index_item';
import CategoryIndexItem from './category_index_item';
import TotalRatingStars from './total_rating_stars';
import PostIndexItemContainer from './post_index_item_container';

class PostsDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: null,
            currentCategoryId: null
        }
    }

    componentDidMount () {
        this.props.fetchCategories();
        this.props.fetchPosts(this.props.match.params.city_id);
    }

    componentWillReceiveProps (nextProps) {
        const {fetchPosts, allPosts} = nextProps;
        if (nextProps.match.params.city_id !== this.props.match.params.city_id) {
            fetchPosts(nextProps.match.params.city_id);
        }
    }

    componentWillUnmount () {
        this.props.resetPosts();
    }

    changeCategory (event) {
        event.preventDefault();
        const currentCategory = event.currentTarget;
        const categoryList = ReactDOM.findDOMNode(this.refs.categoryList);
        for (let i=0; i<categoryList.children.length; i++) {
            categoryList.children[i].classList.remove('highlight-category');
        }
        currentCategory.classList.add('highlight-category');
        this.setState({
            currentCategory: event.currentTarget.innerHTML,
            currentCategoryId: event.currentTarget.getAttribute('id')
        })
    }

    all_categories () {
        const {categories, allPosts} = this.props;
        const all_categories = categories.map((category) => {
            return <CategoryIndexItem  changeCategory={this.changeCategory.bind(this)} category={category} posts={allPosts}/>
        });
        return all_categories;
    }

    allThePosts () {
        const {categories, allPosts} = this.props;
        const allThePosts = allPosts.map((post) => {
            let currentCategoryId = this.state.currentCategoryId;
            if (post.category_id === parseInt(currentCategoryId)) {
                return <PostIndexItemContainer post={post} currentCategoryId={this.state.currentCategoryId}  />
            }
        });
        return allThePosts.reverse();
    }

    totalRating () {
        const {allPosts} = this.props;
        let overallRating = 0;
        allPosts.forEach((post) => {
            overallRating += post.rating;
        })
        const finalRating = (overallRating / allPosts.length).toFixed(1);
        const finalRatingFloored = Math.floor(overallRating / allPosts.length);
        if (overallRating / allPosts.length > 0) {
            return (
                <div>
                    <TotalRatingStars totalRating={finalRatingFloored} />
                    <h1>{finalRating} Stars</h1>
                </div>
            )
        }
    }

    numberOfReviews () {
        const {allPosts} = this.props;
        if (allPosts.length > 1) {
            return <p class='number-of-reviews'>{allPosts.length} Reviews</p>
        } else if (allPosts.length === 1) {
            return <p class='number-of-reviews'>{allPosts.length} Review</p>
        } else {
            return <p class='number-of-reviews'>No Reviews</p>
        }
    }

    render () {
        return (
            <div>

                <div class='total-rating-container'>
                    {this.totalRating()}
                    {this.numberOfReviews()}
                </div>

                <div class='clearfix'></div>

                <div class='post-tabs'>
                    <ul ref='categoryList'>
                        {this.all_categories()}
                    </ul>    
                </div>

                <div>
                    {this.allThePosts()}
                </div>

            </div>
        )
    }

}

export default withRouter(PostsDisplay);