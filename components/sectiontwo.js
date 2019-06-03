import trump from "../data/trump.json";
import hillary from "../data/hillary.json";
import election from "../data/election.json";
import obama from "../data/obama.json";
import vote from "../data/vote.json";
import president from "../data/president.json";
import philippine from "../data/phillipine.json";
import MyBarChart from "./barchart";
const React = require("react");

class Section2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: [
        {
          id: "1",
          key: "trump",
          word: "Donald Trump",
          transform: "translate(-67, -80)",
          size: 50
        },
        {
          id: "2",
          key: "hillary",
          word: "Clinton Hillary",
          transform: "translate(16, -145)",
          size: 47
        },
        {
          id: "3",
          key: "election",
          word: "Election",
          transform: "translate(210, -20)",
          size: 45
        },
        {
          id: "4",
          key: "obama",
          word: "Obama",
          transform: "translate(-134, -5)",
          size: 45
        },
        {
          id: "5",
          key: "vote",
          word: "Vote",
          transform: "translate(-49, 65)",
          size: 43
        },
        {
          id: "6",
          key: "president",
          word: "president",
          transform: "translate(130, 70)",
          size: 30
        },
        {
          id: "7",
          key: "philippine",
          word: "Philippine",
          transform: "translate(-110, -158)",
          size: 27
        }
      ],
      selected: [0, 0, 0, 0, 0, 0, 0],
      open: false,
      data: []
    };
    this.handleClick = this.handleClick.bind(this);
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
  handleClick(id) {
    let def = [0, 0, 0, 0, 0, 0, 0];
    def[id - 1] = 1;
    this.setState({
      selected: def
    });
    let d = [];
    switch (id) {
      case "1":
        d = trump;
        break;
      case "2":
        d = hillary;
        break;
      case "3":
        d = election;
        break;
      case "4":
        d = obama;
        break;
      case "5":
        d = vote;
        break;
      case "6":
        d = president;
        break;
      case "7":
        d = philippine;
        break;
      default:
        break;
    }
    this.setState({
      data:d
    })
  }
  clicknews() {
    this.setState({ open: true });
  }
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div {...props}>
        <div className={"center"}>
          <div className={"section_2"}>
            <div className={"left"}>
              <svg height="430" width="640">
                <g
                  class="word-cloud dec_1900"
                  transform="translate(180,210)scale(1.0096153846153846)"
                >
                  {this.state.keyword.map(k => (
                    <text
                      key={k.id}
                      className={
                        this.state.selected[k.id - 1] === 0
                          ? "word"
                          : "word clickedWord"
                      }
                      id={k.id}
                      transform={k.transform}
                      style={{ fontSize: k.size }}
                      onClick={e => this.handleClick(k.id)}
                    >
                      {k.word}
                    </text>
                  ))}
                </g>
                <g transform="translate(5, 5)" />
                <g className="g-axis" />
              </svg>
            </div>
            <MyBarChart data={this.state.data} />
          </div>
          <div className={"examples_title"}>
            <span>The Fake News</span>
          </div>
          <div className={"examples"}>
            <div className={"example_content"} onClick={() => this.clicknews()}>
              <p className={"example_title x-small"}>Title goes here</p>
              <p className={"example_short x-small"}>
                <span className={"highlight"}>
                  Content goes here!!!want to say more lol what to write tho
                </span>
                <a>Read more</a>
              </p>
              <p className={"example_footer x-small"}>Time here/ source here</p>
            </div>
            <div className={"example_content"}>
              <p className={"example_title x-small"}>Title goes here</p>
              <p className={"example_short x-small"}>
                <span className={"highlight"}>
                  Content goes here!!!want to say more lol what to write tho
                </span>
                <a>Read more</a>
              </p>
              <p className={"example_footer x-small"}>Time here/ source here</p>
            </div>
            <div className={"example_content"}>
              <p className={"example_title x-small"}>Title goes here</p>
              <p className={"example_short x-small"}>
                <span className={"highlight"}>
                  Content goes here!!!want to say more lol what to write tho
                </span>
                <a>Read more</a>
              </p>
              <p className={"example_footer x-small"}>Time here/ source here</p>
            </div>
          </div>
          <div className={"examples_btn"}>
            <button className={"btn"}>Shuffle</button>
          </div>
        </div>
        <div className={this.state.open ? "news is-visible" : "news"}>
          <div className={"news_content"} ref={this.setWrapperRef}>
            <div
              className={"close-button"}
              onClick={() => this.setState({ open: false })}
            >
              x
            </div>
            <h4 className={"news_date"}>Time</h4>
            <h1 className={"news_title"}>It should be long long title</h1>
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
}

module.exports = Section2;
