function ContactForm() {
  return (
    <>
      <main className="contact">
        <article className="contact-form">
          <h1>
            <i className="bx bxs-chat"></i>Contact Us
          </h1>
          <form name="input-new-blog" method="post" action="" className="form1">
            <div className="input-box">
              <input type="text" required="required" />
              <span>Name</span>
            </div>
            <div className="input-box">
              <input type="text" required="required" />
              <span>Email</span>
            </div>
            <div className="input-box">
              <input type="text" required="required" />
              <span>Title</span>
            </div>
            <div className="textarea-box">
              <textarea cols="135" rows="10" required="required"></textarea>
              <span>Feedback</span>
            </div>

            {/* <!-- <input className="submit" type="submit" value="Submit!" /> --> */}
            <button className="btn submit">Submit!</button>
          </form>
        </article>
      </main>
    </>
  )
}

export default ContactForm
