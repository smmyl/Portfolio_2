import {useState} from 'react'

const Skill = (props) => {
    return (
        <>
            <div class='page'>
                <div class={props.mode ? ('skilll'):('skilld')}>
                    <h1>Skills</h1>
                    <div class='skill1'>
                        <div class='skill1-img'>
                            <img src='https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'/>
                            <h3 class='skill1-h3'>Python</h3>
                        </div>
                        <div class='skill1-img'>
                            <img src='https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-512.png'/>
                            <h3 class='skill1-h3'>Javascript</h3>
                        </div>
                        <div class='skill1-img'>
                            <img src='https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png'/>
                            <h3 class='skill1-h3'>React</h3>
                        </div>
                        <div class='skill1-img'>
                            <img src='https://cdn0.iconfinder.com/data/icons/hippicons-technology/64/database-alt-512.png'/>
                            <h3 class='skill1-h3'>MongoDB</h3>
                        </div>
                        <div class='skill1-img'>
                            <img src='https://cdn1.iconfinder.com/data/icons/akar-vol-1/24/django-fill-512.png'/>
                            <h3 class='skill1-h3'>Django</h3>
                        </div>
                        <div class='skill1-img'>
                            <img src='https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/jquery-512.png'/>
                            <h3 class='skill1-h3'>jQuery</h3>
                        </div>
                        <div class='skill1-img'>
                            <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png'/>
                            <h3 class='skill1-h3'>HTML</h3>
                        </div>
                        <div class='skill1-img'>
                            <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png'/>
                            <h3 class='skill1-h3'>CSS</h3>
                        </div>
                        <div class='skill1-img'>
                            <img src='https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-heroku-512.png'/>
                            <h3 class='skill1-h3'>Heroku</h3>
                        </div>
                        <div class='skill1-img'>
                            <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png'/>
                            <h3 class='skill1-h3'>Github</h3>
                        </div>
                        <div class='skill1-img'>
                            <img src='https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/netlify-512.png'/>
                            <h3 class='skill1-h3'>Netlify</h3>
                        </div>
                    </div>
                    <div class='skill2'>
                        <h2>Communications</h2>
                            <div class = {props.mode ? ('bar-borderl'):('bar-borderd')}>
                                <div class = {props.mode ? ("barl"):('bard')} id = 'bar-c'>100%</div>
                            </div>
                        <h2>Problem Solving</h2>
                            <div class = {props.mode ? ('bar-borderl'):('bar-borderd')}>
                                <div class = {props.mode ? ("barl"):('bard')} id = 'bar-s'>100%</div>
                            </div>
                        <h2>Teamwork</h2>
                            <div class = {props.mode ? ('bar-borderl'):('bar-borderd')}>
                                <div class = {props.mode ? ("barl"):('bard')} id = 'bar-t'>100%</div>
                            </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill;