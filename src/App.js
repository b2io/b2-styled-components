import React from 'react';
import Button from './components/Button';
import ComponentDisplay from './components/ComponentDisplay';
import ThemedSection from './components/ThemedSection';

function App() {
  return (
    <div className="App">
      <ComponentDisplay title="Buttons">
        <div>
          <p>Button with &quot;fallback&quot; styling</p>
          <Button>button</Button>
        </div>
        <div className="example">
          <p>Here is a button within context</p>
          <Button>button with context</Button>
        </div>
        <ThemedSection>
          <div>
            <p>And finally here is a button within a theme provider</p>
            <Button>button with theme</Button>
          </div>
        </ThemedSection>
      </ComponentDisplay>
    </div>
  );
}

export default App;
