import React from 'react';
// 함수형 컴포넌트 2

// Eax 2) useState => count를 의미 
// Eax 3) useSate => { count: 0 }를 의미 
export default function Example3() {
  const [state, setCount] = React.useState({ count: 0 });  //what은 배열  [count, setCount]

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    //setState안에서 그냥 인자로 받은 것을 다시 새로운 state로 변경해서 return하게 되면 위에서 const로 선언한 state에 의존적이지 않고 
    // 함수만 있으면 인자로 들어오는것이라서 state를 의존적으로 처리하지 않는다. 
    // setCount((state) => {
    //   return {
    //     count: state.count + 1,
    //   };
    // });

    // return 생략 
    setCount((state) => ({
        count: state.count + 1,
    }));
  }
}