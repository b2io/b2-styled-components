import React from 'react';
import Button from './components/Button';
import Textarea from './components/Textarea';
import TextInput from './components/TextInput';
import ThemedSection from './components/ThemedSection';

// const Theme = Secondary;

function App() {
  return (
    <div className="App">
      <ThemedSection theme="primary">
        <div>
          <Button>
            Primary
          </Button>
          <Textarea>
            Text
          </Textarea>
        </div>
      </ThemedSection>
      <ThemedSection theme="secondary">
        <Button>
          Secondary
        </Button>
      </ThemedSection>
      <TextInput
        placeholder="placeholder"
      >
      </TextInput>
      <Textarea>
        Text
      </Textarea>
    </div>
  );
}

export default App;
