import React from 'react';
const Contact =()=>{
    return(
        <div>
     <section className='Contact'>
        <h2 className='fade-in'>ContactUs</h2>
        <form>
            <input type ="text" placeholder='Full Name' required/>
            <input type ="email" placeholder='Email Address' required />
            <input type ="text" placeholder='Phone Number' required/>
            <textarea placeholder='Your Meassage' rows={5} required></textarea>
            <button type='submit'>Submit</button>
        </form>
     </section>
        </div>
    )
}

export default Contact;