
const React = require('react');

class Section1 extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      score: 0,
      n:0,
      result:'',
      open: false,
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
    
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.clicknews = this.clicknews.bind(this);

}
componentDidMount() {
  document.addEventListener("mousedown", this.handleClickOutside);
}

componentWillUnmount() {
  document.removeEventListener("mousedown", this.handleClickOutside);
}
setWrapperRef(node) {
  this.wrapperRef = node;
}
handleClickOutside(event) {
  if (
    this.state.open &&
    this.wrapperRef &&
    !this.wrapperRef.contains(event.target)
  ) {
    this.setState({ open: false });
  }
}
clicknews() {
  this.setState({ open: true });
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
   
   
    return (
      
      
      <div>
        
      <div className={"content-main"} onClick={() => this.clicknews()}>
        <h4>{this.state.news[this.state.n].title}</h4>
        <p className={"example_short x-small"}>{this.state.news[this.state.n].article} <a>Read more</a></p>
        <p className={"example_footer x-small"}>source:{this.state.news[this.state.n].source}</p>
      </div>
      <div className={"btns"}>
      <button className={"choice-btn-t"} onClick={()=>this.setAnswer('true')}>True</button>
      <button className={"choice-btn-f"} onClick={()=>this.setAnswer('false')}>False</button>
      </div>
      <div className={this.state.open ? "news is-visible" : "news"}>
          <div className={"news_content"} ref={this.setWrapperRef}>
            <div className={"close-button"} onClick={()=>this.setState({open:false})}>x</div>
            <h1 className={"news_title"}>{this.state.news[this.state.n].title}</h1>
            <p className={"news_body"}>
              My family recently moved to a new state and was blessed to find a
              wonderful new church to attend near our home. There's only one
              drawback. We have a young toddler, so we sit in the cry room
              during mass. At our previous church, the cry room was a place for
              us to practice church etiquette with our son so that we could
              someday sit with the rest of the congregation without disturbing
              the mass.
              <br />
              <br />
              The culture at this church is different; the cry room seems more
              like a playroom. Seeing all the other children running around
              makes keeping my toddler sitting in the pew nearly impossible
              (think major meltdowns). If we allow him to play with the other
              children, we spend the mass feeling like we've failed as christian
              parents. The result is that neither my husband nor I has felt
              fully present at a mass in months. Do you have any suggestions for
              how to reconcile this issue? -- missing mass
            </p>
          </div>
        </div>
      </div>
      
      
    );
  }
 
  renderResult() {
    return (
      <div>
      {this.state.result===this.state.news[this.state.n].answer?
      <div>
         <div className={"content-main"}>
         <div className={"answertrue"} >Correct</div>
         <div >
         <h5>Source:{this.state.news[this.state.n].source}</h5>
         <p>{this.state.news[this.state.n].explain}</p>
         </div>
         <div className={"btns"}>
         {this.state.n===1?
             <button className={"choice-btn-restart"} onClick={()=>this.reStart()} >Restart</button>
             : <button className={"choice-btn-next"}  onClick={()=>this.nextNews()} >Next</button>}
         
         </div>
         </div>
         </div>
      :<div>
         <div className={"content-main"}>
         <div className={"answerfalse"}>Wrong</div>
         <div>
             <h5>Source:{this.state.news[this.state.n].source}</h5>
             <p >{this.state.news[this.state.n].explain}</p>
         </div>
         <div className={"btns"}>
         {this.state.n===1?
             <button className={"choice-btn-restart"} onClick={()=>this.reStart()} >Restart</button>
             : <button className={"choice-btn-next"} onClick={()=>this.nextNews()} >Next</button>}
         </div>
         </div>
      </div>}
      </div>
     
    );
  }
  render() {
    
    return (
      <div className={"section1-container"}>
        <div>
        <div className={"section1-score"}>
        <p>score:{this.state.score}</p>
        </div>
          </div>
        <div className={"card"}>
        
        <div className={"card-content"}>
        {this.state.result==="" ? this.renderNews():this.renderResult() }
        </div>
        </div>  
        </div>
    );
  }
}

module.exports = Section1;