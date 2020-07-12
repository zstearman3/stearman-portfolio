
class App extends React.Component {
  render() {
    return(
      <div className="portfolio-container col-lg-8 offset-lg-2">
        <div className="page-header">
          <h1>Projects Page</h1>
        </div>
        <div className="portfolio-objects">
          <p>
            So, this site is a work in progress, but one of my philosophies when developing
            a project is to push to production early and often. Currently, I'm working hard to receive my
            AWS Associate Developer Certification, but I will turn to this site afterwards! Eventually this site will
            host my full portfolio, but for now, I just wanted to write a little as a placeholder.
            I'm not sharing this site yet, but there's always a chance someone stumbles onto it! Also,
            feel free to check out <a href="https://github.com/zstearman3" target='_blank'>my github profile.</a>
          </p>
          <h3>ProphetRatings.com</h3>
          <p>
            A college basketball analytics website built with Ruby on Rails and PostgreSQL. The site is
            hosted on Heroku. This is a very large application displaying stats and analytics for every
            Division I NCAA basketball game for the last four seasons. I built an algorithm which ranks teams
            based on historical performance, but the goal of the site is to predict future performance. Future
            matchups are simulated, and predicted results are compared to Vegas lines to evaluate the
            performance of the algorithm.
          </p>
          <h3>LPS-Tracking.com</h3>
          <p>
            Performance tracking application for Lightning Production Services products. This site is also
            built with Ruby on Rails and utilizes a PostgreSQL database. The site is customer facing to
            allow customers to quickly view how well products have performed against historical runtimes.
            Well environments are captured in detail to allow for deep dive analysis into which products
            perform best in certain applications. LPS also uses the site internally to track performance metrics
            which then are used in marketing, technical papers, etc.
          </p>
          <h3>zachstearman.com</h3>
          <p><strong>You are here.</strong> This site is certainly still a work in progress, but
            I did want to highlight some of the cool things I'm working on with it. This front end is
            built with React. Styling is done with SCSS with the help of Bootstrap. My favorite part
            of the site is that it is serverless. It is hosted on AWS S3 and distributed to you with
            CloudFront. The contact form submission uses an API built with React to send your message
            to an AWS Lambda function, triggering an email to be sent to me immediately.
          </p>
          <h3>sweetgemshtx.com</h3>
          <p>
            My first production application built on Rails. This was the website for a home bakery in Houston,
            Texas. The site was built to focus on beautiful images of desserts, so it was a lot of fun to build!
            There was also a blog built into the site to help drive traffic.
          </p>
        </div>
      </div>
    );
  }
}

// =============================

ReactDOM.render(
  <App />,
  document.getElementById('projects-container')
);
