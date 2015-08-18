'use strict';

describe('NewreactApp', () => {
  let React = require('react/addons');
  let NewreactApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    NewreactApp = require('components/NewreactApp.js');
    component = React.createElement(NewreactApp);
  });

  it('should create a new instance of NewreactApp', () => {
    expect(component).toBeDefined();
  });
});
