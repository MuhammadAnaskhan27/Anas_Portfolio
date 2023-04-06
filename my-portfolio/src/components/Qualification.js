import React from 'react'
import "./Qualification.css"
import { useState } from 'react'

const Qualification = () => {
    const [toggleState, setToggleState]=useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className='qualification section'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My personal journey</span>

        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className={toggleState === 1 ?
                    'qualification__button qualification__active button--flex'
                    :"qualification__button button--flex"}
                    
                    onClick={()=>toggleTab(1)}>
                        
                    <i className='uil uil-graduation-cap qualification__icon'></i>
                    Education
                </div>

                <div className={toggleState === 2 ? 
                    'qualification__button qualification__active button--flex'
                    :"qualification__button button--flex"}
                    onClick={()=>toggleTab(2)}>
                        
                    <i className='uil uil-briefcase-alt qualification__icon'></i>
                    Experience
                </div>
            </div>
            <div className='qualification__sections'>
                <div className={toggleState === 1 ? 
                    'qualification__content qualification__content-active' 
                    :'qualification__content'}>


                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Bachelors</h3>
                            <span className='qualification__subtitle'>UBIT - University Of Karachi</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender'></i>
                                2020-Present
                            </div>
                        </div>
                        <div >
                            <span className='qualification__rounder'>

                            </span>
                            <span className='qualification__line'></span>
                            
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>


                        <div >
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                            
                        </div>
                        <div>
                            <h3 className='qualification__title'></h3>
                            <span className='qualification__subtitle'>Govt.Delhi College</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender'></i>
                                2018-2019
                            </div>
                        </div>
                        
                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Matriculation</h3>
                            <span className='qualification__subtitle'>Little Folks School</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender'></i>
                                2017-2018
                            </div>
                        </div>
                        <div >
                            <span className='qualification__rounder'>

                            </span>
                            <span className='qualification__line'></span>
                            
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>


                        {/* <div >
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                            
                        </div>
                        <div>
                            <h3 className='qualification__title'>Flutter Course</h3>
                            <span className='qualification__subtitle'>Jawan Pakistan</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender'></i>
                                2021 - 2022
                            </div>
                        </div> */}
                        
                    </div>
                </div>

                <div className={toggleState === 2 ? 
                    'qualification__content qualification__content-active' 
                    :'qualification__content'}>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Junior Web Developer</h3>
                            <span className='qualification__subtitle'>BlocKeyFi</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender'></i>
                                2023-Present
                            </div>
                        </div>
                        <div >
                            <span className='qualification__rounder'>

                            </span>
                            <span className='qualification__line'></span>
                            
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>


                        <div >
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                            
                        </div>
                        <div>
                            <h3 className='qualification__title'>Web Intern</h3>
                            <span className='qualification__subtitle'>Code Avenir</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender'></i>
                                June/2022-Nov/2022
                            </div>
                        </div>
                        
                    </div>

                    {/* <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Web Designer</h3>
                            <span className='qualification__subtitle'>Pakistan - Institute</span>
                             <div className='qualification__calender'>
                                <i className='uil uil-calender'></i>
                                2021 - Present 
                            </div> 
                        </div>
                        <div >
                            <span className='qualification__rounder'>

                            </span>
                            <span className='qualification__line'></span>
                            
                        </div>
                    </div> */}

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification