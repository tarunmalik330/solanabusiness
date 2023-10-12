import React from 'react';
import hamburger from '../assets/images/png/hamburger.png';
import CheesBurger from '../assets/images/png/CheeseBurger.png';
 
function Roadmap() {
  return (
      <div>
           <div>
        <div class="box overflow-hidden">
            <div class="position-absolute top_7 left_20">
                <img src={CheesBurger} alt='CheesBurger' className='w-100'/>
            </div>
            <div class="position-absolute top_30 left_6">
                 <img src={CheesBurger} alt='CheesBurger' className='w-100'/>
            </div>
            <div class="position-absolute top_65 left_1">
               <img src={hamburger} alt='hamburger' className='w-100'/>
            </div>
            <div class="position-absolute top_43 left_25">
                <img src={hamburger} alt='hamburger' className='w-100'/>
            </div>
            <div class="position-absolute top_25 right-26">
                 <img src={CheesBurger} alt='CheesBurger' className='w-100'/>
            </div>
            <div class="position-absolute top_70 right-0">
               <img src={CheesBurger} alt='CheesBurger' className='w-100'/>
            </div>
            <div class="position-absolute top_10 right-0">
                <img src={hamburger} alt='hamburger' className='w-100'/>
            </div>
            <div class="position-absolute top_70 right-30">
               <img src={hamburger} alt='hamburger' className='w-100'/>
            </div>
            <div class="fw_700 fs_36 ff_poppins d-flex justify-content-center pt_73">
                <h1 class="fs_48 fw_700 ff_poppins">ROADMAP 1.0</h1>
            </div>
            <div class="container mt_97">
                <div class="timeline ">
                    <div class="timelineContainer left">
                        <div class="content">
                            <div class="ff_poppins">
                                <h2 class="fs_24 fw_700">Q4 <span class="ml-10">2021</span></h2>
                                <p class="fw_400 fs_20 mt_16">1. Launch SFFB</p>
                                <p class="fw_400 fs_20">2. SELL OUT</p>
                                <p class="fw_400 fs_20">3. Apply for secondary marketplace listings</p>
                            </div>
                        </div>
                    </div>
                    <div class="timelineContainer right">
                        <div class="content">
                            <div class="ff_poppins">
                                <h2 class="fs_20 fw-bold">Q1 <span class="ml-10">2022</span></h2>
                                <p class="fw_400 fs_20 mt_16">1. Charity Giveaway</p>
                                <p class="fw_400 fs_20">2. Launch Adopt-A-Penguin Program</p>
                                <p class="fw_400 fs_20">3. Secure Partnerships</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="timelineContainer left pb_106">
                    <div class="content">
                        <div class="ff_poppins">
                            <h2 class="fs_20 fw_700">Q2 <span class="ml-10">2022</span></h2>
                            <p class="fw_400 fs_20 mt_16">1. SFFB Merch Release</p>
                            <p class="fw_400 fs_20">2. Stay tune for Roadmap 2.0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap