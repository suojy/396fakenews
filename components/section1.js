const React = require("react");

class Section1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      n: 0,
      result: "",
      open: false,
      news: [
        {
          id: 1,
          title: "NEWS 1",
          article:
            "My family recently moved to a new state and was blessed to find a wonderful new church to attend near our home. There's only onedrawback. We have a young toddler, so we sit in the cry room during mass. At our previous church, the cry room was a place forus to practice church etiquette with our son so that we could someday sit with the rest of the congregation without disturbing the mass.",
          answer: "false",
          source: "fakenews.com",
          explain: "balabala"
        },
        {
          id: 2,
          title: "NEWS 2",
          article: 
          "I am a mother torn. Our 18-year-old daughter, \"Kathy,\" was to be married last august to \"john,\" her childhood sweetheart (he's 19). Just nine days before the wedding, our 15-year-old daughter (i'll call her mary) told me that john had raped her. In mary's words, \"He took sexual advantage of me.\" she claimed it happened more than once-maybe six or seven times. Kathy first accused her sister of lying. Then she said, \"If john did have sex with mary, it was mary's fault because she's a flirt and a tease, and she's always had a crush on john.\" my husband believed mary and had john arrested (he is out on bail now). Naturally we called the wedding off, but kathy says she is going to marry john-no matter what! To make matters worse, kathy just told us that she is pregnant with john's baby. Unfortunately our priest is on an extended vacation in ireland. This mess has turned our whole family upside down. Mary was supposed to be in kathy's wedding, but because of the accusations she made against john, kathy wrote her out of the wedding. Abby, if these girls were your daughters, what would you do? Please hurry your answer, as kathy is beginning to show. A mess in massachusetts",
          answer: "true",
          source: "NewYorkTimes.com",
          explain: "balabala"
        }
      ]
    };
    this.setAnswer = this.setAnswer.bind(this);
    this.nextNews = this.nextNews.bind(this);
    this.reStart = this.reStart.bind(this);
    this.renderNews = this.renderNews.bind(this);
    this.renderResult = this.renderResult.bind(this);

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
    let score = 0;
    if (answer === this.state.news[this.state.n].answer)
      score = this.state.score + 10;
    else score = this.state.score;
    this.setState({
      result: answer,
      score: score
    })
  }

  nextNews() {
    const n = this.state.n + 1;
    this.setState({
      n: n,
      result: ""
    });
  }
  reStart() {
    this.setState({
      score: 0,
      n: 0,
      result: ""
    });
  }
  renderNews() {
    return (
      <div>
        <div className={"content-main"}>
          <h4>{this.state.news[this.state.n].title}</h4>
          <p className={"example_short x-small"}>
            {this.state.news[this.state.n].article}
          </p>
          <p className={"example_footer x-small"}>
            source:{this.state.news[this.state.n].source}
          </p>
        </div>
        <div className={"btns"}>
          <button
            className={"choice-btn-t"}
            onClick={() => this.setAnswer("true")}
          >
            True
          </button>
          <button
            className={"choice-btn-f"}
            onClick={() => this.setAnswer("false")}
          >
            False
          </button>
        </div>
      </div>
    );
  }

  renderResult() {
    return (
      <div>
        {this.state.result === this.state.news[this.state.n].answer ? (
          <div>
            <div className={"content-main"}>
              <div className={"answertrue"}>Correct</div>
              <div>
                <h5>Source:{this.state.news[this.state.n].source}</h5>
                <p>{this.state.news[this.state.n].explain}</p>
              </div>
              <div className={"btns"}>
                {this.state.n === 1 ? (
                  <button
                    className={"choice-btn-restart"}
                    onClick={() => this.reStart()}
                  >
                    Restart
                  </button>
                ) : (
                  <button
                    className={"choice-btn-next"}
                    onClick={() => this.nextNews()}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={"content-main"}>
              <div className={"answerfalse"}>Wrong</div>
              <div>
                <h5>Source:{this.state.news[this.state.n].source}</h5>
                <p>{this.state.news[this.state.n].explain}</p>
              </div>
              <div className={"btns"}>
                {this.state.n === 1 ? (
                  <button
                    className={"choice-btn-restart"}
                    onClick={() => this.reStart()}
                  >
                    Restart
                  </button>
                ) : (
                  <button
                    className={"choice-btn-next"}
                    onClick={() => this.nextNews()}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  render() {
    return (
      <div className={"section1-container"}>
        <div>
          <div className={"section1-score"}>
            <span className={"highlight2"}>score:{this.state.score}</span>
          </div>
        </div>
        <div className={"card"}>
          <div className={"card-content"}>
            {this.state.result === "" ? this.renderNews() : this.renderResult()}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Section1;
