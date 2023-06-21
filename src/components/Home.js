import {useState} from 'react'

const Home = () => {
    return (
        <>
            <div class='page'>
                <div class='home1'>
                    <div class='home1-1'>
                        <h1>Sammy Liao</h1>
                        <img src='https://cdn-icons-png.flaticon.com/512/4623/4623236.png'/>
                    </div>
                    <div class='home1-2'>
                        <div class='home1-2-1'>
                            <div class='linkhover'>
                                <img id='linkedin' class='home-img-links' src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-512.png'/>
                                <div class='linkp'>
                                    <p id='linkedinp'>LinkedIn</p>
                                </div>
                            </div>
                            <div class='linkhover'>
                                <img id='github' class='home-img-links' src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png'/>
                                <div class='linkp'>  
                                    <p id='githubp'>GitHub</p>
                                </div>
                            </div>
                        </div>
                        <div class='home1-2-2'>
                            <img id='home-img-1' src='https://i.imgur.com/oCrGeWig.jpg'/>
                            <div id='home-line'>
                            </div>
                        </div>
                        <div class='home1-2-3'>
                            <div class='linkhover'>
                                <a href='mailto: sammy.liaop@gmail.com' target='_blank'><img id='mail' class='home-img-links' src = 'https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/mail-512.png'/></a>
                                <div class='linkp'>
                                    <p id='mailp'>Email</p>
                                </div>
                            </div>
                            <div class='linkhover'>
                                <a target='_blank'><img id='resume' class='home-img-links' src='https://cdn2.iconfinder.com/data/icons/business-and-finance-383/30/resume_business_cv_work_job_curriculum-_49-512.png'/></a>
                                <div class='linkp'>
                                    <p id='resumep'>Resume</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='home2'>
                    <h2>Hello!</h2>
                        <p>I am an aspiring software-engineer currently enrolled in General Assembly.<br/><br/> 
                        In 2015, I started off as a mechanical engineering student at Wentworth Institute of Technology. Although I liked the subject, I disliked how my creativity was bounded by the limits of physics. Due to my change of heart and uncertainty, I decided to step away for some clarity. <br/><br/>
                        During this break, I decided to work in customer service - something I would never regret. Taking the role of an assistant manager, I learned how to work better under pressure. I took away core skills such as communication, efficiency, and time-management.<br/><br/>
                        My time away taught me that my passion for creating things never dissapeared. As a result, I began to speak with advisors and counselors who collectively recommended me to try software-engineering. As the world of technology only grows more complex and complicated, the bounds of creativity are nonexistent. Using the skills I've gained throughout my journey, I hope to create something that can assist or make someones's life easier in any way.
                        </p>
                </div>
            </div>
        </>
    )
}

export default Home;