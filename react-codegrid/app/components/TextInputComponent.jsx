import React from 'react';

class TextInputComponent extends React.Component {
  constructor() {
    super();

    // 入力された内容を保持しておくstate
    this.state = {
      val: 'CodeGrid'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // input要素のchangeイベントの度に呼ばれるハンドラ
  handleInputChange(ev) {
    this.setState({ val: ev.target.value });
  }

  // こちらはbutton要素のclickイベントに対応
  handleButtonClick() {
    this.setState({ val: '' });
  }

  render() {
    let { val } = this.state;

    return (
      <div>
        <input type="text" onChange={this.handleInputChange} value={val} />
        <button type="button" onClick={this.handleButtonClick}>Clear</button>
        <hr />
        {val}
      </div>
    );
  }
}

export default TextInputComponent