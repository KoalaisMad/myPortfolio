import React from "react";

interface TypingTextProps {
  children: React.ReactNode;
  className?: string;
}


import { useEffect, useState } from "react";

const TypingText: React.FC<TypingTextProps> = ({ children, className = "" }) => {
  const text = typeof children === "string" ? children : React.Children.toArray(children).join("");
  const lines = text.split(/\r?\n/);
  const [displayed, setDisplayed] = useState<string[]>(lines.map(() => ""));
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx < lines.length) {
      if (charIdx < lines[lineIdx].length) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => {
            const updated = [...prev];
            updated[lineIdx] += lines[lineIdx][charIdx];
            return updated;
          });
          setCharIdx((c) => c + 1);
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }
    }
  }, [charIdx, lineIdx, lines]);

  const isTyping = lineIdx < lines.length;
  return (
    <div className={className}>
      {displayed.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
      {isTyping && <span className="animate-pulse">|</span>}
    </div>
  );
};

export default TypingText;
