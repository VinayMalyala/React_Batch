import React from 'react';
import { footer_links } from '../..';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className='links'>
            {footer_links.map((link, index) => {
                return (
                    <div key={index}>
                        <a className='link-title'>{link.title}</a>
                        <div className='link-items'>
                            {link.data.map((data, dataIndex) => {
                                return (
                                    <a key={dataIndex}>{data}</a>
                                )
                            })}
                        </div>
                    </div>   
                )
            })}
        </div>

        <div className='copy-right'>
            <p>&copy; Vinay Malyala 2024 | All rights reserved.</p>
        </div>
        
    </footer>
  );
};

export default Footer;