var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactForm = function (_React$Component) {
  _inherits(ContactForm, _React$Component);

  function ContactForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ContactForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      formFields: {
        name: '',
        email: '',
        message: ''
      }
    }, _this.formHandler = function (e) {
      e.preventDefault();
      var data = new FormData(e.target);
      var formattedData = {
        name: data.get('nameInput'),
        email: data.get('emailInput'),
        message: data.get('messageInput')
      };
      console.log(formattedData);

      fetch('https://x5dwvahcbe.execute-api.us-east-1.amazonaws.com/contact', {
        method: 'POST',
        body: data
      });

      alert("Your message has been sent!");
      document.getElementById("contact-form").reset();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ContactForm, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { 'class': 'row' },
        React.createElement(
          'div',
          { 'class': 'col-lg-6 offset-lg-3' },
          React.createElement(
            'h1',
            null,
            'Get in touch!'
          ),
          React.createElement(
            'form',
            { id: 'contact-form', onSubmit: this.formHandler },
            React.createElement(
              'div',
              { className: 'form-group', id: 'formName' },
              React.createElement('input', { className: 'form-control', id: 'nameInput', name: 'nameInput', type: 'text', placeholder: 'Your name' })
            ),
            React.createElement(
              'div',
              { className: 'form-group', id: 'formEmail' },
              React.createElement('input', { className: 'form-control', id: 'emailInput', name: 'emailInput', type: 'email', placeholder: 'Your email' })
            ),
            React.createElement(
              'div',
              { className: 'form-group', id: 'formMessage' },
              React.createElement('textarea', { className: 'form-control', id: 'messageInput', name: 'messageInput', rows: '5', placeholder: 'Your message' })
            ),
            React.createElement(
              'button',
              { type: 'submit', 'class': 'btn btn-primary' },
              'SEND'
            )
          )
        )
      );
    }
  }]);

  return ContactForm;
}(React.Component);

// =============================

ReactDOM.render(React.createElement(ContactForm, null), document.getElementById('contact-container'));