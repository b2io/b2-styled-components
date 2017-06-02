import React from 'react';
import Button from './components/Button';
import ThemedSection from './components/ThemedSection';

// const Theme = Secondary;

function App() {
  return (
    <div className="App">
      <ThemedSection theme="primary">
        <Button>
          Primary
        </Button>
      </ThemedSection>
      <ThemedSection theme="secondary">
        <Button>
          Secondary
        </Button>
      </ThemedSection>
    </div>
  );
}

export default App;
