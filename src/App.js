import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import {
  Anchor,
  Button,
  ButtonGroup,
  ComponentDisplay,
  Image,
  Textarea,
  TextInput,
} from './components';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <div>
          <ComponentDisplay title="Images">
            <div>
              <p>Image with &quot;fallback&quot; styling</p>
              <Image
                src="http://lorempixel.com/output/food-h-c-100-150-9.jpg"
                title="Two cups of parfait"
              />
            </div>
            <div className="example">
              <p>Here is a Image within context</p>
              <Image
                src="http://lorempixel.com/output/food-h-c-100-150-7.jpg"
                title="Several pieces of sushi"
              />
            </div>
            <div>
              <p>And finally here is a Image within a theme provider</p>
              <Image
                src="http://lorempixel.com/output/food-h-c-100-150-6.jpg"
                title="Meat on a grill being poked by a fork"
              />
            </div>
          </ComponentDisplay>
          <ComponentDisplay title="Anchor">
            <Anchor href="http://base2.io">Base Two</Anchor>
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
            <div>
              <p>And finally here is a button within a theme provider</p>
              <Button>button with theme</Button>
            </div>
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
            <div>
              <p>Button Group within a theme provider</p>
              <ButtonGroup>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
              </ButtonGroup>
            </div>
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
            <div>
              <p>And finally here is a Textarea within a theme provider</p>
              <Textarea defaultValue="Textarea with theme" />
            </div>
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
            <div>
              <p>And finally here is a TextInput within a theme provider</p>
              <TextInput />
            </div>
          </ComponentDisplay>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
