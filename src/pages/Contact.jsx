function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>

      <form>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <br />

        <div>
          <label>Message</label>
          <br />
          <textarea
            rows="5"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <br />

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;