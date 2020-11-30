import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { mount, shallow, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import nock from 'nock';
import DropdownMenu from '../src/DropdownMenu';
import MenuItem from '../src/MenuItem';

configure({ 
  adapter: new Adapter()
});

describe('DropdownMenu', function() {
  let menuItemDiv = ".__react_bs_dd_menuItems";

  beforeEach(() => {

  });

  it('Basic DropdownMenu should mount', function() {
    const menu = shallow(
      <DropdownMenu>
        <MenuItem text="Click" location="/here" />
      </DropdownMenu>
    );
    expect(menu).not.toBe.undefined;
  });

  it('DropdownMenu with userName specified should mount', function() {
    const userMenu = shallow(
      <DropdownMenu userName="Test User">
        <MenuItem text="Click" location="/here" />
      </DropdownMenu>
    );
    expect(userMenu).not.toBe.undefined;
  });

  it('DropdownMenu with trigger and triggerType specified should mount', function() {
    const menu = shallow(
      <DropdownMenu trigger="Settings" triggerType="text">
        <MenuItem text="Click Me" location="/somewhere" />
      </DropdownMenu>
    );
    expect(menu).not.toBe.undefined;
  });

  it('DropdownMenu with unknown triggerType should not mount', function() {
    expect(() => {
      shallow(<DropdownMenu trigger="Settings" triggerType="unknown" />);
    }).toThrow();
  });

  it('DropdownMenu with position specified should mount', function() {
    const menu = shallow(
      <DropdownMenu position="left">
        <MenuItem text="Click Me" location="/somewhere" />
      </DropdownMenu>
    );
    expect(menu).not.toBe.undefined;
  });

  it('DropdownMenu with invalid position specified should not mount', function() {
    expect(() => {
      shallow(<DropdownMenu position="foo" />);
    }).toThrow();
  });

  it('DropdownMenu with child MenuItem should render', function() {
    const menu = render(
      <DropdownMenu>
        <MenuItem text="Click Me" location="/somewhere" />
      </DropdownMenu>
    );
    expect(menu).not.toBe.undefined;
  });

  it('Should render a username in the first row when the userName prop specified', () => {
    const userMenu = mount(
      <DropdownMenu userName="Test User">
        <MenuItem text="Click" location="/here" />
      </DropdownMenu>
    );
    expect(userMenu.nodes[0].props.userName).toEqual("Test User");
  });

  it('Should not render a username in the first row when the userName prop is not specified', () => {
    const userMenu = mount(
      <DropdownMenu>
        <MenuItem text="Click" location="/here" />
      </DropdownMenu>
    );
    expect(userMenu.nodes[0].props.userName).toBe.undefined;
  });

  it('Should render child MenuItems', () => {
    const menu = mount(
      <DropdownMenu>
        <MenuItem text="Click" location="/here" />
        <MenuItem text="Or" location="/here" />
      </DropdownMenu>
    );
    expect(menu.find(menuItemDiv).find('div').children().length).toBe(2);
  });
});
