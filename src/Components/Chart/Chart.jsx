import React from 'react';
import './Chart.scss'
import MoreVertIcon from "@mui/icons-material/MoreVert";  
import "react-circular-progressbar/dist/styles.css"; 
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from '../../images/circular.png'

const Chart = () => {
    
    return (
        
        <div className="featured">
        <div className="top">
            <h1 className="title">Sales Charts</h1>
            <MoreVertIcon fontSize="medium" />
        </div>
        <div className="middle">
             <div className="title">
                <h1 className="subtitle"> Todays Sale</h1>
                <h1 className="subNumber"> 156</h1>
             </div>

             <div className="date">
                <span>Today</span>
                <KeyboardArrowDownIcon className='icon' fontSize='small'/>

             </div>
        </div>
        <div className="bottom">
            <div className="btmlogo">
                <img src={logo} style={{width:"200px"}} alt="" />

           </div>
           <div className="btmList">
            <div className="items">
                <li>
                    <div className="itemColor">  </div>
                        <span>50% TV</span>
                </li>
                <li>
                    <div className="itemColor2">  </div>
                        <span>25% Laptop</span>
                </li>
                <li>
                    <div className="itemColor3">  </div>
                        <span>25% Other</span>
                </li>
                
                    <p>See Details</p>
              
            </div>
           </div>

        </div>
         
      </div>
    );
};

export default Chart;