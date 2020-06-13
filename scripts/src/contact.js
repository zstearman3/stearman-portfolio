class ContactForm extends React.Component {
  render() {
    return(
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <h1>Get in touch!</h1>
          <form>
            <div className="form-group" id="formName">
              <input className="form-control" id="nameInput" type="text" placeholder="Your name" />
            </div>
            <div className="form-group" id="formEmail">
              <input className="form-control" id="emailInput" type="email" placeholder="Your email" />
            </div>
            <div className="form-group" id="formMessage">
              <textarea className="form-control" id="messageInput" rows="5" placeholder="Your message" />
            </div>
            <button type="submit" class="btn btn-primary">SEND</button>
          </form>
        </div>
      </div>
    );
  }
}

// =============================

ReactDOM.render(
  <ContactForm />,
  document.getElementById('contact-container')
);
