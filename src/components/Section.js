import React from 'react';

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.content = props.content;
    this.img = props.img;
  }

  render() {
    return (
      <>
        <div className="project section">
          <br id="break"/>
          <h1 id="title">{this.title}</h1>
          <img src={`${this.img}`} alt=""/>
          <p id="content">
            {this.content}
          </p>
        </div>
      </>
    )
  }
}