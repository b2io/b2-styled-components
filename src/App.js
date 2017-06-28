import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import * as themes from './themes';
import { Anchor, Button, ButtonGroup, ComponentDisplay, Image, Modal, OrderedList, Textarea, TextBlock, TextInput, UnorderedList } from './components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: themes.defaultTheme,
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      theme: themes[target.value],
    });
  };

  render() {
    return (
      <div className="App">
        <label htmlFor="changeTheme">Change Theme:</label>
        <select id="changeTheme" onChange={this.handleChange}>
          <option value="defaultTheme">Default Theme</option>
          <option value="customTheme">Custom Theme</option>
        </select>
        <ThemeProvider theme={this.state.theme}>
          <div>
            <ComponentDisplay title="Images">
              <div>
                <Image
                  src="http://lorempixel.com/output/food-h-c-100-150-9.jpg"
                  title="Two cups of parfait"
                />
              </div>
            </ComponentDisplay>
            <ComponentDisplay title="Anchor">
              <div>
                <Anchor href="http://base2.io">Base Two</Anchor>
              </div>
            </ComponentDisplay>
            <ComponentDisplay title="Text Block">
              <TextBlock>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                 autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem
                 eum fugiat quo voluptas nulla pariatur?
              </TextBlock>
            </ComponentDisplay>
            <ComponentDisplay title="Button">
              <div>
                <Button>Default Button</Button>
              </div>
              <div>
                <Button secondary>Secondary Button</Button>
              </div>
              <div>
                <Button disabled>Disabled Button</Button>
              </div>
              <div>
                <Button size="small">Small Button</Button>
              </div>
              <div>
                <Button size="large">Large Button</Button>
              </div>
              <div>
                <Button secondary size="small">Small Secondary Button</Button>
              </div>
            </ComponentDisplay>
            <ComponentDisplay title="Button Group">
              <div>
                <ButtonGroup>
                  <Button>Button 1</Button>
                  <Button>Button 2</Button>
                  <Button>Button 3</Button>
                </ButtonGroup>
              </div>
            </ComponentDisplay>
            <ComponentDisplay title="Modal">
              <Modal>
                <p>I am a modal.</p>
                <Button>Cool</Button>
              </Modal>
            </ComponentDisplay>
            <ComponentDisplay title="Textarea">
              <div>
                <Textarea defaultValue="Textarea" />
              </div>
            </ComponentDisplay>
            <ComponentDisplay title="TextInput">
              <div>
                <TextInput />
              </div>
            </ComponentDisplay>
            <ComponentDisplay title="Unordered List">
              <div>
                <UnorderedList>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                </UnorderedList>
              </div>
            </ComponentDisplay>
            <ComponentDisplay title="Ordered List">
              <div>
                <OrderedList>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                </OrderedList>
              </div>
            </ComponentDisplay>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
