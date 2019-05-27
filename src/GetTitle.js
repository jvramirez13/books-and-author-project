import React from "react";
import "./App.css";
import axios from "axios";

export default class GetTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getAuthor = title => {
    axios.get("http://localhost:9000/" + title).then(res => {
      this.setState({
        author: res.data.items[0].volumeInfo.authors[0]
      });
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.getAuthor(this.element.value);
  }

  render() {
    return (
      /*
            getAUthor(whatever they typed in). then(display it on the webpage)
            */
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter title of the book:
            <input type="text" ref={el => (this.element = el)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h3>The author of the book entered is: {this.state.author}</h3>
      </div>
    );
  }
}
