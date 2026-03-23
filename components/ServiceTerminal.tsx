import React, { useState, useEffect } from 'react';

// Sub-component for a single line
const TerminalLine = ({ words, initialDelay = 0 }: { words: string[], initialDelay?: number }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasStarted(true);
    }, initialDelay);
    return () => clearTimeout(timeout);
  }, [initialDelay]);

  useEffect(() => {
    if (!hasStarted) return;

    const currentWord = words[wordIndex];
    // Randomize typing speed slightly for realism
    const typeSpeed = 50 + Math.random() * 30;
    const deleteSpeed = 20;
    const pauseDuration = 4000; // Longer pause to read the "multiple services"

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      // Finished typing, wait then delete
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === '') {
      // Finished deleting, next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Typing or deleting
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1);
        setText(nextText);
      }, isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, hasStarted]);

  return (
    <div className="min-h-[1.1em] whitespace-nowrap">
      <span className="mr-3 opacity-40 select-none">{">"}</span>
      {text}
      <span className="animate-pulse ml-1 opacity-60 font-bold">_</span>
    </div>
  );
};

export const ServiceTerminal: React.FC = () => {
  return (
    <div className="w-full h-[250px] flex items-center justify-center bg-transparent overflow-hidden px-4">
      <div 
        className="font-['VT323'] text-[#4c1d95] text-4xl md:text-5xl lg:text-6xl leading-none flex flex-col items-center gap-1 md:gap-2 w-full max-w-5xl"
        style={{ fontFamily: "'VT323', monospace" }}
      >
        <TerminalLine 
            words={["web design  //  development", "react  //  next.js  //  typescript"]} 
            initialDelay={0} 
        />
        <TerminalLine 
            words={["seo optimization  ::  analytics", "google ads  ::  performance"]} 
            initialDelay={800} 
        />
        <TerminalLine 
            words={["e-commerce  &&  shopify", "online stores  &&  payments"]} 
            initialDelay={1600} 
        />
        <TerminalLine 
            words={["branding  [[  strategy  ]]", "ui / ux  [[  consulting  ]]"]} 
            initialDelay={2400} 
        />
      </div>
    </div>
  );
};