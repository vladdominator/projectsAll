import React, {Component} from "react";
import * as Api from 'typescript-fetch-api';
import img from './../../../img/Background.png';
import img1 from './../../../img/background1.png';
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
            <img className='quest-img-nav' src={element.imageNews} />
            <div className='quest-info-nav'>
            <div className='quest-name'>{element.nameExhibi}</div>

            <div className='people'>
            <div className='difficulty-nav'>{element.descriptionExhibi}</div>
            <div className='amount-nav'>10-{element.id}</div>
         </div>
      </div>
<div className='btn-nav'>
   <p>
   Купить
   </p>
   </div>
   </div>
        </div>
       )
       const vlad2 = this.state.main.map((element) => 
       <div className='quest-item-wrapper-ty'>
       <div className='quest-item-nav'>
          <img className='quest-img-nav' src={element.imageExhibi} />
          <div className='quest-info-nav'>
          <div className='people'>
          <div className='difficulty-nav'>{element.descriptionNews}</div>
          <div className='amount-nav'>10-{element.id}</div>
       </div>
    </div>
 </div>
      </div>
     )
        return (
           <div>
           <div className = "section__gallery" style = {{backgroundImage: `url(${img})`}}>
              <h2>DISCOVER THE ART</h2>
              <button className="button__main">
                 <span className="vlad__g">

                 buy a ticket
                 </span>
              </button>
           </div>
           <div className='quest-gallery-nav'>
               {vlad}  
            </div>
            <div className="section-news" style = {{backgroundImage: `url(${img1})`}}>
               <span>News</span>
            </div>
           {vlad2}
           </div>
        );
    }
}

export default Home;