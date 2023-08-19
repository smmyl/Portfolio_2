import {useState, useRef, useEffect} from 'react'

const Home = (props) => {
    const home = useRef()

    const handleScrollHome = () => {
        home.current?.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <>
            <div class='page'>
                <div class={props.mode ? ('home1l'):('home1d')}>
                    <div class={props.mode ?('home1-1l'):('home1-1d')}>
                        <h1>Sammy Liao</h1>
                        {props.mode ? (
                        <>
                        <img onClick={props.toggleMode} class='dark' src='https://cdn-icons-png.flaticon.com/512/4623/4623236.png'/>
                        </>
                        ): (
                        <>
                        <img onClick={props.toggleMode} class='light' src='https://thenounproject.com/api/private/icons/4808961/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0'/>
                        </>
                        )
                        }
                    </div>
                    <div class='home1-2'>
                        <div class='home1-2-1'>
                            <div class='linkhover'>
                                <a target='_blank' href='https://www.linkedin.com/in/sammyliao/'><img id='linkedin' class='home-img-links' src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-512.png'/></a>
                                <div class={props.mode ? ('linkpl'):('linkpd')}>
                                    <p id='linkedinp'>LinkedIn</p>
                                </div>
                            </div>
                            <div class='linkhover'>
                                <a target='_blank' href='https://github.com/smmyl'><img id='github' class='home-img-links' src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png'/></a>
                                <div class={props.mode ? ('linkpl'):('linkpd')}>  
                                    <p id='githubp'>GitHub</p>
                                </div>
                            </div>
                        </div>
                        <div class='home1-2-2'>
                            <img onClick={handleScrollHome} id='home-img-1' src='https://i.imgur.com/oCrGeWig.jpg'/>
                            <div id={props.mode ? ('home-line'):('home-lined')}>
                            </div>
                        </div>
                        <div class='home1-2-3'>
                            <div class='linkhover'>
                                <a href='mailto: sammy.liaop@gmail.com' target='_blank'><img id='mail' class='home-img-links' src = 'https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/mail-512.png'/></a>
                                <div class={props.mode ? ('linkpl'):('linkpd')}>
                                    <p id='mailp'>Email</p>
                                </div>
                            </div>
                            <div class='linkhover'>
                                <a target='_blank' href='https://docs.google.com/document/d/1Zb3-6ngS-rwF0QdVnuU6C7FbghOBHhb5lGcjaGrSR1U/edit?usp=sharing'><img id='resume' class='home-img-links' src='https://cdn2.iconfinder.com/data/icons/business-and-finance-383/30/resume_business_cv_work_job_curriculum-_49-512.png'/></a>
                                <div class={props.mode ? ('linkpl'):('linkpd')}>
                                    <p id='resumep'>Resume</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={home} class={props.mode ? ('home2l'):('home2d')}>
                    <h2>Hello!</h2>
                        <p>I am a software-engineer who recently graduated from General Assembly<br/><br/> 
                        In 2015, I started off as a mechanical engineering student at the Wentworth Institute of Technology. I enjoyed the field for three years but because of uncontrollable circumstances, I had to take a break from learning. <br/><br/>
                        During this break, I decided to work in customer service - something I would never regret. Taking the role of an assistant manager, I learned how to work better under pressure. The service industry looks easy from the outside, but I found that it took a lot for a restaurant to function: worker management, customer management, inventory, unforeseeable problems, and etc. I took away core skills such as communication, efficiency, and time-management.<br/><br/>
                        My time away taught me that my passion for creating things never dissapeared. As a result, I began to speak with advisors and counselors who collectively recommended me to try software-engineering. Different from mechanical, software allows you to see results instanteously on a screen in front of you! I always found that so fascinating. Using the skills I've gained throughout my journey, I hope to create something that can assist people. I have always enjoyed working with other people so whether that I can help people access a site more easily or simply make a site look more appealing is something I will strive to do.
                        </p>
                </div>
            </div>
        </>
    )
}

export default Home;