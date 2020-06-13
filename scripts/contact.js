var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactForm = function (_React$Component) {
  _inherits(ContactForm, _React$Component);

  function ContactForm() {
    _classCallCheck(this, ContactForm);

    return _possibleConstructorReturn(this, (ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).apply(this, arguments));
  }

  _createClass(ContactForm, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "row" },
        React.createElement(
          "div",
          { "class": "col-lg-6 offset-lg-3" },
          React.createElement(
            "h1",
            null,
            "Get in touch!"
          ),
          React.createElement(
            "form",
            null,
            React.createElement(
              "div",
              { className: "form-group", id: "formName" },
              React.createElement("input", { className: "form-control", id: "nameInput", type: "text", placeholder: "Your name" })
            ),
            React.createElement(
              "div",
              { className: "form-group", id: "formEmail" },
              React.createElement("input", { className: "form-control", id: "emailInput", type: "email", placeholder: "Your email" })
            ),
            React.createElement(
              "div",
              { className: "form-group", id: "formMessage" },
              React.createElement("textarea", { className: "form-control", id: "messageInput", rows: "5", placeholder: "Your message" })
            ),
            React.createElement(
              "button",
              { type: "submit", "class": "btn btn-primary" },
              "SEND"
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