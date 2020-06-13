
class App extends React.Component {
  render() {
    return(
      <div className="page-header">
        <h1>Projects Page</h1>
      </div>
    );
  }
}

// =============================

ReactDOM.render(
  <App />,
  document.getElementById('projects-container')
);
