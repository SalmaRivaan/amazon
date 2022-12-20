import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div>
      <div className="main__page">
        <Header />
        <div className="home">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42868420_.jpg"
            alt=""
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="Shopclix Double Bed Blanket Mink Blanket for Heavy Winter Ac Solid Double Bed Blanket Super Soft Light Winter Blanket (Coffee), Lightweight, The Beautiful Dreamer Tune"
            price={15.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61dhoB4FygL.jpg"
          />
          <Product
            id="49538094"
            title="Blink Video Doorbell + 3 Outdoor camera system with Sync Module 2 | Two-year battery life, Two-way audio, HD video, motion and chime app alerts and Alexa enabled — wired or wire-free (Black)"
            price={169.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/41dGTo-fXUL._AC_SL1000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="AOC GH300 USB Gaming Headset with RGB-LED Gaming Headset with Detachable Microphone, 50mm Drivers and 7.1 Virtual Surround Stereo with Hi-Fi Audio
        "
            price={42}
            rating={5}
            image="https://m.media-amazon.com/images/I/71PhCZEGH7L._SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Turtle Beach Stealth 600 Gen 2 Wireless Gaming Headset for PS5, PS4, PS4 Pro, PlayStation, & Nintendo Switch with 50mm Speakers, 15-Hour Battery life, Flip-to-Mute Mic, and Spatial Audio - White"
            price={99.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/61R3vFaPZAL._SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
            price={25}
            rating={4}
            image="https://m.media-amazon.com/images/I/613eMeyDpPL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Swiss Military VC03 Wireless Car Vacuum Cleaner | Wireless Vacuum Cleaner for Home, Car, Living Room | Wireless Vacuum Cleaner Dust Collection/Lighting Car Pet Hair Vacuum with Powerful Motor, Power Pro System Lucita, ErgoShock Bumper Technology, Chilli Red, ZSP2320T"
            price={799.0}
            rating={5}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Pz+F38IaL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
