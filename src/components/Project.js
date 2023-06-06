import {useState} from 'react'

const Project = () => {
    return (
        <>
            <div class='page'>
                <div class='project'>
                    <h1>Projects</h1>
                    <div class='project1'>
                        <div class='container'>
                            <img src='https://i.imgur.com/8GgBOjE.jpg'></img>
                            <div class='overlay1'>
                                <div class='text'>
                                    <h2>EZPlanner</h2>
                                </div>
                            </div>
                        </div>
                        <div id='container-right' class='container'>
                            <img src='https://i.imgur.com/hfsWBeS.jpg'></img>
                            <div class='overlay1'>
                                <div class='text'>
                                    <h2>SwiftShop</h2>
                                </div>
                            </div>
                        </div>
                        <div class='container'>
                            <img src='https://i.imgur.com/8FtvJB5.jpg'></img>
                            <div class='overlay1'>
                                <div class='text'>
                                    <h2>HomeCare Services</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='project2'>
                        <h1>and more...</h1>
                    </div> 
                </div>
            </div>
        </>
    )
}
export default Project;