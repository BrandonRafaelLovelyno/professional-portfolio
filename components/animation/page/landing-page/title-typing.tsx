import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TitleTypingProps {
  title: string;
  setNextTitle: () => void;
}

const TitleTyping: React.FC<TitleTypingProps> = ({ title, setNextTitle }) => {
  const [currentText, setCurrentText] = useState<string>(title[0]);
  const [isCursor, setIsCursor] = useState<boolean>(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentText.length < title.length) {
        setCurrentText(title.slice(0, currentText.length + 1));
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setNextTitle();
        }, 2000);
      }
    }, Math.random() * 200);
    return () => clearInterval(interval);
  }, [currentText, title, setNextTitle]);
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsCursor(!isCursor);
    }, Math.random() * 400 + 200);
    return () => clearInterval(cursorInterval);
  }, [isCursor]);
  return (
    <div className="flex flex-row w-full h-full gap-x-1">
      <p className="text-2xl lg:text-left text-center font-bold text-black font-montserrat">
        {currentText}
      </p>
      <div
        className={twMerge(isCursor ? "h-full bg-white w-[2px]" : "hidden")}
      />
    </div>
  );
};

export default TitleTyping;
