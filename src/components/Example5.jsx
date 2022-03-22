import React from 'react';
// 함수형 컴포넌트 1

export default function Example5() {
  const [count, setCount] = React.useState(0);  //what은 배열  [count, setCount]

  React.useEffect(() => {
    console.log("componentDidMount");

    return () => {
      // cleanup
      // componentWillUnmount
    };
  }, []);  

  // 여러 개 사용하는 것도 가능하다. 
  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);

    return () => {
      //clean up
      console.log("cleanup by count", count);  // 이전 count값으로 이 부분을 실행해주고 위로 가서 실행 
    };
  }, [count]);  
  // [빈 배열]가 없으면 항상 랜더가 된 직후에는 이 함수를 실행해주세여!
  // []가 있으면 함수가 최초에만 실행이 된다.  []=> dependency list를 나타냄으로 라이프 사이클과 완전히 일치하지는 않는다. 


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