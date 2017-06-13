import React from 'react';

import {
  Button,
  ButtonGroup,
  ComponentDisplay,
  Textarea,
  TextInput,
  ThemedSection,
} from './components';

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
      <ComponentDisplay title="Button Group">
        <div>
          <p>Button Group with &quot;fallback&quot; styling</p>
          <ButtonGroup>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
          </ButtonGroup>
        </div>
        <ThemedSection>
          <div>
            <p>Button Group within a theme provider</p>
            <ButtonGroup>
              <Button>Button 1</Button>
              <Button>Button 2</Button>
              <Button>Button 3</Button>
            </ButtonGroup>
          </div>
        </ThemedSection>
      </ComponentDisplay>
      <ComponentDisplay title="Textareas">
        <div>
          <p>Textarea with &quot;fallback&quot; styling</p>
          <Textarea>Textarea</Textarea>
        </div>
        <div className="example">
          <p>Here is a Textarea within context</p>
          <Textarea>Textarea with context</Textarea>
        </div>
        <ThemedSection>
          <div>
            <p>And finally here is a Textarea within a theme provider</p>
            <Textarea>Textarea with theme</Textarea>
          </div>
        </ThemedSection>
      </ComponentDisplay>
      <ComponentDisplay title="TextInputs">
        <div>
          <p>TextInput with &quot;fallback&quot; styling</p>
          <TextInput />
        </div>
        <div className="example">
          <p>Here is a TextInput within context</p>
          <TextInput />
        </div>
        <ThemedSection>
          <div>
            <p>And finally here is a TextInput within a theme provider</p>
            <TextInput />
          </div>
        </ThemedSection>
      </ComponentDisplay>
    </div>
  );
}

export default App;
