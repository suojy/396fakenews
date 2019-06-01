import ReactSpeedometer from "react-d3-speedometer"
const React = require("react");

class Section3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nowvalue: 50,
      chooseContent: [
        {
          id: 1,
          content:
            "You're probably frustrated about something, right? Aren't we all. You can get started by using Twitter to vent.",
          choice: [
            { toid: 2, mess: "Post a frustrated news" },
            { toid: 3, mess: "I'm not sure.." }
          ]
        },
        {
          id: 2,
          content:
            "This government is a complete and utter failure. #Resign! Losers!",
          choice: [
            { toid: 4, mess: "I'm not angry enough about the government" },
            { toid: 5, mess: "Post this" }
          ]
        },
        {
          id: 3,
          content:
            "Don't worry, it's perfectly safe. Nothing you do in this game affects the real world. ",
          choice: [{ toid: 2, mess: "Post a frustrated news" }]
        },
        {
          id: 4,
          content: "The Mainstream Media is one massive conspiracy. #FakeNews",
          choice: [
            { toid: 6, mess: "Don't care" },
            { toid: 5, mess: "Post this" }
          ]
        },
        {
          id: 5,
          content:
            "Look! Your constructive criticism of the government got you a few followers. And more followers means more influence.",
          choice: [
            { toid: 7, mess: "A start's a start" },
            { toid: 8, mess: "What do I do next?" }
          ]
        },
        {
          id: 6,
          content:
            "Is everybody else stupid or what? The Earth is not flat, it's a CUBE!! #Conspiracy",
          choice: [
            { toid: 2, mess: "Back to the first one" },
            { toid: 5, mess: "Post this" }
          ]
        },
        {
          id: 7,
          content:
            "Words to live by. But, people don't find you very credible yet. To gain some real influence, you'll need to raise your credibility.",
          choice: [
            { toid: 1, mess: "But how?" },
            { toid: 1, mess: "I'm ready!" }
          ]
        },
        {
          id: 8,
          content:
            "Well, people don't find you very credible yet. To gain some real influence, you'll need to raise your credibility.",
          choice: [
            { toid: 1, mess: "But how?" },
            { toid: 1, mess: "I'm ready!" }
          ]
        }
      ],
      nowat: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if(id===5){
        if(this.state.nowvalue===0){
            console.log("you are now freezed")
        }else{
            this.setState({nowvalue: this.state.nowvalue-10})
        }
        
    }
    this.setState({ nowat: id });
   
  }
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div {...props} className={"section3-container"}>
        <div className={"score"}>
            <h2 style={{color:'#E93D58'}}>Credibility</h2>
        <ReactSpeedometer startColor={"#E93D58"} endColor={"#FFFE54"} needleColor={"#90FCFD"} maxValue={100} value={this.state.nowvalue}/>
        </div>
        {this.state.chooseContent
          .filter(c => c.id === this.state.nowat)
          .map(c => (
            <div key={c.id}>
              <div className={"text-card"}>
                <p>{c.content}</p>
              </div>
              <div className={"choose"}>
                {c.choice.map(choice => (
                  <button
                    onClick={() => this.handleClick(choice.toid)}
                    key={"" + c.id + choice.toid + ""}
                  >
                    {choice.mess}
                  </button>
                ))}
              </div>
            </div>
          ))}
      </div>
    );
  }
}

module.exports = Section3;
