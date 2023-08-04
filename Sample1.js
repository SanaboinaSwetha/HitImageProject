import React, { Component } from 'react'
import './Sample1.css'
export class Sample1 extends Component {

    constructor()
    {
        super()
        this.state={
            time:5,
            count:0
          
        }
    }
    componentDidMount()
    {
        document.title='Click-Me Game';
        this.interval=setInterval(this.tick,1000);
       
    }
    tick=()=>
    {
        if(this.state.time>0){
        this.setState({
            time:this.state.time-1
        });
    }
    }

  render() {
    return (
        <div>
     
        <p Style="margin-top:30px">Click the picture as many times as you can in {this.state.time} wacky seconds wacky seconds!</p>
        <br/>
       <img src='https://th.bing.com/th/id/OIP.bQFme_s1dfB8nJ6QE5HBNQHaHa?pid=ImgDet&rs=1' onClick={()=>{
        if(this.state.time>0){
            this.setState({count : this.state.count+1})
        }
        }} height="250px" width="250px"/>
        <br/>

      <h1>Score: {this.state.count}</h1>
      <br/>
      {this.state.time===0 &&
  
        <p id="over">Enough!!! I can't beaten by you.....</p>
    
      }
        <button onClick={()=>{
             this.setState({
               time:5,
                count:0
            })
        }}>Restart</button>
   
  </div>
    )
  }
}

export default Sample1