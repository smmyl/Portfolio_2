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
                            <input id='name1' type='name1' name='name1'/><br/><br/>
                            <label for='email1'>Email:</label><br/>
                            <input id='email1' type='email1' name-='email1' placeholder='optional'/><br/><br/>
                            <label for='comment'>Comment:</label><br/>
                            <textarea id='comment' rows='6' cols='50' name='comment' type='comment'/><br/>
                            <input type='submit' value='submit'/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;