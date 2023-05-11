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
                            <img class='home-img-links' src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-512.png'/>
                            <img class='home-img-links' src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png'/>
                        </div>
                        <div class='home1-2-2'>
                            <img id='home-img-1' src='https://i.imgur.com/oCrGeWig.jpg'/>
                        </div>
                        <div class='home1-2-3'>
                            <a href='mailto: sammy.liaop@gmail.com' target='_blank'><img class='home-img-links' src = 'https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/mail-512.png'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;