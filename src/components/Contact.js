import {useState} from 'react'

const Contact = () => {
    return (
        <>
            <div class='page'>
                <div class='contact'>
                    <h1>Contact</h1>
                    <div class='contact1'>
                        <p>  I strive to be a better developer everyday so feel free to leave me a message of advice or comment or if you'd like to contact me about anything!
                            <br/> 
                        </p>
                    </div>
                    <div class='contact2'>
                        <form>
                            <label for='name1'>Name:</label><br/>
                            <input id='name1' type='text' name='name1'/><br/><br/>
                            <label for='email1'>Email:</label><br/>
                            <input id='email1' type='text' name-='email1' placeholder='optional'/><br/><br/>
                            <label for='comment'>Comment:</label><br/>
                            <textarea id='comment' rows='6' cols='50' name='comment'/><br/>
                            <input type='submit' value='submit'/>
                        </form>
                    </div>
                    <div class='contact3'>
                        <p>Email: sammy.liaop@gmail.com</p>
                        <a href='mailto: sammy.liaop@gmail.com' target='_blank'><img id='mail2' src = 'https://img.icons8.com/?size=512&id=Cjuj2uISMdQ1&format=png'/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;