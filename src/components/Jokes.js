import React,{ Component } from 'react';


class Jokes extends Component {
  state = { jokes:{} };

  componentDidMount(){
    fetch('https://official-joke-api.appspot.com/random_joke').then( (res) => {
      return res.json();
    }).then( (result) => {
        
        this.setState({jokes:result});
    });
  }

  render(){
    const { punchline, setup } = this.state.jokes;

    //console.log(this.state.jokes);
    return(
      <div>
        <h2> Highlighted Jokes</h2>
        <span> {setup} <em> {punchline} </em> </span>
      </div>
    )
  }
}

export default Jokes;