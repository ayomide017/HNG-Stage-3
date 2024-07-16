import React from "react";
import logoDark from "../assets/logo-dark.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const iconMap = {
  'fa-facebook-f': faFacebookF,
  'fa-twitter': faTwitter,
  'fa-instagram': faInstagram,
  'fa-linkedin-in': faLinkedinIn
};
import data from "../data.json";
const {footer} = data;

export const Footer =()=>{
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                   
                    {footer.columns.map((item, index)=>(
                        <div key={index} className="footer__column">
                            {item.title !== "Social Links" ? <h3 className="footer__text">{ item.title}</h3>:  <img src={logoDark} alt="logo" className="footer__logo"/>}
                            
                            {item.links && (
                                <ul className={`${item.title == "Social Links" ? "footer__social-links" : "footer__list"} ` }>
                                    {item.links.map((link, indx)=>(
                                        <li key={indx} className="footer__item" > 
                                            <a href={link.url} className="footer__link">
                                              {/* if is icon display icon else default is text */}
                                              {link.isIcon && <FontAwesomeIcon icon={iconMap[link.icon]} className="footer__social-icon"/> }
                                              {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {/* {item.description && <p>{item.description}</p>} */}
                            {item.description && (
                                <form className="footer__subscribe">
                                <input className="footer__input"
                                  type="email"
                                  placeholder={item.subscribeForm.placeholder}
                                />
                                <button className="footer__btn" type="submit">{item.subscribeForm.buttonText}</button>
                              </form>
                            )}

                           
                        </div>


                    ))}
                </div>

            </div>
        </footer>
    );
}