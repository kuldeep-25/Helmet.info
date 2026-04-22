function Contact() {
    return (
        <div className="contact">
            <form action="submit">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Submit</button>
            </form>
            <p className="contact">We will get back to you soon! <br />You can also reach us at contact@helmetinfo.com</p>
        </div>
    )
}

export default Contact;