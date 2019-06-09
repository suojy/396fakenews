const React = require("react");

class SentimentSect extends React.Component {
  state = {
    show: false
  };
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div {...props}>
        <div className={"examples_btn"}>
          <button
            className={"btn"}
            onClick={() => this.setState({ show: !this.state.show })}
          >
            Find Me all The Wrong Places
          </button>
        </div>

        <div
          className={
            this.state.show ? "description showtooltip" : "description"
          }
        >
          <p>
            Words with <span className={"word_highlight"}>red background</span>{" "}
            means bad sentiment or opinion words which is not objective. Words
            in <span className={"comment_highlight"}>yellow background </span>{" "}
            means they are problematic and explaination is attached in next to
            it. Check them out and see if you are right and careful enough!
          </p>
        </div>
        <div className={this.state.show ? "tooltip showtooltip" : "tooltip"}>
          <p>
            In this title, poetry and counseling mentioned, yet they are not
            mentioned or explained in the article.
          </p>
        </div>
        <div
          className={
            this.state.show ? "tooltip second showtooltip" : "tooltip second"
          }
        >
          <p>
            {" "}
            This part is real since this event actually happened. Yet the second
            part was added by themselves.{" "}
          </p>
        </div>
        <div
          className={
            this.state.show ? "tooltip three showtooltip" : "tooltip three"
          }
        >
          <p>
            “NBC added” is actually “21st century wire editors added to satisfy
            their own goal and opinion”, which makes this news not true anymore.
          </p>
        </div>
        <div
          className={
            this.state.show ? "tooltip four showtooltip" : "tooltip four"
          }
        >
          <p>Things happened in Cornell is true, but not Yale.</p>
        </div>
        <div className={"sentimentsent-container"}>
          <h4>
            Post-Trump Liberal Meltdown:{" "}
            <span className={this.state.show ? "comment_highlight" : "comment"}>
              Counseling
            </span>
            , Cry-ins, Therapy Dogs and
            <span className={this.state.show ? "comment_highlight" : "comment"}>
              {" "}
              Poetry
            </span>
          </h4>
          <p>
            You can imagine how nations like China and Russia are now laughing
            at US students as mass psychological{" "}
            <span className={this.state.show ? "word_highlight" : "normal"}>
              trauma
            </span>{" "}
            has apparently set-in across liberal America. Schools, universities
            and political institutions across the country are now offering
            various services following Republican Donald Trump’s insurgent
            victory in the US presidential election.{" "}
          </p>
          <br />
          <p className={this.state.show ? "comment_highlight" : "comment"}>
            According to NBC News, Democratic staffers were{" "}
            <span className={this.state.show ? "word_highlight" : "normal"}>
              so distraught
            </span>{" "}
            over this week’s election that “therapy dogs” had to be brought in
            to help workers on Capitol Hill cope with their{" "}
            <span className={this.state.show ? "word_highlight" : "normal"}>
              vulnerabilities
            </span>{" "}
            and
            <span className={this.state.show ? "word_highlight" : "normal"}>
              hurt
            </span>{" "}
            feelings.
          </p>
          <p> </p>
          <br /> <p> </p>
          <p>
            Therapy Dogs included two golden doodles, two American Eskimo dogs,
            and a beagle mix – walked around the offices of the House of
            Representatives. Students at Cornell University even staged a
            “cry-in” on campus the day after the election.
          </p>
          <br />
          <p>
            Other US campuses were organizing various theraputic activities like
            poetry readings, where “healthy snacks will be served.”
          </p>
          <br />
          <p>
            The dogs were organized by NGOs the Human Animal Bond Research
            Initiative, Pet Partners, the Pet Leadership Council and the Pet
            Industry Joint Advisory Council.
          </p>
          <br />
          <p>
            Their press release says that Democratic Party staffers needed, “the
            help of a non-judgmental, furry, four-legged best friend that enjoys
            bipartisan support.”
          </p>
          <p> </p>
          <br /> <p> </p>
          <p
            style={{ fontStyle: "italic" }}
            className={this.state.show ? "comment_highlight" : "comment"}
          >
            “Organizers say it was a great way for workers to blow off steam
            especially for those whose bosses{" "}
            <span className={this.state.show ? "word_highlight" : "normal"}>
              may have lost
            </span>{" "}
            re-election bids,” NBC added.
          </p>
          <p> </p>
          <br /> <p> </p>
          <p className={this.state.show ? "comment_highlight" : "comment"}>
            Also,“cry-ins” were staged on the campus of Cornell University, and
            Yale University even staged a “group scream” in order to help
            student vent their “internalized stress” the day after the election.
          </p>
          <p> </p>
          <br /> <p> </p>
          <p>
            <span className={this.state.show ? "word_highlight" : "normal"}>
              Watch
            </span>{" "}
            RT America’s Ed Schultz and Lionel, of Lionel Media, discuss the{" "}
            <span className={this.state.show ? "word_highlight" : "normal"}>
              ridiculous
            </span>{" "}
            liberal reaction and student meltdown to Trump’s surprise victory
          </p>
        </div>
      </div>
    );
  }
}

module.exports = SentimentSect;
