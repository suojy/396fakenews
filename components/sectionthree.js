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
            { toid: 8, mess: "Netural" },
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
          content: "What about something about election fraud?",
          choice: [{ toid: 17, mess: "I'm ready!" }]
        },
        {
          id: 8,
          content: "Ha you just want to have some fun right? What about SNL?",
          choice: [
            { toid: 9, mess: "Say SNL knows the election result in advance!" }
          ]
        },
        {
          id: 9,
          type: "fn",
          about: "trump",
          cred: "5",
          title:
            "SNL Gets Real And Delivers The Most Important Message Of The Election Year (VIDEO)",
          text:
            "on November 6, 2016 8:03 am  \nSaturday Night Live has helped bring quite a bit of levity to this otherwise horrific election year but in the final episode before the election, before we as a nation go to the polls and decide if we want to be extraordinary or deplorable, the cast of Saturday Night Live could not help but drop the act and get real with America. \nIt began as it normally does, with Alec Baldwins masterful Donald Trump character and Kate McKinnons excellent portrayal of Hillary Clinton (if she spent all day every day mainlining a dangerous mixture of sugar and caffeine). \nI never use emails, Trump says in the cold opener. I use a very private, very secure site where one can write whatever they want to and no one can read it Its called Twitter. \nAfter he is informed that everyone can see his tweets, Trump replies: \nReally? And Im still in this thing? America you must really hate this lady. \nAfter a scathing rebuke of the medias decision to ignore Trumps cozy relationship with Putin, the KKK, and the FBI and instead focus on something as meaningless as Hillary Clintons emails, something magical happened: McKinnon and Baldwin dropped the facade and got serious. \nIm sorry, Kate. I just hate yelling all this stuff at you like this, Baldwin says. I just feel gross all the time about this. Dont you all feel gross? he added, addressing the audience. \nMcKinnon agrees and the two embark on a friendship montage through the city before returning to the stage. Then they dropped perhaps the most important message you will hear this election year. None of this would have mattered if you dont vote, Baldwin says. \nWe cant tell you who to vote for, but on Tuesday we all get a chance to choose what kind of country we want to live in, McKinnon finishes. \nTheyre right.",
          content: "uuid: 1b9104850bec39ed6a90d185913108c87f267767",
          choice: [{ toid: 2, mess: "Nice!" }]
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
          type: "fn",
          cred: "10",
          about: "trump",
          title:
            "Unhinged Trump Supporter Holds Children AT GUNPOINT Over Damaged Trump Sign (VIDEO)",
          text:
            "on November 4, 2016 4:45 pm  \nIf you had wanted to give Trump supporters the benefit of the doubt, this most recent incident proves that its far too much to give them. \nA 56-year-old man in Allen Park, Michigan has just been charged with six felonies after he held six children at gunpoint because he thought theyd damaged the Donald Trump sign on his lawn. Yes, this is the kind of deranged, emotionally unstable supporters Trump has attracted. \nThe man, Michael Robert Kubek, had called police on October 29th to report that his Trump sign had been hit by teenagers, who had fled the scene. When the police arrived at the scene, they didnt find Kubek at his home  however, when the officers followed the screams coming from around the corner, there he was. \nThe police saw Kubek standing over six children ages 12-14, who were sitting on the grass. Kubek accused the children of destroying his sign despite the fact that he never actually witnessed them doing it. The children denied any involvement, and the officers told Kubek to return to his house so they could speak to the children. \nAccording to the kids, they were simply on their way to the park for a birthday celebration when Kubek had pulled out a gun and pointed it at them, instructing them to sit down on the grass. Those witnessing the act took to social media to vent their shock: Twitter Twitter \nThe News-Herald reported: \nThe officer asked him again if he could identify any of the kids as the one who damaged his sign, but Kubek repeated that he could not. The officer then asked Kubek if he pulled out a pistol and pointed it at the kids. According to police, Kubek said yes. \nIn response to another question from the officer, Kubek said he felt threatened because he was outnumbered. \nYes, a grown man used a gun because he felt outnumbered by a small group of innocent kids. This is EXACTLY the type of unhinged person who shouldnt be trusted with firearms! Kubeks hearing is scheduled for December 5th  lets hope that whatever happens to Kubek, that he is no longer considered a responsible gun owner. You can watch a report below: \nFeatured image via Allen Park Police Department and Joe Raedle / Getty Images Share this Article! Author: Vera My passion is bringing attention to human rights and equality issues. In addition to writing for Addicting Info, I also run a website and digital magazine dedicated to social issues and promoting equality in all forms. Search",
          content: "uuid: 6e728a65950c4f686a534dffea96efdc52ce4d72",
          choice: [{ toid: 2, mess: "Make another fake news!" }]
        },
        {
          id: 14,
          type: "fn",
          cred: "10",
          about: "trump",
          title:
            "This Election is Not About Trump, Its about a Giant Middle Finger to Washington DC.",
          text:
            "Does anyone like Trump as a person ? The answer in No. It's not about that, it never was. This is about a giant middle finder to the DC Establishment. As a Citizen we only have one way to express our displeasure with DC. We are as divided as I've ever seen. This is not acceptable. If young people can't open businesses we have failed them. They can't. Trump is a tool we need for real change. He blew up the GOP. Our friends on the other side wanted Bernie. But, it was rigged against Bernie. Now you are going to support the very person who rigged your Primary. You almost blew up the DNC, but the job is not complete. We can not hand this crap to our younger generation. We will not. Only a billionaire can get this far on his own. He will be checked by Congress. Join us in giving the middle finger to the slave masters controlling our future. This Country belongs to us. Not a handful of wealthy families. This isn't about Trump. He's a tool in more ways than one. This is about cutting restraints and letting the American People go. At least, that's the way I see it.",
          content: "uuid: c5bf2532e22d222444e63658cd6fed941648ced7",
          choice: [{ toid: 2, mess: "Make another fake news!" }]
        },
        {
          id: 15,
          type: "fn",
          cred: "10",
          about: "trump",
          title:
            "The Amish In America Commit Their Vote To Donald Trump; Mathematically Guaranteeing Him A Presidential Victory - ABC News",
          text:
            "18 SHARE The Amish in America have committed their vote to Donald Trump guaranteeing him the Presidency. (AP Photo / Dennis System) \nCOLUMBUS, OH (AP) 〞 History was made today in Columbus, Ohio when more than 3 million Amish poured into the city to see the American Amish Brotherhood (AAB), an organization which acts as an informal governing body for the Amish community, endorse Donald Trump for president. That number represents a significant portion of the total Amish population, which the United States Census Bureau says numbers more than 20 million men and women nationwide all pledging their vote to Trump for President. With the full force of the Amish community behind him, Donald Trump is now mathematically guaranteed to win the presidency in November. \nThe organization typically meets once a year and the meetings usually consist of about 300 Amish leaders who meet to discuss the challenges, such as urban sprawl, that face the community. This year, however, the organization wanted as many people in attendance as possible so they can effectively instruct all Amish men and women of legal voting age to cast their vote for the flamboyant Republican nominee. \nThe Amish, who are direct descendants of the protestant reformation sect known as the Anabaptists, have typically stayed out of politics in the past. As a general rule, they dont vote, serve in the military, or engage in any other displays of patriotism. This year, however, the AAB has said that it is imperative that they get involved in the democratic process. \nOver the past eight years, the Democratic Party has launched a systematic assault on biblical virtues, said AAB chairman Menno Simons. We have seen more and more Christians being persecuted for their faith; we have seen the state defile the institution of marriage. Now, they want to put a woman in the nations highest leadership role in direct violation of 1 Timothy 2:12. We need to stop this assault and take a stand for biblical principles. Donald Trump has shown in both action and deed that he is committed to restoring this country to the Lords way. \nAccording to statistician Nate Silver of the website fivethirtyeight.com, there are no possible scenarios in which Hillary Clinton can win with Donald Trump carrying the Amish vote. \nThe Amish have their highest numbers in perennial swing states like Pennsylvania, Virginia, Ohio, Indiana, and Iowa, Silver noted. They also have strong numbers in reliably Democratic states like Michigan, Illinois, and New York, meaning that Hillary will lose those states as well. There is also a sizeable community in Florida which, while not as large as it is in the Midwest, is still large enough to turn Florida for Trump. Over the next two weeks, you can expect Hillary to enter into a state of freefall in all of my predictive models. \nThe Clinton campaign issued a written statement to the AAB asking them to reconsider their decision. \nI dont believe that Donald Trump is the person who best represents your interests, Clinton wrote to the AAB. As a career real estate developer, he represents a clear threat to your simple way of life. As former first lady of Arkansas, I understand the concerns of rural Americans more than any candidate in this election. I implore you to consider all of the facts before voting for my opponent. \nMost pundits believe that Mrs. Clintons plea is too little too late. \nDuring a press conference in Manhattan, Trump thanked the AAB for their support and promised to put the Amish to work maintaining government buildings, which he said would save taxpayers millions because the Amish do great work for a very low price. \nThough Clinton has pledged to stay in the race until the very end, many of her campaign workers have already resigned. According to the Associated Press, it is expected that the Clinton campaign will lose 50% of its staff over the next two weeks. There is a general mood of hopelessness and despair in the Clinton camp, and many simply want to cut their losses. \nIt looked like she was going to win this election easily, said Paul Horner, a campaign worker in Ohio, But this is what happens when you wake a sleeping giant. Cleary, Mrs. Clinton took far too much for granted in this race, and we are all now paying the price. Its really sad to see the campaign end this way. \nIf you are interested in learning more about the Amish community and the AAB, you can contact the Pennsylvania Amish Heritage Museum at (785) 273-0325. TAGS",
          content: "uuid: 8a35883f9c9f0b15a9e20ab8711d403d91d57405",
          choice: [{ toid: 2, mess: "Make another fake news!" }]
        },
        {
          id: 16,
          cred: "10",
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
          type: "fn",
          cred: "10",
          content: "Wanna make the news eye-catching?",
          choice: [{ toid: 18, mess: "For sure! Add some words like Boom! " }]
        },
        {
          id: 18,

          type: "fn",
          cred: "10",
          about: "hillary",
          content: "uuid: 69851ee9245122d59905e6075036999ba0cd82ee",

          title:
            "Hillary Clintons election fraud finally exposed. California stolen from Bernie Sanders!",
          text:
            "Hillary Clinton's election fraud finally exposed. California stolen from Bernie Sanders! page: 1 link With all the talk from MSM of Russians interfering with US elections. Rumors of Soros owning new computer voting machines that can easily be programed to steal election. If you don't think that the DNC won't steal an election if they can. Think again. a reply to: Doctor Smith Intuitively, we all know that Hillary is capable of attempting to steal an election. Your video, combined with the many e-mails provided by WikiLeaks, confirms that she does indeed have an army of cronies out there breaking federal and state election laws, to not only cheat Bernie Sanders, but to get her into the White House again too. Hillary is indeed a Nasty Woman, just as Elizabeth Warren confirmed this past Monday. link This is the stuff that needs a independent investigation launched pronto. If it is found out 100% it is a fix, what then? I guess there could be a sweeping write in movement for Bernie..or just vote for Stein a reply to: Doctor Smith Now the million dollar question is what are \"we\" the people going to do about it ? originally posted by: SaturnFX This is the stuff that needs a independent investigation launched pronto. If it is found out 100% it is a fix, what then? I guess there could be a sweeping write in movement for Bernie..or just vote for Stein Vote for Pee Wee Herman if you want. Just don't vote those Clinton criminals in again. But if you really want to stop her, you have to vote for Trump. Compared to Hillary, Trump is Honest Abraham Lincoln. new topics",

          choice: [{ toid: 2, mess: "Make another fake news!" }]
        },
        {
          id: 19,
          type: "fn",
          about: "hillary",
          cred: "10",
          title: "Hillary Conquers 2 Steps with Little Help",
          text:
            "Hillary Conquers 2 Steps with Little Help page: 1 link She has again conquered a flight of stairs, well 2 steps, with little help. As you can see in the video she takes the first step with ease as her helper rushes to her side just in time. The next step was larger and she glances back knowing a lending hand is there. He gives her a boost and she proudly, albeit ironically, holds up her \"Stronger Together\" sign. Political Mudpit seems like a good spot for this. With how Presidents age in office, how much is she going to deteriorate over the next 4 years? Ghost I though she was about to perform a pole dance. (post by paradoxious removed for a serious terms and conditions violation) link What with all of the time she spends off of the campaign trail, you would think she could spend a little time in the gym, working on her leg strength. And I know, given all of the \"speech money\" she and Bill have socked away, she can afford to hire a personal trainer... link a reply to: mobiusmale What with all of the time she spends off of the campaign trail, you would think she could spend a little time in the gym, working on her leg strength. And cut into her 16 hours of sleep and naps per day? Not likely. link originally posted by: ghostrager Could it just be that the second step was a little higher up and she needed some help? Or maybe theven gentleman that is supposed to be by her side was just being a gentleman. Good thing Franklin D. Roosevelt isn't running in the US today. don't fool yourself, ol frank was in some deep pockets to. And cut into her 16 hours of sleep and naps per day? Not likely. I had heard it was 18 hours. Good thing Franklin D. Roosevelt isn't running in the US today. don't fool yourself, ol frank was in some deep pockets to. In this case it was about steps, not which pocket. There all in some pocket even if it isn't about money. link a reply to: roadgravel frank also tried to hide the extant his disability from the public as best he could. sounds very familiar to me. link Her, age in office? We're talking about the grim reaper here. Who's already been in cahoots with other elites and has been in the game completely giving zero f***s about anything except power. Anyway, the video didn't really deliver. She is wearing heels, so that's enough to valid needing a hand assist. Enough to be a non story, and discredit her real concerning health issues as far reach. On another note, she's horrendous. Her greeting the crowd wooing looking like someone who's high as hell in lala land tripping on acid etc. Let's not talk further about her joker smile.",

          content: "uuid: 7facacd9a551b14017784d720f1eaf9647946ec9",
          choice: [{ toid: 2, mess: "Make another fake news!" }]
        }
      ],
      nowat: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  //触发  13，14， 17, 15, 19扣信用10，
  //触发9扣5,
  handleClick(id, c) {
    if (c.cred) {
      if (this.state.nowvalue === 0) {
        console.log("you are now freezed");
      } else {
        console.log(c.cred);
        this.setState({ nowvalue: this.state.nowvalue - Number(c.cred) });
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
                {c.type ? <p>{c.content}</p> : <p>{c.content}</p>}
              </div>
              <div className={"choose"}>
                {c.choice.map(choice => (
                  <button
                    onClick={() => this.handleClick(choice.toid, c)}
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
