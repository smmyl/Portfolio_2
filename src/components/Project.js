import {useState} from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const Project = () => {
    const [project2h1, setProject2h1] = useState(true)
    const [project2, setProject2] = useState(true)

    const toggleProject2h1 = () => {
        setProject2h1(!project2h1)
        setProject2(!project2)
    }
    return (
        <>
            <div class='page'>
                <div class='project'>
                    <h1>Projects</h1>
                    <div class='project1'>
                        <div class='container'>
                            <img class='project1-img1' src='https://i.imgur.com/8GgBOjE.jpg'></img>
                            <div class='overlay1'>
                                <div class='text'>
                                    <h2>EZPlanner</h2>
                                </div>
                            </div>
                        </div>
                        <div id='container-right' class='container'>
                            <img class='project1-img2' src='https://i.imgur.com/hfsWBeS.jpg'></img>
                            <div class='overlay1'>
                                <div class='text'>
                                    <h2>SwiftShop</h2>
                                </div>
                            </div>
                        </div>
                        <div class='container'>
                            <img class='project1-img1' src='https://i.imgur.com/8FtvJB5.jpg'></img>
                            <div class='overlay1'>
                                <div class='text'>
                                    <h2>HomeCare Services</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class={project2 ? 'project2' : 'project2-2'}>
                        {project2h1 ? (
                            <h1 onClick={toggleProject2h1}>
                                click for more...
                            </h1>
                        ) : (
                            <>
                            <h1 onClick={toggleProject2h1}>
                                ...
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
                    </div> 
                </div>
            </div>
        </>
    )
}
export default Project;