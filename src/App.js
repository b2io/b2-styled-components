import React from 'react';
import Button from './components/Button';
import ThemedSection from './components/ThemedSection';

function App() {
  return (
    <div className="App">
      <section>
        <p>Here is a button without context or theme</p>
        <Button>button in a list</Button>
      </section>
      <section className="context">
        <p>Here is a button within context</p>
        <Button>button with context</Button>
      </section>
      <ThemedSection>
        <div>
          <p>And finally here is a button within a theme provider</p>
          <Button>button with theme</Button>
        </div>
      </ThemedSection>
    </div>
  );
}

export default App;
