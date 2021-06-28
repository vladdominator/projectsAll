import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class LinkList extends Component {
    render() {
        return <div className='nav-bar'>
            <NavLink exact className='nav-item' activeClassName='nav-active' to='/'>
                <span>Главная</span>
            </NavLink>
            <NavLink exact className='nav-item' activeClassName='nav-active' to='/genre'>
                <span>Подбор квестов</span>
            </NavLink>
            <NavLink exact className='nav-item' activeClassName='nav-active' to='/reviews'>
                <span>Отзывы</span>
            </NavLink>
            <NavLink exact className='nav-item' activeClassName='nav-active' to='/quest-location'>
                <span>Карта</span>
            </NavLink>
        </div>
    }
}

export default LinkList;