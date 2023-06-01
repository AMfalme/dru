import { useEffect, useRef, useState } from "react";

// interface SlowTextProps {
//     speed: number;
//     text: string;
//   }
  
export const SlowText = (props) => {
    const { speed, textList } = props;
    const [currentText, setCurrentText] = useState(textList[0]);
    // const [placeholder, setPlaceholder] = useState(textList[0][0]);
  
    const index = useRef(0);
  
    useEffect(() => {
      function tick() {
        index.current++;
        setCurrentText(textList[index.current]);
      }
      if (index.current < textList.length - 1) {
        let addChar = setInterval(tick, speed);
        return () => clearInterval(addChar);
      }
    }, [ speed, textList]);
    return <span>{currentText}</span>
  }