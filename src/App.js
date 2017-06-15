import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import * as themes from './themes';
import { Anchor, Button, ButtonGroup, ComponentDisplay, Image, Textarea, TextInput } from './components';

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
            <ComponentDisplay title="Button">
              <div>
                <Button>Default Button</Button>
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
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
