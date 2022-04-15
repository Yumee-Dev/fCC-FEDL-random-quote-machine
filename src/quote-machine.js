let quotes;
let quotesLength;

fetch(
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
)
  .then((response) => response.json())
  .then((data) => {
    quotes = data.quotes;
    quotesLength = quotes.length;
    ReactDOM.render(<QuoteMachine />, document.getElementById("container"));
  });

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    const rnd = Math.floor(Math.random() * quotesLength);
    this.state = {
      text: quotes[rnd].quote,
      author: quotes[rnd].author
    };
    this.newQuoteClick = this.newQuoteClick.bind(this);
  }

  newQuoteClick() {
    const rnd = Math.floor(Math.random() * quotesLength);
    this.setState({
      text: quotes[rnd].quote,
      author: quotes[rnd].author
    });
  }

  render() {
    const rnd = Math.floor(Math.random() * 361);
    const darkColor = `hsl(${rnd}, 50%, 15%)`;
    const lightColor = `hsl(${rnd}, 50%, 25%)`;
    const lightestColor = `hsl(${rnd}, 50%, 90%)`;

    const backStyle = {
      background: `linear-gradient(180deg, ${darkColor}, ${lightColor})`,
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };

    const boxStyle = {
      backgroundColor: lightestColor,
      width: "450px",
      maxWidth: "100%",
      padding: "2rem",
      borderRadius: document.body.clientWidth <= 450 ? 0 : 4
    };

    const textStyle = {
      color: darkColor,
      textAlign: "center",
      fontSize: "1.5rem"
    };

    const authorStyle = {
      color: darkColor,
      margin: "1.5rem 0",
      textAlign: "end"
    };

    const controlsStyle = {
      display: "flex",
      justifyContent: "space-between"
    };

    const buttonsStyle = {
      display: "flex",
      justifyContent: "start",
      alignItems: "center"
    };

    const aStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: darkColor,
      width: "2.5rem",
      height: "2.5rem",
      marginRight: ".5rem",
      borderRadius: 4
    };

    const newQuoteBtnStyle = {
      fontFamily: "inherit",
      backgroundColor: darkColor,
      color: lightestColor,
      padding: "0 1rem",
      border: "none",
      borderRadius: 4,
      cursor: "pointer"
    };

    return (
      <div style={backStyle}>
        <div id="quote-box" style={boxStyle}>
          <div id="text" style={textStyle}>
            {this.state.text}
          </div>
          <div id="author" style={authorStyle}>
            {this.state.author}
          </div>
          <div id="controls" style={controlsStyle}>
            <div style={buttonsStyle}>
              <a
                style={aStyle}
                href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${this.state.text}%20${this.state.author}`}
                id="tweet-quote"
              >
                <svg
                  viewBox="328 355 335 276"
                  width="1rem"
                  height="1rem"
                  fill={lightestColor}
                >
                  <path d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425 Z"></path>
                </svg>
              </a>
              <a
                style={aStyle}
                href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${this.state.author}&content=${this.state.text}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button
`}
                id="tumblr-post"
              >
                <svg
                  viewBox="0 0 21 36.8"
                  width="1rem"
                  height="1rem"
                  fill={lightestColor}
                >
                  <path d="M21 36.75h-6.2c-5.577 0-9.733-2.844-9.733-9.646V16.21H0v-5.9C5.576 8.876 7.909 4.12 8.177 0h5.79v9.354h6.757v6.856h-6.756v9.486c0 2.843 1.448 3.826 3.753 3.826h3.271L21 36.75z"></path>
                </svg>
              </a>
            </div>
            <button
              id="new-quote"
              style={newQuoteBtnStyle}
              onClick={this.newQuoteClick}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}
