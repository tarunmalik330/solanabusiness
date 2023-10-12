import React from 'react';
import team1 from '../assets/images/png/Manager1.png';
import team2 from '../assets/images/png/Manager2.png';
import team3 from '../assets/images/png/Manager3.png';
import team4 from '../assets/images/png/Manager4.png';

function Team() {
  return (
      <div>
           <div class="bg-light-yellow">
        <div class="container pb_68">
            <div class="d-flex justify-content-center align-items-center">
                <h2 class="fs_48 fw_700 ff_poppins mt_42 mb_38">Team</h2>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6 col-12">
                   <img src={team1} alt='team1' className='w-100'/>
                    <h3 class="fw_700 ff_poppins fs_24 d-flex justify-content-center mt_27">Jhone Doe</h3>
                    <p class="ff_poppins fs_18 d-flex justify-content-center mb_20">Manager</p>
                </div>
                <div class="col-lg-3 col-sm-6 col-12">
                    <img src={team2} alt='team2' className='w-100'/>
                    <h3 class="fw_700 ff_poppins fs_24 d-flex justify-content-center mt_27">Jhone Doe</h3>
                    <p class="ff_poppins fs_18 d-flex justify-content-center mb_20">Manager</p>
                </div>
                <div class="col-lg-3 col-sm-6 col-12">
                   <img src={team3} alt='team3' className='w-100'/>
                    <h3 class="fw_700 ff_poppins fs_24 d-flex justify-content-center mt_27">Jhone Doe</h3>
                    <p class="ff_poppins fs_18 d-flex justify-content-center mb_20">Manager</p>
                </div>
                <div class="col-lg-3 col-sm-6 col-12">
                    <img src={team4} alt='team4' className='w-100'/>
                    <h3 class="fw_700 ff_poppins fs_24 d-flex justify-content-center mt_27">Jhone Doe</h3>
                    <p class="ff_poppins fs_18 d-flex justify-content-center mb_20">Manager</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Team