
import React from 'react';
import logo from '../assets/images/png/solana.png';
import herosecton from '../assets/images/png/herosectionImg.png';
import hamburger from '../assets/images/png/hamburger.png';
import CheesBurger from '../assets/images/png/CheeseBurger.png';
import Bigsolanalogo from '../assets/images/png/BigSolana.png';
import opengroup from '../assets/images/png/OpenGroup.png';

const Headersection = () => {
  return (
      <div>
          <section className='bg-yellow'>
        <nav class="position-fixed bg-yellow w-100 pt-3">
            <div class="container pt_11 pb-3">
                      <div class="d-flex align-items-center justify-content-between">
                          <a href=''>
                              <img src={logo} alt='logo' />
                              </a>
                    <input type="checkbox" id="menu_box" hidden/>
                    <label for="menu_box" class="checkbtn d-flex align-items-center z-index-1 ">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </label>
                    <ul class="d-flex align-items-center small_screen ff_poppins fs_18 fw_600 gap_38">
                        <li><a href="" class="text_black">Home</a></li>
                        <li><a href="" class="text_black white-space-nowrap">About Us</a></li>
                        <li><a href="" class="text_black">Tokenomics</a></li>
                        <li><a href="" class="text_black">Roadmap</a></li>
                        <li><a href="" class="text_black">Contact</a></li>
                        <li><a href="" class="button fs_20 fw_500 text_red white-space-nowrap">Connect Wallet</a></li>
                    </ul>
                </div>
            </div>
          </nav>
      <div className='pt_100'>
     <img src={herosecton} alt='herosecton' className='w-100'/>
      </div>
       <div class="background-img w-100 position-relative">
            <div class="position-absolute top_48 right-3 d-none d-sm-block">
          <img src={CheesBurger} alt='CheesBurger' className='w-100'/>
            </div>
            <div class="position-absolute top_5 left-6 d-none d-sm-block">
                 <img src={CheesBurger} alt='CheesBurger' className='w-100'/>
            </div>
            <div class="position-absolute top_50 left_1 d-none d-sm-block">
          <img src={hamburger} alt='hamburger' className='w-100'/>
            </div>
            <div class="position-absolute top_10 left_23 d-none d-lg-block">
                <img src={hamburger} alt='hamburger' className='w-100'/>
            </div>
            <div class="position-absolute left-17 bottom-28 d-none d-sm-block">
                <img src={CheesBurger} alt='CheesBurger' className='w-100'/>
            </div>
            <div class="position-absolute top_11 right-26 d-none d-lg-block">
                 <img src={CheesBurger} alt='CheesBurger' className='w-100'/>
            </div>
            <div class="position-absolute right-0 d-none d-sm-block">
                <img src={hamburger} alt='hamburger' className='w-100'/>
            </div>
            <div class="position-absolute top_55 right-17 d-none d-lg-block">
               <img src={hamburger} alt='hamburger' className='w-100'/>
            </div>
            <div class="container d-flex align-items-center justify-content-center mb-2">
                <h2 class="ff_poppins fs_36 fw_700 text-black mb_27 mt_73">WELCOME TO</h2>
            </div>
            <div class="d-flex mx-auto max-width-806">
                <img src={Bigsolanalogo} alt='Bigsolanalogo' className='w-100 z-1'/>
            </div>
            <div class="d-flex align-items-center justify-content-center transform-translateY">
          <img src={opengroup} alt='opengroup' className='w_50 max-width-345 z-1'/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Headersection