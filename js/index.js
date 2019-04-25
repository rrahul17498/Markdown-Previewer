var renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  let link =
  marked.Renderer.prototype.link.call(this, href, title, text);
  return link.replace("<a ", "<a target='_blank' ");
};

marked.setOptions({ breaks: true, renderer: renderer, gfm: true });


const Header = () =>
React.createElement("div", null,
React.createElement("div", { className: "jumbotron" },
React.createElement("h1", { className: "text-center" }, "MARKDOWN PREVIEWER")),

React.createElement("h4", { id: "subtitle", className: "text-center" }, "A FreeCodeCamp Project built with REACT & Marked"));



class Markdown extends React.Component {

  constructor() {

    super();
    this.state = { currentText: placeholder };
    this.handleChange = this.handleChange.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);

  }

  handleChange(event) {
    this.setState({ currentText: event.target.value });
  }

  handleClearClick() {
    this.setState({ currentText: "" });

  }

  render() {

    return (
      React.createElement("div", null,
      React.createElement("button", { id: "clearButton", onClick:
        this.handleClearClick }, "CLEAR"),
      React.createElement("div", { className: "row" },

      React.createElement("div", { className: "col-md-6" },
      React.createElement("textarea", { id: "editor",
        value: this.state.currentText,
        onChange: this.handleChange })),



      React.createElement("div", { className: "col-md-6" },
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.currentText, { sanitize: true }) } })))));








  }}


const Footer = () =>
React.createElement("div", null,
React.createElement("h4", { id: "footerElement", className: "text-center" }, "Created by ", React.createElement("a", { href: "https://www.freecodecamp.com/rrahul17498", target: "_blank" }, "Rahul")));





const placeholder = `# Welcome to my React Markdown Previewer! 
                  
 ## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
const App = () =>
React.createElement("div", null,
React.createElement(Header, null),
React.createElement(Markdown, null),
React.createElement(Footer, null));



ReactDOM.render(React.createElement(App, null), document.getElementById('app'));