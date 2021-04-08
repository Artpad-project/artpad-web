import React from 'react';

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.content = props.content;
  }

  render() {
    return (
      <>
        <div className="project section">
          <br id="break"/>
          <h1 id="title">{this.title}</h1>
          <p id="content">
            {this.content}
          </p>
        </div>
      </>
    )
  }
}