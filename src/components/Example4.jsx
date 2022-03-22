import React from 'react';
//클래스 컴포넌트 (라이프 사이클) 

export default class Example4 extends React.Component {
  state = { count: 0 };
  render() {
    const { count } = this.state;

    return (
      <div>
        <p>You clicked { count } times</p>
        <button onClick={this.click}>Click me</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount', this.state.count);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.state.count);
  }

  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
}