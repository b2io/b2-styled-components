import React from 'react';

import {
  Anchor,
  Button,
  ButtonGroup,
  ComponentDisplay,
  Image,
  Textarea,
  TextInput,
  ThemedSection,
} from './components';

function App() {
  return (
    <div className="App">
      <ComponentDisplay title="Images">
        <div>
          <p>Image with &quot;fallback&quot; styling</p>
          <Image src="http://lorempixel.com/output/food-h-c-100-150-9.jpg" title="Two cups of parfait" />
        </div>
        <div className="example">
          <p>Here is a Image within context</p>
          <Image src="http://lorempixel.com/output/food-h-c-100-150-7.jpg" title="Several pieces of sushi" />
        </div>
        <ThemedSection>
          <div>
            <p>And finally here is a Image within a theme provider</p>
            <Image src="http://lorempixel.com/output/food-h-c-100-150-6.jpg" title="Meat on a grill being poked by a fork" />
          </div>
        </ThemedSection>
      </ComponentDisplay>
      <ComponentDisplay title="Anchors">
        <div>
          <p>Anchor with &quot;fallback&quot; styling</p>
          <Anchor href="http://base2.io">Base Two</Anchor>
        </div>
        <div className="example">
          <p>Here is a Anchor within context</p>
          <Anchor href="http://google.com">Google</Anchor>
        </div>
        <ThemedSection>
          <div>
            <p>And finally here is a Anchor within a theme provider</p>
            <Anchor href="#pageEnd">Scroll to end</Anchor>
          </div>
        </ThemedSection>
      </ComponentDisplay>
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
          <Textarea defaultValue="Textarea" />
        </div>
        <div className="example">
          <p>Here is a Textarea within context</p>
          <Textarea defaultValue="Textarea with context" />
        </div>
        <ThemedSection>
          <div>
            <p>And finally here is a Textarea within a theme provider</p>
            <Textarea defaultValue="Textarea with theme" />
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
      <div id="pageEnd" />
    </div>
  );
}

export default App;
