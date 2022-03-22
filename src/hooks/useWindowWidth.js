// 커스텀 훅
// 훅의 특징은 hook 또는 함수 컴포넌트 안에서만 실행이 가능 
import React, { useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
        setWidth(window.innerWidth);
    }
    window.addEventListener("resize", resize);

    return () =>  {
      window.addEventListener("resize", resize);
    }
  }, []);

  return width;
}