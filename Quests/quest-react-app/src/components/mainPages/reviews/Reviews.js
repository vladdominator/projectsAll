import React, {Component} from "react";
import * as Api from 'typescript-fetch-api';

const api = new Api.DefaultApi();

class Reviews extends Component{
    constructor(props) {
        super(props);
        this.state = { reviews: [] };
        this.handleReload();
    }

    async handleReload(event) {
        const response = await api.reviews({ date: '' });
        this.setState({ reviews: response });
   }

    render() {
        return <div className='reviews-wrapper'>
            <div className='reviews-title'>Отзывы</div>
            <div className='reviews'>
                {this.state.reviews.map(
                    (review) => {
                    return <div className='reviews-item'>
                        <div className='review-image'>
                            <img src={review.image}></img>
                        </div>
                        <div className='review-desc'>
                            <div className='review-name'>{review.name} {review.lastName}</div>
                            <div className='review-text'>{review.review}</div>
                            <div className='review-date'>{review.date}</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}

export default Reviews;