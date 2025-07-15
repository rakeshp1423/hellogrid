import { useEffect, useState } from "react";

export default function useTypingEffect(text, speed = 100) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
}
