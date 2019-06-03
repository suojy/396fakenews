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
          word: "Hillary Clinton",
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
      shuffle: true,
      data: [],
      selected_example: [],
      key: ""
    };
    this.example = {};
    this.handleClick = this.handleClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.clicknews = this.clicknews.bind(this);
    this.shuffle = this.shuffle.bind(this);
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
  handleClick(id, key) {
    let def = [0, 0, 0, 0, 0, 0, 0];
    def[id - 1] = 1;
    this.setState({
      selected: def,
      key: key
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
      data: d
    });
    let shuffled = d.sort(() => 0.5 - Math.random());
    this.setState({
      selected_example: shuffled.slice(0, 3)
    });
  }
  clicknews(id) {
    this.example = this.state.data.filter(d => d.uuid === id)[0];
    this.setState({ open: true });
  }
  shuffle() {
    let shuffled = this.state.data.sort(() => 0.5 - Math.random());
    this.setState({
      selected_example: shuffled.slice(0, 3)
    });
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
                      onClick={e => this.handleClick(k.id, k.key)}
                    >
                      {k.word}
                    </text>
                  ))}
                </g>
                <g transform="translate(5, 5)" />
                <g className="g-axis" />
              </svg>
            </div>
            <div>
              {this.state.key !== "" ? (
                <p className={"barchart-title"}>
                  <span className={"wordkey"}>{this.state.key}</span> was
                  mentioned in fake news
                </p>
              ) : null}

              {this.state.key !== "" ? (
                <p className={"barchart-y"}>Mentions per 10k</p>
              ) : null}
              <MyBarChart data={this.state.data} />
            </div>
          </div>
          {this.state.selected_example.length !== 0 ? (
            <div className={"examples_title"}>
              <span>The Fake News</span>
            </div>
          ) : null}
          <div className={"examples"}>
            {this.state.selected_example.length !== 0
              ? this.state.selected_example.map(s => (
                  <div
                    className={"example_content"}
                    onClick={() => this.clicknews(s.uuid)}
                  >
                    <p className={"example_title x-small"}>{s.title}</p>
                    <p className={"example_short_e x-small"}>
                      <p className={"highlight"}>{s.text}</p>
                      <a>Read more</a>
                    </p>
                    <p className={"example_footer x-small"}>
                      {s.published.substring(0, 10)}/ {s.site_url}
                    </p>
                  </div>
                ))
              : null}
          </div>
          {this.state.selected_example.length !== 0 ? (
            <div className={"examples_btn"}>
              <button className={"btn"} onClick={() => this.shuffle()}>
                Shuffle
              </button>
            </div>
          ) : null}
        </div>
        <div className={this.state.open ? "news is-visible" : "news"}>
          <div className={"news_content"} ref={this.setWrapperRef}>
            <div
              className={"close-button"}
              onClick={() => this.setState({ open: false })}
            >
              x
            </div>
            {this.example.length !== 0 ? (
              <div>
                <h4 className={"news_date"}>
                  {this.example.published
                    ? this.example.published.substring(0, 10)
                    : this.example.published}
                </h4>
                <h1 className={"news_title"}>{this.example.title}</h1>
                <p className={"news_body"}>{this.example.text}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Section2;
