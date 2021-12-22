import React from 'react'
class App extends React.Component
{
    constructor()
    {
      super()
      this.state = {
          title : "Good Morning",
          num : 25
      }
    }
    startIncrement = ()=>{
          setInterval(()=>
          {
            this.setState({num : this.state.num+5})
          },100);
    }
    change = ()=>{
        console.log(this.state)
        //this.state.title = "Good Evening"
        this.setState({title:"Good Evening"})
        console.log(this.state)
    }
   
    render()
    {    
      console.log("Render Run ...... ")
      return <div>
          <h1>My first ReactJS Component</h1>
          <b>{this.state.title} : {this.state.num}</b>
          <br/>      
          <button onClick={this.change}>Change Title</button>  
          &nbsp;
          <button onClick={this.startIncrement}>Start</button>
      </div>
    }
}
export default App;
