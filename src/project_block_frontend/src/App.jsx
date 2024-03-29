import { useState } from 'react';
import { project_block_backend } from 'declarations/project_block_backend';
import Hero from './components/Hero';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    project_block_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    // <main>
    //   <img src="/logo2.svg" alt="DFINITY logo" />
    //   <br />
    //   <br />
    //   <form action="#" onSubmit={handleSubmit}>
    //     <label htmlFor="name">Enter your name: &nbsp;</label>
    //     <input id="name" alt="Name" type="text" />
    //     <button type="submit">Click Me!</button>
    //   </form>
    //   <section id="greeting">{greeting}</section>
    // </main>
    <>
    <Hero/>
    </>
  );
}

export default App;
