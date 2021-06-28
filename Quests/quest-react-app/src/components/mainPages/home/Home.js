import React, {Component} from "react";
import * as Api from 'typescript-fetch-api';
import img from './../../../img/main__background.png';
const api = new Api.DefaultApi();
class Home extends Component{
   constructor(props) {
      super(props);
      this.state = {main: []};
      this.handleReload()
   }
   async handleReload() {
      const response = await api.main({ date: '' });
      this.setState({ main: response });
   }
    render() {
       const vlad = this.state.main.map((element) => 
         <div className='quest-item-wrapper'>
         <div className='quest-item-nav'>
            <img className='quest-img-nav' src={element.image} />
            <div className='quest-info-nav'>
            <div className='quest-name'>{element.name}</div>

            <div className='people'>
            <div className='difficulty-nav'>{element.genre}</div>
            <div className='amount-nav'>10-{element.id} чел</div>
         </div>
      </div>
<div className='btn-nav'>
   <p>
   Бронировать
   </p>
   </div>
   </div>
        </div>
       )
        return (
           <div>
           <div className = "section__gallery" style = {{backgroundImage: `url(${img})`}}>
              <h2>Quest-Reality — погрузитесь в игру</h2>
              <p>
               Выбирайте лучшие квесты Минска по независимым рейтингам и отзывам игроков. Приключенческий квест, детективное расследование или страшный перформанс с актёрами — выбор за вами!
              </p>
           </div>
           <div className='quest-gallery-nav'>
               {vlad}  
            </div>
           </div>
        );
    }
}

export default Home;