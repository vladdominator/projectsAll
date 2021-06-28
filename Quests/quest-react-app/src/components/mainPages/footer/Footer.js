import React, {Component} from "react";

class Footer extends Component {
    render() {
        return <div className='footer'>
            <div className='top'>
                <div className='left'>
                    <span>Product</span>
                    <span>Features</span>
                    <span>Resources</span>
                </div>
                <div className='center'>TRADE</div>
                <div className='right'>
                    <span>About</span>
                    <span>Blog</span>
                    <span>Support</span>
                </div>
            </div>
            <div className='bottom'>
                <span>2010 - 2020</span>
                <span>Privacy - Terms</span>
            </div>
        </div>
    }
}

export default Footer;