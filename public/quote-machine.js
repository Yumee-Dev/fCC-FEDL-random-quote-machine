var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var quotes = void 0;
var quotesLength = void 0;

fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(function (response) {
  return response.json();
}).then(function (data) {
  quotes = data.quotes;
  quotesLength = quotes.length;
  ReactDOM.render(React.createElement(QuoteMachine, null), document.getElementById("container"));
});

var QuoteMachine = function (_React$Component) {
  _inherits(QuoteMachine, _React$Component);

  function QuoteMachine(props) {
    _classCallCheck(this, QuoteMachine);

    var _this = _possibleConstructorReturn(this, (QuoteMachine.__proto__ || Object.getPrototypeOf(QuoteMachine)).call(this, props));

    var rnd = Math.floor(Math.random() * quotesLength);
    _this.state = {
      text: quotes[rnd].quote,
      author: quotes[rnd].author
    };
    _this.newQuoteClick = _this.newQuoteClick.bind(_this);
    return _this;
  }

  _createClass(QuoteMachine, [{
    key: "newQuoteClick",
    value: function newQuoteClick() {
      var rnd = Math.floor(Math.random() * quotesLength);
      this.setState({
        text: quotes[rnd].quote,
        author: quotes[rnd].author
      });
    }
  }, {
    key: "render",
    value: function render() {
      var rnd = Math.floor(Math.random() * 361);
      var darkColor = "hsl(" + rnd + ", 50%, 15%)";
      var lightColor = "hsl(" + rnd + ", 50%, 25%)";
      var lightestColor = "hsl(" + rnd + ", 50%, 90%)";

      var backStyle = {
        background: "linear-gradient(180deg, " + darkColor + ", " + lightColor + ")",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      };

      var boxStyle = {
        backgroundColor: lightestColor,
        width: "450px",
        maxWidth: "100%",
        padding: "2rem",
        borderRadius: document.body.clientWidth <= 450 ? 0 : 4
      };

      var textStyle = {
        color: darkColor,
        textAlign: "center",
        fontSize: "1.5rem"
      };

      var authorStyle = {
        color: darkColor,
        margin: "1.5rem 0",
        textAlign: "end"
      };

      var controlsStyle = {
        display: "flex",
        justifyContent: "space-between"
      };

      var buttonsStyle = {
        display: "flex",
        justifyContent: "start",
        alignItems: "center"
      };

      var aStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: darkColor,
        width: "2.5rem",
        height: "2.5rem",
        marginRight: ".5rem",
        borderRadius: 4
      };

      var newQuoteBtnStyle = {
        fontFamily: "inherit",
        backgroundColor: darkColor,
        color: lightestColor,
        padding: "0 1rem",
        border: "none",
        borderRadius: 4,
        cursor: "pointer"
      };

      return React.createElement(
        "div",
        { style: backStyle },
        React.createElement(
          "div",
          { id: "quote-box", style: boxStyle },
          React.createElement(
            "div",
            { id: "text", style: textStyle },
            this.state.text
          ),
          React.createElement(
            "div",
            { id: "author", style: authorStyle },
            this.state.author
          ),
          React.createElement(
            "div",
            { id: "controls", style: controlsStyle },
            React.createElement(
              "div",
              { style: buttonsStyle },
              React.createElement(
                "a",
                {
                  style: aStyle,
                  href: "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + this.state.text + "%20" + this.state.author,
                  id: "tweet-quote"
                },
                React.createElement(
                  "svg",
                  {
                    viewBox: "328 355 335 276",
                    width: "1rem",
                    height: "1rem",
                    fill: lightestColor
                  },
                  React.createElement("path", { d: "M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425 Z" })
                )
              ),
              React.createElement(
                "a",
                {
                  style: aStyle,
                  href: "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + this.state.author + "&content=" + this.state.text + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button\n",
                  id: "tumblr-post"
                },
                React.createElement(
                  "svg",
                  {
                    viewBox: "0 0 21 36.8",
                    width: "1rem",
                    height: "1rem",
                    fill: lightestColor
                  },
                  React.createElement("path", { d: "M21 36.75h-6.2c-5.577 0-9.733-2.844-9.733-9.646V16.21H0v-5.9C5.576 8.876 7.909 4.12 8.177 0h5.79v9.354h6.757v6.856h-6.756v9.486c0 2.843 1.448 3.826 3.753 3.826h3.271L21 36.75z" })
                )
              )
            ),
            React.createElement(
              "button",
              {
                id: "new-quote",
                style: newQuoteBtnStyle,
                onClick: this.newQuoteClick
              },
              "New quote"
            )
          )
        )
      );
    }
  }]);

  return QuoteMachine;
}(React.Component);