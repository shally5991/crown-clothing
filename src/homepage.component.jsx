import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
<div className= 'homepage'>
<h1> Welcome to my homepage</h1>
    <div className = 'directory-menu'>
        <div className = 'menu-item'>
            <div className = 'content'>
                <div className = 'title'>HATS</div>
                <span className = 'subtitle'>SHOP NOW</span>
             </div> 
        </div>  

        <div className = 'menu-item'>
            <div className = 'content'>
                <div className = 'title'>jackets</div>
                <span className = 'subtitle'>SHOP NOW</span>
            </div> 
         </div>  

        <div className = 'menu-item'>
            <div className = 'content'>
                <div className = 'title'>sneaker</div>
                <span className = 'subtitle'>SHOP NOW</span>
             </div> 
        </div>  

        <div className = 'menu-item'>
           <div className = 'content'>
              <div className = 'title'>men</div>
              <span className = 'subtitle'>SHOP NOW</span>
             </div> 
        </div>  

        <div className = 'menu-item'>
           <div className = 'content'>
              <div className = 'title'>women</div>
              <span className = 'subtitle'>SHOP NOW</span>
           </div> 
        </div>  
    </div>
</div>
);


export default HomePage;
