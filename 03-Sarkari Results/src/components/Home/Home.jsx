import React from 'react';
import './Home.css';
import  { links, links2, links3, cards, tables, notifications } from '../..';
import Card from '../Card/Card';


const Home = () => {
  return (
    <section className='hero-section'>
        <h2>Sarkari Naukri Latest Jobs Online Form at Sarkari Results 2024</h2>
        <h4 className='welcome-text'>Welcome to No. 1 Education Portal Sarkari Result 2024</h4>
        <div>
            <marquee behavior="alternate" direction="">
                {links.map((link, index) => {
                  return (
                      <a key={index} className='link' href='#'> {`${link} || `} </a>
                  )
                })}
            </marquee>

            <marquee behavior="alternate" direction="left">
                {links2.map((link, index) => {
                  return (
                      <a key={index} className='link' href='#'> {`${link} || `} </a>
                  )
                })}
            </marquee>

            <marquee behavior="alternate" direction="">
                {links3.map((link, index) => {
                  return (
                      <a key={index} className='link' href='#'> {`${link} || `} </a>
                  )
                })}
            </marquee>
        </div>

        <div className='cards'>
            {cards.map((card, index) => {
                return(
                    <Card key={index} title={card.title} purpose={card.purpose} /> 
                )
            })}
        </div>

        <div className="tables">
            {tables.map((table, index) => {
                return(
                    <div key={index} className='table-data'>
                        <h3>{table.title}</h3>
                        <ul>
                            {table.data.map((data, index) => {
                                return(
                                    <li key={index}>{data}</li>
                                )
                            })}
                        </ul>
                        <p>View More</p>
                    </div>
                )
            })}
        </div>

        <div className="notifications">
            {notifications.map((notification, index) => {
                return(
                    <div key={index}>
                        <h3>{notification.title}</h3>
                        {notification.data.map((data, index) => {
                            return(
                                <p key={index}>{data}</p>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Home