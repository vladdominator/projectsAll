import React, {Component} from "react";
import LinkList from "./LinkList";

class Header extends Component{
  state = {
    quest: '',
  };

  onChange = (e) => {
    this.setState({quest: e.target.value});
  };

  render() {
    const {quest} = this.state;
    return <div className='header-wrapper'>
      <div className='left'>
        <span className='logo'>LAVR</span>
        <LinkList />
      </div>
      <input placeholder='Search...' className='quest-inp' onChange={this.onChange} value={quest}/>
    </div>
  }
}

export default Header;