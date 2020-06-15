var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "portfolio-container col-lg-8 offset-lg-2" },
        React.createElement(
          "div",
          { className: "page-header" },
          React.createElement(
            "h1",
            null,
            "Projects Page"
          )
        ),
        React.createElement(
          "div",
          { className: "portfolio-objects" },
          React.createElement(
            "p",
            null,
            "So, this site is a work in progress, but one of my philosophies when developing a project is to push to production early and often. Eventually this site will host my full portfolio, but for now, I just wanted to write a little as a placeholder. I'm not sharing this site yet, but there's always a chance someone stumbles onto it! Also, feel free to check out ",
            React.createElement(
              "a",
              { href: "https://github.com/zstearman3", target: "_blank" },
              "my github profile."
            )
          ),
          React.createElement(
            "h3",
            null,
            "ProphetRatings.com"
          ),
          React.createElement(
            "p",
            null,
            "A college basketball analytics website built with Ruby on Rails and PostgreSQL. The site is hosted on Heroku. This is a very large application displaying stats and analytics for every Division I NCAA basketball game for the last four seasons. I built an algorithm which ranks teams based on historical performance, but the goal of the site is to predict future performance. Future matchups are simulated, and predicted results are compared to Vegas lines to evaluate the performance of the algorithm."
          ),
          React.createElement(
            "h3",
            null,
            "LPS-Tracking.com"
          ),
          React.createElement(
            "p",
            null,
            "Performance tracking application for Lightning Production Services products. This site is also built with Ruby on Rails and utilizes a PostgreSQL database. The site is customer facing to allow customers to quickly view how well products have performed against historical runtimes. Well environments are captured in detail to allow for deep dive analysis into which products perform best in certain applications. LPS also uses the site internally to track performance metrics which then are used in marketing, technical papers, etc."
          ),
          React.createElement(
            "h3",
            null,
            "zachstearman.com"
          ),
          React.createElement(
            "p",
            null,
            React.createElement(
              "strong",
              null,
              "You are here."
            ),
            " This site is certainly still a work in progress, but I did want to highlight some of the cool things I'm working on with it. This front end is built with React. Styling is done with SCSS with the help of Bootstrap. My favorite part of the site is that it is serverless. It is hosted on AWS S3 and distributed to you with CloudFront. The contact form submission uses an API built with React to send your message to an AWS Lambda function, triggering an email to be sent to me immediately."
          ),
          React.createElement(
            "h3",
            null,
            "sweetgemshtx.com"
          ),
          React.createElement(
            "p",
            null,
            "My first production application built on Rails. This was the website for a home bakery in Houston, Texas. The site was built to focus on beautiful images of desserts, so it was a lot of fun to build! There was also a blog built into the site to help drive traffic."
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

// =============================

ReactDOM.render(React.createElement(App, null), document.getElementById('projects-container'));