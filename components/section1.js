const React = require("react");

class Section1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      n: 0,
      result: "",
      open: false,
      newspicked: [],
      news: [
        {
          title:
            "Post-Trump Liberal Meltdown: Counseling, Cry-ins, Therapy Dogs and Poetry",
          article:
            "You can imagine how nations like China and Russia are now laughing at US students as mass psychological trauma has apparently set-in across liberal America. Schools, universitiesand political institutions across the country are now offering various services following Republican Donald Trump’s insurgent  victory in the US presidential election. \n\n  Therapy Dogs included two golden doodles, two American Eskimo dogs, and a beagle mix – walked around the offices of the House of Representatives. Students at Cornell University even staged a “cry-in” on campus the day after the election.  \n\n Other US campuses were organizing various theraputic activities like poetry readings, where “healthy snacks will be served.” \n\n The dogs were organized by NGOs the Human Animal Bond Research Initiative, Pet Partners, the Pet Leadership Council and the Pet Industry Joint Advisory Council. \n\n Their press release says that Democratic Party staffers needed, “the help of a non-judgmental, furry, four-legged best friend that enjoys bipartisan support.” \n\n “Organizers say it was a great way for workers to blow off steam especially for those whose bosses may have lost re-election bids,” NBC added. \n\n Also,“cry-ins” were staged on the campus of Cornell University, and Yale University even staged a “group scream” in order to help student vent their “internalized stress” the day after the election. \n\n Watch RT America’s Ed Schultz and Lionel, of Lionel Media, discuss the ridiculous liberal reaction and student meltdown to Trump’s surprise victory.",
          source: "www.21stcenturywire.com",
          answer: "false",
          id: 0,
          keywords: [
            "distraught ",
            "vulnerabilities",
            "needed",
            "trauma",
            "ridiculous"
          ],
          credibility: "3/5",
          explain:
            "21stcenturywire.com is an unreliable site. Note that sourecs are named but the stories are not found on the source websites. "
        },
        {
          title:
            "Hillary Clinton Supporters Now Calling for a Recount of Votes in Battleground States ",
          article:
            "“The person who received the most votes free from interference or tampering needs to be in the White House. It may well be Donald J. Trump, but further due diligence is required to ensure that American democracy is not threatened. \n\n 21st Century Wire says…   \n\n Although the election was called on Nov 8th, the Democratic Party’s ongoing campaign to delegitimize the new incoming President is still ongoing.    \n\n For those of us with long enough memories, the Democratic Party, their media operatives and the Clinton Campaign were claiming that Trump and the GOP would be engaged in this very same behavior after Hillary Clinton won the Presidency (as expected).  \n\n Notice how the shoe is now on the other foot.  \n\n It’s interesting reading past stories by ‘news’ sources linked to the Clinton Campaign and John Podesta as Politico has, who ran a feature on Aug 16th entitled, “Why the GOP Will Never Accept President Hillary Clinton” which lays out the case of Hillary’s lock on the White House and how the evil Republicans will not accept her eventual election victory.  \n\n “Will Donald Trump respect the peaceful transition of power?” howled CNN’s Wolf Blitzer in the run-up to the election. The question now is: will the Democrats respect the result, and simply “Move On,” as they say?  \n\n Of course, we now know that ‘journalists’ like Wolf at CNN were getting their talking points directly the Clinton Campaign .  \n\n As it turns out, the only thing illegitimate about the 2016 Election… was the mainstream corporate media.  \n\n More form the Guardian…  \n\n The Guardian  \n\n A growing number of academics and activists are calling for US authorities to fully audit or recount the 2016 presidential election vote in key battleground states, in case the results could have been skewed by foreign hackers.  \n\n The loose coalition, which is urging Hillary Clinton’s campaign to join its fight, is preparing to deliver a report detailing its concerns to congressional committee chairs and federal authorities early next week, according to two people involved.  \n\n The document, which is currently 18 pages long, focuses on concerns about the results in the states of Michigan, Pennsylvania and Wisconsin. \n\n “I’m interested in verifying the vote,” said Dr Barbara Simons, an adviser to the US election assistance commission and expert on electronic voting. “We need to have post-election ballot audits.” Simons is understood to have contributed analysis to the effort but declined to characterise the precise nature of her involvement. \n\n A second group of analysts, led by the National Voting Rights Institute founder John Bonifaz and Professor Alex Halderman, the director of the University of Michigan’s center for computer security and society, is also taking part in the push for a review, and has been in contact with Simons.  \n\n In a blogpost early on Wednesday, Halderman said paper ballots and voting equipment should be examined in Wisconsin, Michigan, and Pennsylvania, warning that deadlines were rapidly approaching.  \n\n “Unfortunately, nobody is ever going to examine that evidence unless candidates in those states act now, in the next several days, to petition for recounts,” he said. \n\n The developments follow Clinton’s surprise defeat to Donald Trump in the 8 November vote, and come after US intelligence authorities released public assessments that Russian hackers were behind intrusions into regional electoral computer systems and the theft of emails from Democratic officials before the election… ",
          source: "www.21stcenturywire.com",
          answer: "false",
          id: 1,
          keywords: [
            "interference",
            "tampering needs",
            "is required to ensure",
            "illegitimate",
            "declined to characterise",
            "intrusions"
          ],
          credibility: "3/5",
          explain:
            "21stcenturywire.com is an unreliable site. Note that sourecs are named but the stories are not found on the source websites. "
        },
        {
          title:
            "ISIS Executes 300 Iraqi Civilians by Firing Squad North of Mosul",
          article:
            "ISIS Executes 300 Iraqi Civilians by Firing Squad North of Mosul.\n  Member of Nineveh Provincial Council, Hossam al-Din al-Abbar, announced, that the ISIS executed 300 civilians and former security members, north of Mosul. \n Abbar said in a press statement, “Today, ISIS members executed 300 persons for collaborating with security forces,” pointing out that, “The ISIS was detaining them in its prisons, and then executed them by firing squad in Moshairefa village, north of Mosul.” \n “ISIS filmed the execution after the so-called Sharia Court issued the death sentence in Wilayet Nineveh,” Abbar added. \n The ISIS executed thousands of Mosul residents after capturing the city in June 2014, on different charges, especially for collaborating with the security forces. Recommended For You",
          source: "www.ahtribune.com",
          answer: "false",
          id: 2,
          keywords: ["detaining", "death"],
          credibility: "1/5",
          explain:
            "ahtribune.com is a famous fake news website. Just be careful!"
        },
        {
          title: "Russia, China Look To Autonomous Financial System",
          article:
            "Russia and China need to create an autonomous financial system which would be minimally subject to political risks and external pressure, Russian Prime Minister Dmitry Medvedev said in an interview with the Chinese Central Television (CCTV).  \n  “As I see it, what should we be guided with in creating a modern financial system in the People’s Republic of China and in the Russian Federation?” he said. “We need to set up a modern, protected and simultaneously quite autonomous financial system, which would be subject to political risks to a lesser degree.” Nowadays, Russia and China are considering integration of Russia’s national payment system, the Mir bank cards, and China’s UnionPay system, he said.   \n “In our view, it would help to enhance the reliability of payments,” Medvedev said, adding that sometimes some countries were trying to exert “all sorts of political pressure.” European banks had been regularly fined by US financial authorities and financial companies, he added. \n “They say ‘We will take ten billion euros from a French bank and seven billion euros from a German bank’. Our European partners agree with this,” Medvedev said.  \n “I am not speaking about the nature of these disputes but that we must protect our financial systems. China must protect its own system and Russia must protect its own system. Therefore, this cooperation is very useful as in this situation no-one will be capable of blocking the road of financial traffic,” he emphasized. Russia looks to predictability of China’s economic growth \n Russia expects that China’s economic growth will be predictable and is set to cooperate with Chinese partners for the purpose, Russia’s Prime Minister said in an interview. ",
          keywords: ["need to", "lesser", "blocking"],
          source: "www.initialreactionnews.com",
          answer: "false",
          id: 3,
          credibility: "2/5",
          explain:
            'IRNews is a satire website with the motto:"Your source of uncourced news.'
        },
        {
          title: "It Literally Hurts My Brain to Read the Economic Idiocy",
          article:
            "Here’s a letter to the Wall Street Journal. \n Wilbur Ross’s and Peter Navarro’s defense of Donald Trump’s economic policies is mostly a mash of bunkum (“ A Vote for Trump Is a Vote for Growth ,” Oct. 26). Consider this claim: “Donald Trump will cut taxes, reduce regulation … and eliminate our trade deficit through muscular trade negotiations that increase exports, [and] reduce imports….”\n  Cut taxes? Bunk. Trump famously promises to raise taxes on Americans who buy imports. Reduce regulation? Rubbish. Trump promises more government intrusions into Americans’ commerce with foreigners. \n As for ‘eliminating’ our trade deficit, Trump might indeed succeed on that front. But such ‘success’ would be regrettable, for it would be the inevitable outcome of the American economy being made an unattractive destination for investment. (Ross and Navarro seem to be unaware that to “eliminate our trade deficit” – such as was done, for example, during the Great Depression – is to eliminate net contributions by foreigners to increasing the size of America’s capital stock.)\n But Trump’s most absurd promise is to enrich Americans by increasing exports and reducing imports. Imports are what we voluntarily buy and exports are the price we pay. Therefore, a policy meant to increase exports while decreasing imports is a policy meant to force Americans to pay more to foreigners and to receive less in return – a decidedly unartful deal the architect of which would deserved to be fired.\n  But the Trump camp’s confusion runs even more deeply. Exporting for Americans is worthwhile only because it supplies us with the means to purchase imports, either currently or in the future. So a policy that aims both to increase exports and to decrease imports is akin to a policy that aims both to increase people’s spending power and to decrease it. It’s a policy meant to give Americans greater means for acquiring imports as it simultaneously strips Americans of the freedom to use those means. It’s the economic policy equivalent of an attempt to square a circle.\n Sincerely,\n Donald J. Boudreaux\n  Professor of Economics \n  and\n  Martha and Nelson Getchell Chair for the Study of Free Market Capitalism at the Mercatus Center\n  George Mason University \n  Fairfax, VA 22030",
          source: "www.beforeitsnews.com",
          keywords: ["Rubbish", "deficit", "intrusions"],
          answer: "false",
          id: 4,
          credibility: "2/5",
          explain:
            "beforeitsnews.com, which can be told from its funny name, is an unreliable news site."
        },
        {
          title:
            "Donald Trump 'wants us to impeach him,' Nancy Pelosi tells Jimmy Kimmel",
          article:
            'Pelosi has repeatedly confronted calls for Trump’s impeachment since taking the speaker’s gavel. In the Thursday night interview, she went further in explaining the reasoning behind her belief that President Trump wants Democrats to impeach him because it could benefit him once he is out of office.\n "I think the president wants us to impeach him," the California Democrat told Jimmy Kimmel. "He knows it\'s not a good idea to be impeached, but the silver lining for him is then, he believes, that he would be exonerated by the United States Senate. \n "And," Pelosi continued, "there is a school of thought that says, "If the Senate acquits you, why bring charges against him in the private sector when he\'s no longer president?" So when we go through with our case, it\'s got to be ironclad. Ironclad.',
          source: "www.abcnews.com",
          answer: "true",
          keywords: ["would be exonerated", "acquits", "could benefit"],
          id: 5,
          credibility: "5/5",
          explain: "ABC News is a mainstream cable news channel."
        },
        {
          title:
            "New guidelines say kids should start swim lessons around age 1. Here’s what to look for.",
          article:
            "“Research has found that swim lessons are beneficial for children starting around age 1,” Linda Quan, a co-author of the policy statement, said in a AAP news release.\n “Formal lessons can reduce the risk of drowning by 88 percent,” says Debbie Hesse, executive director of the USA Swimming Foundation, the philanthropic arm of USA Swimming, whose goal is to have every child learn to swim.\n “We have found a child can start at 6 months or when they are able to hold their head upright,” says Lindsay Mondick, senior manager of aquatics for the YMCA of the USA, Other factors to consider include health status, emotional maturity, and physical and cognitive limitations.",
          source: "www.washingtonpost.com",
          answer: "true",
          id: 6,
          keywords: ["beneficial", "able", "emotional maturity"],
          credibility: "5/5",
          explain:
            "Washington Post publishes well-sourced and accurate articles."
        },
        {
          title: "Google Should Be Afraid. Very Afraid.",
          article:
            "This is the moment the U.S. technology superpowers surely knew was coming: The U.S. government is preparing to crawl all over Google to figure out whether it is an abusive monopolist. Google parent company Alphabet Inc. and the other tech giants should be quaking in their fleece vests.\n Bloomberg News and other news organizations reported late Friday that the U.S. Department of Justice is preparing to open an investigation into Google’s compliance with antitrust laws. If it goes forward, an investigation will no doubt be broad, lengthy, messy, and impossible for Google and its investors to predict. \n Bloomberg News and other news organizations reported late Friday that the U.S. Department of Justice is preparing to open an investigation into Google’s compliance with antitrust laws. If it goes forward, an investigation will no doubt be broad, lengthy, messy, and impossible for Google and its investors to predict.",
          source: "www.washingtonpost.com",
          answer: "true",
          id: 7,
          keywords: ["Bloomberg News", "Justice"],
          credibility: "5/5",
          explain: "Washington Post is a neutral and reliable news publisher."
        },
        {
          title: "Students attempt to launch self-built rocket",
          article:
            'Commonly referred to as the Karman line, that imaginary border is 62 miles (100km) away and on Friday a group of students from across the US and Canada are hoping to send an unmanned rocket through it.\n It\'s the brainchild of 19-year-old rocket-obsessed North Carolina University student Joshua Farahzad, who said he came up with the idea during his "boring" summer vacation last year.\n  "I was always fascinated with space, I built a small rocket in high school after watching a movie called October Sky, and thought to myself how one day I\'d like to build a bigger one," he said.\n A number of talented students majoring in subjects from aeronautical engineering to business responded, and Joshua narrowed them down to a team of 40 who are now collectively known as Operation Space.\n Without the help of a large financial backer, engineering professionals, or teachers, Operation Space began collaborating on the project remotely from their various locations across the US and Canada, using a Slack message channel, video chats and phone calls.',
          source: "www.bbc.com",
          answer: "true",
          id: 8,
          keywords: ["collaborating", "talented"],
          credibility: "5/5",
          explain: "BBC News is reliable."
        },
        {
          title: "London teens sent to Africa to escape knife crime",
          article:
            'Hundreds of British teenagers are being sent by their parents to East Africa to avoid knife crime in the UK, representatives of the Somali community say. Why are they taking this drastic choice? \n  "In those few years I was doing my A-levels it was tough. Just seeing people being dropped every other day, being stabbed," Yusuf tells the Victoria Derbyshire programme from his new home in Kenya.\n  "London\'s not the place to be for a teenager."\n Yusuf was born and raised in London but moved to Nairobi after a close friend in his neighbourhood was stabbed to death. \n It is a decision an increasing number of parents are taking, for their children\'s safety. ',
          source: "www.bbc.com",
          answer: "true",
          id: 9,
          keywords: ["safety"],
          credibility: "5/5",
          explain: "BBC News is reliable."
        }
      ]
    };
    this.setAnswer = this.setAnswer.bind(this);
    this.nextNews = this.nextNews.bind(this);
    this.reStart = this.reStart.bind(this);
    this.renderNews = this.renderNews.bind(this);
    this.renderResult = this.renderResult.bind(this);
  }

  componentWillMount() {
    var shuffled = this.state.news.slice(0),
      i = 10,
      min = 5,
      temp,
      index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    if (shuffled.slice(min).length == 5) {
      this.setState({
        newspicked: [...shuffled.slice(min)]
      });
    }
  }

  clicknews() {
    this.setState({ open: true });
  }
  setAnswer(answer) {
    let score = 0;
    if (answer === this.state.newspicked[this.state.n].answer)
      score = this.state.score + 10;
    else score = this.state.score;
    this.setState({
      result: answer,
      score: score
    });
  }
  nextNews() {
    const n = this.state.n + 1;
    this.setState({
      n: n,
      result: ""
    });
    console.log(this.state.newspicked);
  }
  reStart() {
    this.setState({
      score: 0,
      n: 0,
      result: ""
    });
    var shuffled = this.state.news.slice(0),
      i = 10,
      min = 5,
      temp,
      index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    this.setState({
      newspicked: [...shuffled.slice(min)]
    });
  }
  renderNews() {
    return (
      <div>
        <div className={"content-main"}>
          <h4>{this.state.newspicked[this.state.n].title}</h4>
          <p className={"example_short x-small"}>
            {this.state.newspicked[this.state.n].article}
          </p>
          <p className={"example_footer x-small"}>
            source:{this.state.newspicked[this.state.n].source}
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
        {this.state.result === this.state.newspicked[this.state.n].answer ? (
          <div>
            <div className={"content-main"}>
              <div className={"answertrue"}>Correct</div>
              <div>
                <h5>Source:{this.state.newspicked[this.state.n].source}</h5>
                <h5 style={{ margin: 0, fontStyle: "italic" }}>
                  Pay attention to these words:
                </h5>
                <div className={"keywords"}>
                  {this.state.newspicked[this.state.n].keywords.map(key => (
                    <h5>{key}</h5>
                  ))}
                </div>
                <p>
                  <span className="cred_highlight">Credibility</span>:{" "}
                  {this.state.newspicked[this.state.n].credibility}
                </p>
                <p>
                  Explanation: {this.state.newspicked[this.state.n].explain}
                </p>
              </div>
              <div className={"btns"}>
                {this.state.n === 4 ? (
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
                <h5>Source:{this.state.newspicked[this.state.n].source}</h5>
                <h5 style={{ margin: 0, fontStyle: "italic" }}>
                  Pay attention to these words:
                </h5>
                <div className={"keywords"}>
                  {this.state.newspicked[this.state.n].keywords.map(key => (
                    <h5>{key}</h5>
                  ))}
                </div>
                <p>
                  <span className="cred_highlight">Credibility</span>:{" "}
                  {this.state.newspicked[this.state.n].credibility}
                </p>
                <p>
                  Explanation: {this.state.newspicked[this.state.n].explain}
                </p>
              </div>
              <div className={"btns"}>
                {this.state.n === 4 ? (
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
