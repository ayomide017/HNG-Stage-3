import React from "react";
import { Button } from "./Button";
import countImg from "../assets/count-down-img.png"


export const CountDownCard = ()=>{
    return(
        <div className="count-down__card ">
            <div className="count-down__content stack">
                <h2 className="count-down__title">Exclusive Deal</h2>
                <p className="count-down__text">Enjoy our exclusive offer of the day,get up to 30% offer on our new arrival collections.</p>
               <div className="count-down__timer">
                    
                     <div className="count-down__col days">
                         <h4 className="count-down__number">05</h4>
                         <span className="count-down__label">Days</span>
                     </div>

                     <div className="count-down__col hours">
                     <h4 className="count-down__number">12</h4>
                     <span className="count-down__label">Hours</span>
                     </div>
                     
                     <div className="count-down__col minutes">
                     <h4 className="count-down__number">40</h4>
                     <span className="count-down__label">Mins</span>
                     </div>
               </div>
               <Button className="btn btn-bg" text="Shop Now"/>
            </div>

            <div className="count-down__img">
            <img src={countImg} />
            </div>

        </div>
    )
}