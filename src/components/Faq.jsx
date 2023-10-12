import React from 'react';
import solanalogo from '../assets/images/png/footerSolana.png';
import Discoard from '../assets/images/png/Discoard.png';
import Twitter from '../assets/images/png/Twitter.png';

function Faq() {
  return (
      <div>
           <div class="background-light-yellow">
        <div class="container pb-5">
            <div class="d-flex justify-content-center">
                <h4 class="fs_48 ff_poppins fw_700 mt_58 mb_27">FAQ</h4>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8 col-12">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    Amet vel eget nisi, sed ut massa turpis sodales nunc.
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Enim scelerisque quisque egestas velit, eget tempus, arcu
                                    pulvinar in. Quis sed at sodales aliquam. Amet fermentum,
                                    lectus nulla tincidunt egestas.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    Amet vel eget nisi, sed ut massa turpis sodales nunc.
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Enim scelerisque quisque egestas velit, eget tempus, arcu
                                    pulvinar in. Quis sed at sodales aliquam. Amet fermentum,
                                    lectus nulla tincidunt egestas.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Amet vel eget nisi, sed ut massa turpis sodales nunc.
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Enim scelerisque quisque egestas velit, eget tempus, arcu
                                    pulvinar in. Quis sed at sodales aliquam. Amet fermentum,
                                    lectus nulla tincidunt egestas.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour" aria-expanded="false"
                                    aria-controls="flush-collapseFour">
                                    Amet vel eget nisi, sed ut massa turpis sodales nunc.
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Enim scelerisque quisque egestas velit, eget tempus, arcu
                                    pulvinar in. Quis sed at sodales aliquam. Amet fermentum,
                                    lectus nulla tincidunt egestas.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFive" aria-expanded="false"
                                    aria-controls="flush-collapseFive">
                                    Amet vel eget nisi, sed ut massa turpis sodales nunc.
                                </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Enim scelerisque quisque egestas velit, eget tempus, arcu
                                    pulvinar in. Quis sed at sodales aliquam. Amet fermentum,
                                    lectus nulla tincidunt egestas.</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="mx-auto mb_27 mt-88 mw-524">
                <img src={solanalogo} alt='solanalogo' className='w-100'/>
            </div>
                  <div class="d-flex justify-content-center mb_52 w-100">
                      <a href='https://discord.com/' target='_blank'>
                          <img src={Discoard} alt='Discoard' className='mr_46'/>
                      </a>
                      <a href='https://twitter.com/' target='_blank'>
                          <img src={Twitter} alt='Twitter'/>
                      </a>
            </div>
            <div class="d-flex justify-content-center">
                <p class="ff_poppins fs_18 fw_400">@Copyright 2021</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Faq