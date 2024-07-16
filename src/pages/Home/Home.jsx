import React, { useState } from "react";
import { CountDownCard } from "../../components/CountDownCard";
import { ReviewCard } from "../../components/ReviewCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../../components/Button";

import FallFit from "../../assets/fall-fit.png";
import SummerFit from "../../assets/summer-fit.png";
import WinterFit from "../../assets/winter-fit.png";
import HeroImg from "../../assets/hero-img.png";


import { Products } from "../../components/Products";// import the Products component


export const Home = (props) => {
  console.log(props.products);

  return (
    <>
      <section className="section-hero">
        <div className="container">
          <div className="hero">
            <div className="hero__content stack">
              <h1 className="hero__title">
                Discover Fashion made <span>even better</span>
              </h1>
              <p className="hero__text">
                We make you look smart, sharp and wear it with style, explore
                different UNIQUE collections from Sm-wears
              </p>
              <Button className="btn-bg" text="Shop Now" />
            </div>
            <div className="hero__img">
              <img src={HeroImg} alt="hero-img" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="subheading">
            <h2 className="subheading__title">Collections</h2>
            <p className="subheading__text">
              Explore varieties of wears ranging from summer fit,fall fit to
              winter fit
            </p>
          </div>
          <div className="collection__list">
            <div className="collection__item">
              <img src={SummerFit} alt="winter-fit" />
              <Button className="btn-md" text="Summer fit" />
            </div>

            <div className="collection__item">
              <img src={FallFit} alt="fall-fit" />
              <Button className="btn-md" text="Fall Fit" />
            </div>

            <div className="collection__item">
              <img src={WinterFit} alt="winter-fit" />
              <Button className="btn-md" text="winter fit" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">

          {/* products components */}
          <Products initialPage={1} />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="subheading">
            <h2 className="subheading__title">Best Selling</h2>
            <p className="subheading__text">
              Get the best trending wears and accessories on our best selling
              selections
            </p>
          </div>
          {/* <div className="products"> </div> */}
        </div>
      </section>

      <section>
        <div className="container">
          <CountDownCard />
        </div>
      </section>
    </>
  );
};
