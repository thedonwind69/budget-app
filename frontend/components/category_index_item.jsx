import React from 'react';

class CategoryIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    categoryRating () {
        const {category, changeCategory, posts} = this.props;
        let categoryPosts = [];
        posts.forEach((post) => {
            if (category.id === post.category_id) {
                categoryPosts.push(post);
            }
        })

        let rating = null;
        for (let i=0; i < categoryPosts.length; i++) {
            rating += categoryPosts[i].rating;
        }

        if (rating / categoryPosts.length > 0) {
            return `(${(rating / categoryPosts.length).toFixed(1)} Stars)`;
        }

    }
    
    render () {
        const {category, changeCategory, posts} = this.props;
        return (
            <li 
                class='post-tab' 
                onClick={changeCategory.bind(this)}
                id={`${category.id}`}
                >
                {category.name} {this.categoryRating()}
            </li>
        )
    }
}

export default CategoryIndexItem;