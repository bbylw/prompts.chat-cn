import { useCallback, useState } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Library } from './components/Library';
import { Proof } from './components/Proof';
import { Use } from './components/Use';
import { Book } from './components/Book';
import { SelfHost } from './components/SelfHost';
import { Licence } from './components/Licence';
import { Footer } from './components/Footer';
import { prompts, type PromptCategory } from './data/prompts';
import { useReveal } from './hooks/useReveal';

export default function App() {
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState<PromptCategory | 'all'>('all');
  useReveal();

  const shuffle = useCallback(() => {
    setIndex((current) => {
      if (prompts.length < 2) return current;
      let next = current;
      while (next === current) next = Math.floor(Math.random() * prompts.length);
      return next;
    });
  }, []);

  return (
    <div id="top">
      <a href="#main" className="skip">
        跳到正文
      </a>
      <Nav />
      <main id="main">
        <Hero prompt={prompts[index]} index={index} onShuffle={shuffle} />
        <Library filter={filter} onFilter={setFilter} />
        <Proof />
        <Use />
        <Book />
        <SelfHost />
        <Licence />
      </main>
      <Footer />
    </div>
  );
}
