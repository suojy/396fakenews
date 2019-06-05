import ReactSpeedometer from "react-d3-speedometer";
const React = require("react");

class Section3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowvalue: 50,
      chooseContent: [
        {
          id: 1,
          content: "You are here for the position of fake news tycoom right?",
          choice: [
            { toid: 3, mess: "I'm not sure" },
            { toid: 2, mess: "Right!" }
          ]
        },
        {
          id: 2,
          content: "Who do you wanna make fake news about?",
          choice: [{ toid: 4, mess: "Trump" }, { toid: 5, mess: "Hillary" }]
        },
        {
          id: 3,
          content:
            "Don't worry, it's perfectly safe. Nothing you do in this game affects the real world. ",
          choice: [{ toid: 2, mess: "Post a fake news" }]
        },
        {
          id: 4,
          content:
            "Do you wanna post a negative, netural or positive fake news?",
          choice: [
            { toid: 6, mess: "Negative" },
            { toid: 9, mess: "Netural" },
            { toid: 10, mess: "Positive" }
          ]
        },
        {
          id: 5,
          content:
            "Do you wanna post a negative, netural or positive fake news?",
          choice: [
            { toid: 7, mess: "Negative" },
            { toid: 8, mess: "Netural" },
            { toid: 16, mess: "Positive" }
          ]
        },
        {
          id: 6,
          content: "What about something about Russia and Putin?",
          choice: [
            { toid: 11, mess: "Nah, get me another one." },
            { toid: 12, mess: "Go for it!" }
          ]
        },
        {
          id: 7,
          content: "What about something about email controversy?",
          choice: [{ toid: 17, mess: "I'm ready!" }]
        },
        {
          id: 9,
          content:
            "Nah, what are you thinking? Don't be so civilized, you are making fake news!",
          choice: [{ toid: 5, mess: "Let me choose again" }]
        },
        {
          id: 9,
          content:
            "Nah, what are you thinking? Don't be so civilized, you are making fake news!",
          choice: [{ toid: 4, mess: "Let me choose again" }]
        },
        {
          id: 10,
          content: "Something about Amish supporting him?",
          choice: [{ toid: 15, mess: "Guess I don't have a choice" }]
        },
        {
          id: 11,
          content: "What about middle east??",
          choice: [{ toid: 14, mess: "Nice " }]
        },
        {
          id: 12,
          content: "Wanna make the news eye-catching?",
          choice: [{ toid: 13, mess: "For sure! Add some words like Boom! " }]
        },
        {
          id: 13,
          content: "uuid: 6e728a65950c4f686a534dffea96efdc52ce4d72",
          choice: [{ toid: 2, mess: "Make another fake news!" }]
        },
        {
          id: 14,
          content: "uuid: c5bf2532e22d222444e63658cd6fed941648ced7",
          choice: [{ toid: 2, mess: "Make another fake news!" }]
        },
        {
          id: 15,
          content: "uuid: 8a35883f9c9f0b15a9e20ab8711d403d91d57405",
          choice: [{ toid: 2, mess: "Make another fake news!" }]
        },
        {
          id: 16,
          content:
            "What about posting something about her health situation to defend her?",
          choice: [
            {
              toid: 19,
              mess:
                "Right, fake news can sometimes do something good! And I want to be gentle."
            }
          ]
        },
        {
          id: 17,
          content: "Wanna make the news eye-catching?",
          choice: [{ toid: 18, mess: "For sure! Add some words like Boom! " }]
        },
        {
          id: 18,
          content: "uuid: 87d7bb4dec5ba06bbc5882390bca07a49fbbe6db",
          choice: [{ toid: 2, mess: "Make another fake news!" }]
        },
        {
          id: 19,
          content: "uuid: 7facacd9a551b14017784d720f1eaf9647946ec9",
          choice: [{ toid: 2, mess: "Make another fake news!" }]
        }
      ],
      nowat: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  //触发  13，14， 17扣信用10，
  //触发 15，19 扣5
  handleClick(id) {
    if (id === 5) {
      if (this.state.nowvalue === 0) {
        console.log("you are now freezed");
      } else {
        this.setState({ nowvalue: this.state.nowvalue - 10 });
      }
    }
    this.setState({ nowat: id });
  }
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div {...props} className={"section3-container"}>
        <div className={"score"}>
          <h2 style={{ color: "#E93D58" }}>Credibility</h2>
          <ReactSpeedometer
            startColor={"#E93D58"}
            endColor={"#FFFE54"}
            needleColor={"#90FCFD"}
            maxValue={100}
            value={this.state.nowvalue}
          />
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
