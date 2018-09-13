import React from 'react';
import ReactDOM from 'react-dom';

class TotalRatingStars extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        const {totalRating} = this.props;
        const totalRatingList = ReactDOM.findDOMNode(this.refs.totalRatingList);
        for (let i=0; i<totalRatingList.children.length; i++) {
            totalRatingList.children[i].classList.remove('fa');
            totalRatingList.children[i].classList.remove('fa-star');
            totalRatingList.children[i].classList.remove('total-rating-star-circle');
        }
        for (let j=0; j<totalRating; j++) {
            totalRatingList.children[j].classList.add('fa');
            totalRatingList.children[j].classList.add('fa-star');
            totalRatingList.children[j].classList.add('total-rating-star-circle');
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps !== this.props) {
            const {totalRating} = nextProps;
            const totalRatingList = ReactDOM.findDOMNode(this.refs.totalRatingList);
            for (let i=0; i<totalRatingList.children.length; i++) {
                totalRatingList.children[i].classList.remove('fa');
                totalRatingList.children[i].classList.remove('fa-star');
                totalRatingList.children[i].classList.remove('total-rating-star-circle');
            }
            for (let j=0; j<totalRating; j++) {
                totalRatingList.children[j].classList.add('fa');
                totalRatingList.children[j].classList.add('fa-star');
                totalRatingList.children[j].classList.add('total-rating-star-circle');
            }
        }
    }

    render () {
        return (
            <ul class='total-star-rating-list' ref='totalRatingList'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        )
    }
}

export default TotalRatingStars;