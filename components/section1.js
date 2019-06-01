
const React = require('react');

class Section1 extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      score: 0,
      n:0,
      result:'',
      news: [
        {
          id: 1,
          title:"NEWS 1",
          article:"BALABALA",
          answer:'false',
          source:"fakenews.com",
          explain:"balabala",
        },
        {
          id: 2,
          title:"NEWS 2",
          article:"BALABALA",
          answer:'true',
          source:"NewYorkTimes.com",
          explain:"balabala",
        },
    ]
    }
    this.setAnswer = this.setAnswer.bind(this);
    this.nextNews=this.nextNews.bind(this);
    this.reStart=this.reStart.bind(this);
    this.renderNews=this.renderNews.bind(this);
    this.renderResult=this.renderResult.bind(this);

}
componentDidMount(){
  console.log(this.state.n);
}
  setAnswer(answer) {
    
    let score=0;
    if(answer===this.state.news[this.state.n].answer)
      score=this.state.score+10;
    else
      score=this.state.score;
    this.setState({
        result: answer,
        score:score
    });
    console.log(this.state.result)
}
   
  nextNews() {
    const n = this.state.n + 1;
    this.setState({
        n: n,
        result: ''
    });

  }

  reStart(){
    this.setState({
      score:0,
      n:0,
      result:''
    })
  }
  renderNews() {
    console.log(this.state.news[this.state.n])
   
    return (
      <div>
      
      <div>
      <div>

      <div >
        <h5>{this.state.news[this.state.n].title}</h5>
        <p>{this.state.news[this.state.n].article}</p>
        <p><small>source:{this.state.news[this.state.n].source}</small></p>
      </div>
      </div>
      <button onClick={()=>this.setAnswer('true')}>True</button>
      <button onClick={()=>this.setAnswer('false')}>False</button>
      </div>
      </div>
      
    );
  }
 
  renderResult() {
    return (
      <div>
      {this.state.result===this.state.news[this.state.n].answer?
      <div>
         <div>
         <div >Correct</div>
         <div >
         <h5>Source:{this.state.news[this.state.n].source}</h5>
         <p>{this.state.news[this.state.n].explain}</p>
         </div>
         <div>
         {this.state.n===1?
             <button onClick={()=>this.reStart()} >Restart</button>
             : <button onClick={()=>this.nextNews()} >Next</button>}
         
         </div>
         </div>
         </div>
      :<div>
         <div>
         <div >Wrong</div>
         <div>
             <h5>Source:{this.state.news[this.state.n].source}</h5>
             <p >{this.state.news[this.state.n].explain}</p>
         </div>
         <div>
         {this.state.n===1?
             <button onClick={()=>this.reStart()} >Restart</button>
             : <button onClick={()=>this.nextNews()} >Next</button>}
         </div>
         </div>
      </div>}
      </div>
     
    );
  }
  render() {
    
    return (
        <div>
        <div>
        <p>score:{this.state.score}</p>
        </div>
        <div>
        {this.state.result==="" ? this.renderNews():this.renderResult() }
        </div>
        </div>  
    );
  }
}

module.exports = Section1;