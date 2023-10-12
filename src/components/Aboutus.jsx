import React from 'react';
import aboutus from '../assets/images/png/AboutUs.png';

export const Aboutus = () => {
  return (
      <div>
           <div class="bg-light-yellow w-100">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 d-flex align-items-center">
                    <div class="py-50">
                        <h2 class="ff_poppins fw_700 fs_48">It was popularised</h2>
                        <p class="ff_poppins fs_18 max-width-591">Have you heard? We’re hiring! We have 3,333
                            working
                            positions to fill on the Solana blockchain. Once all positions are
                            filled it’s crucial to stay on your toes because the corporate penguins are coming! Any
                            penguins caught chilling on the
                            floor when corporate arrives will be immediately fired and swept away! This makes SFFB a
                            deflationary collection until
                            we reach a maximum staff of 1,666 mcnoots in total.</p>
                        <button class="discover-button text_white mb_66 mt_48 fs_20 fw_500">DISCOVER MORE</button>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
              <img src={aboutus} alt='aboutus' className='w-100 d-flex h-100'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
