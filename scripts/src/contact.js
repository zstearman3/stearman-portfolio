class ContactForm extends React.Component {
  state = {
    formFields: {
      name: '',
      email: '',
      message: ''
    }
  }

  formHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const spamCheck = data.get('filterInput');
    console.log(spamCheck);
    if (spamCheck == null){
      const formattedData = {
          name: data.get('nameInput'),
          email: data.get('emailInput'),
          message: data.get('messageInput')
        };
        console.log(formattedData);

        fetch('https://x5dwvahcbe.execute-api.us-east-1.amazonaws.com/01/contact', {
          method: 'POST',
          dataType: 'json',
          body: JSON.stringify(formattedData),
        });

        alert("Your message has been sent!");
      }
      document.getElementById("contact-form").reset();
    };

  render() {
    return(
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <h1>Get in touch!</h1>
          <form id="contact-form" onSubmit={this.formHandler}>
            <div className="form-group" id="formName">
              <input className="form-control" id="nameInput" name="nameInput" type="text" placeholder="Your name" />
            </div>
            <div className="form-group" id="formEmail">
              <input className="form-control" id="emailInput" name="emailInput" type="email" placeholder="Your email" />
            </div>
            <div className="form-group" id="formMessage">
              <textarea className="form-control" id="messageInput" name="messageInput" rows="5" placeholder="Your message" />
            </div>
            <div className="form-group honeypot d-none" id="formFilter">
              <input className="form-control" type="checkbox" id="filterInput" name="filterInput"></input>
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
