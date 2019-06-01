import { Transition } from "react-transition-group";
const React = require("react");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

class Stickers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [
        "LIE",
        "DENY",
        "veto",
        "CHEAT",
        "scam",
        "fraud",
        "sham",
        "FALSITY",
        "PROVOKE",
        "IGNORE",
        "DESTROY",
        "faultiness",
        "inaccuracy"
      ],
      in: false,
      colors: ["#7b3af5", "#d93125", "#000", "#90FCFD", "#FFFE54"]
    };
    this.duration = 2000;
  }

  componentDidMount() {
    for (var i = 1; i <= 1000; i++) {
      setTimeout(() => {
        this.setState({
          in: true
        });
      }, i * 2000);
      setTimeout(() => {
        this.setState({
          in: false
        });
      }, i * 2000);
    }
  }
  renderStickers(t) {
    var posx = (Math.random() * (1200 - 200)).toFixed();
    var posy = (Math.random() * (500 - 70)).toFixed();
    let index = Math.floor(Math.random() * Math.floor(this.state.colors.length))
    var random_color = this.state.colors[
      index
    ];
    return (
      <Transition in={this.state.in} timeout={this.duration}>
        {status => {
          return (
            <li
              className={"fade-transition fade-" + status}
              style={{
                backgroundColor: random_color,
                color: index==3||index==4?'#000':'#fff',
                position: "absolute",
                left: posx + "px",
                top: posy + "px"
              }}
            >
              {t}
            </li>
          );
        }}
      </Transition>
    );
  }

  render() {
    const shuffled = this.state.things.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 6);
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <ul {...props} style={{ position: "absolute" }}>
        {selected.map(t => this.renderStickers(t))}
      </ul>
    );
  }
}

module.exports = Stickers;
