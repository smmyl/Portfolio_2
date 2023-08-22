import {useState} from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const Project = (props) => {
    const [project2h1, setProject2h1] = useState(true)
    const [project2, setProject2] = useState(true)

    const toggleProject2h1 = () => {
        setProject2h1(!project2h1)
        setProject2(!project2)
    }
    return (
        <>
            <div class='page'>
                <div class={props.mode ? ('projectl'):('projectd')}>
                    <h1>Projects</h1>
                    <div class='project1'>
                        <div class='container'>
                            <img class={props.mode ? ('project1-img1l'):('project1-img1d')} src='https://i.imgur.com/8GgBOjE.jpg'></img>
                            <div class={props.mode ? ('overlay1l'):('overlay1d')}>
                                <div class='text'>
                                    <h2>EZPlanner</h2>
                                    <p>Daily planner app that allows user to check for weather through third party APIs and create plans through scheduling</p>
                                    <ul>
                                        <li>Python</li>
                                        <li>Django</li>
                                        <li>React</li>
                                        <li>Tailwind</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id='container-right' class='container'>
                            <img class={props.mode ? ('project1-img2l'):('project1-img2d')} src='https://i.imgur.com/hfsWBeS.jpg'></img>
                            <div class={props.mode ? ('overlay1l'):('overlay1d')}>
                                <div class='text'>
                                    <h2>SwiftShop</h2>
                                    <p>Ecommerce app that allows someone to display items that they want to sell</p>
                                    <ul>
                                        <li>Python</li>
                                        <li>Django</li>
                                        <li>React</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class='container'>
                            <img class={props.mode ? ('project1-img1l'):('project1-img1d')} src='https://i.imgur.com/8FtvJB5.jpg'></img>
                            <div class={props.mode ? ('overlay1l'):('overlay1d')}>
                                <div class='text'>
                                    <h2>HomeCare Services</h2>
                                    <p>Homecare services app that allows the elderly and handicapped to find assistance of any kind</p>
                                    <li>React</li>
                                    <li>Express.js</li>
                                    <li>Node.js</li>
                                    <li>MongoDB</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class={project2 ? 'project2' : 'project2-2'}>
                        {project2h1 ? (
                            <h1 onClick={toggleProject2h1}>
                                click for more...
                            </h1>
                        ) : (
                            <>
                            <h1 onClick={toggleProject2h1}>
                                ...show less
                            </h1>
                            <div class='project3'>
                                <Carousel>
                                    <div>
                                        <img src='https://i.imgur.com/8GgBOjE.jpg'/>
                                        <p>Hi</p>
                                    </div>
                                    <div>
                                        <img src='https://i.imgur.com/8GgBOjE.jpg'/>
                                    </div>
                                    <div>
                                        <img src='https://i.imgur.com/8GgBOjE.jpg'/>
                                    </div>
                                </Carousel>
                            </div>
                            </>
                        )}
                    </div>  */}
                </div>
            </div>
        </>
    )
}
export default Project;