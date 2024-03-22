import React from 'react'
import './Footer.css'
const Footer = () => {
    return <>
        <footer>
            <h1>Let’s work together!</h1>
            <h5>Book a Meeting</h5>
            <div className="bottom">
                <div className='line'></div>
                <div className="info">
                    <div className="getintouch">
                        <form>
                            <h2>Get in Touch</h2>
                            <div class="form__group field">
                                <input type="input" class="form__field" placeholder="Email" name="name" id='name' required />
                                <label for="name" class="form__label">Email</label>
                                <input className='submit' type="submit" value="submit" />

                            </div>
                        </form>
                    </div>
                    <div className="details">
                        <a href="/">UI/UX design</a>
                        <a href="/">portfolio development</a>
                        <a href="/">website redesign</a>
                    </div>
                    <div className="details">
                        <a href="/">services</a>
                        <a href="/">logo design</a>
                        <a href="/">website development </a>
                        
                    </div>
                </div>

            </div>
        </footer>

    </>

}

export default Footer
