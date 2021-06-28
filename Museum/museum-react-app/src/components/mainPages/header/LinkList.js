import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class LinkList extends Component{
  render() {
    return <div className='nav-bar'>
      <NavLink exact className='nav-item' activeClassName='nav-active' to='/'>
        <span>Home</span>
      </NavLink>
      <NavLink exact className='nav-item' activeClassName='nav-active' to='/exhibition'>
        <span>Exhibition</span>
      </NavLink>
      <NavLink exact className='nav-item' activeClassName='nav-active' to='/shop'>
        <span>Shop</span>
      </NavLink>
    </div>
  }
}

export default LinkList;