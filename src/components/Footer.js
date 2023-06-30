import {useState} from 'react'

const Footer = (props) => {
    return (
        <>
            <div class='page'>
                <div class={props.mode ? ('footerl'):('footerd')}>
                    <h3>Email: Sammy.Liaop@gmail.com</h3>
                </div>
            </div>
        </>
    )
}

export default Footer;