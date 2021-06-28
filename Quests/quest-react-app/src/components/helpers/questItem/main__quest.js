import React, {Component} from "react";
import img from './../../../img/1.jpg';

class mainQuest extends Component {
    render() {
        return <div className='quest-item'>
            <img className='quest-img' src={img} />
            <div className='quest-info'>
                <div className='quest-name'>Название квеста</div>
                <div className='people'>
                    <div className='difficulty'>Сложный</div>
                    <div className='amount'>7-10 чел</div>
                </div>
            </div>
            <div className='btn'>Бронировать</div>
        </div>
    }
}

export default mainQuest;