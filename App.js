import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }
    this.update = this.update.bind(this);
  }
  update(e){
}
  render(){
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
        <textarea
          onChange={this.update}
          defaultValue={this.state.input}>
          </textarea>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}


export default App
