import React,{ Component } from 'react';

  const TITLES =[
    'a software engineer',
    'a music lover',
    'an enthusiastic learner',
    'an adventure seeker'
  ]; 

class Title extends Component{

  constructor(){
    super();
    this.state = { "index":0 };
  }

  componentDidMount(){
    this.animateTitle(); 
  }

  componentWillUnmount(){
    clearTimeout(this.animateFunction);
  }

  animateTitle = () => {

    let i = 1;
    
      this.animateFunction = setInterval( () =>{

        this.setState({ "index":i });
        i++;
        i = i < TITLES.length ? i : 0;
      },3000)

  }

  render(){
    console.log(this.state.index);
    return(
      <p> I am {TITLES[this.state.index]} </p>
    )
  }

}

export default Title;