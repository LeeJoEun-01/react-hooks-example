import { useEffect, useState } from "react";

export default function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);  // 상태를 만들고

  useEffect(() => {  //상태를 변경할 때 useEffect 사용 
    setHasMounted(true);
  }, []);

  return hasMounted;
}