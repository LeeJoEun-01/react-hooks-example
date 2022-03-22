import React from 'react';
// 함수형 컴포넌트 1

export default function Example2() {
  const [count, setCount] = React.useState(0);  //what은 배열  [count, setCount]

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setCount(count +  1);
  }
}