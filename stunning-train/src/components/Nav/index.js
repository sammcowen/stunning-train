import React from 'react';

function Nav(props) {
    const tabs = ['About Me', 'Portfolio', 'Contact Me'];
    return (
        <div>
           <nav>
                <ul>
                    {tabs.map((tab) => (
            <li className={props.currentPage === tab ? 'nav-item is-active' : 'nav-item'} key={tab}>
                <a href="#about-me">About Me</a>
            
            
                <a href={"#" + tab.toLowerCase()} onClick={() => props.handlePageChange(tab)} className={props.currentPage === tab ? 'nav-link active' : 'nav-link'}>
                    {tab}
           </a>
         </li>
                    ))}
                </ul>
           </nav>
        </div>
    );
};

export default Nav;
