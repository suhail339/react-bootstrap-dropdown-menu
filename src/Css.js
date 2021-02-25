"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Css = {
  pointer: {
    cursor: 'pointer'
  },
  defaultLink: {
    cursor: 'pointer',
    fontWeight: '14px',
    fontFamily:'sans-serif',
    textDecoration:'none',
    color: '#393f46'
  },
  disabledItem: {
    pointerEvents: 'none',
    cursor: 'default',
    color: 'grey'
  },
  gear: {
    fontSize: '2.7em',
    cursor: 'pointer',
    color: 'black',
    border: 'none',
    marginLeft: '6px'
  },
  triangle: {
    fontSize: '0.9em',
    cursor: 'pointer',
    color: '#000000',
    padding: '14px',
    border: 'none'
  },
  imageTrigger: {
    height: '50px',
    width: '50px',
    cursor: 'pointer',
    padding: '3px',
    border: 'none'
  },
  textTrigger: {
    cursor: 'pointer',
    padding: '14px',
    border: 'none',
    fontWeight: 'bold'
  },
  menu: {
    position: 'relative',
    display: 'inline-block'
  },
  menuItem: {
    "float": 'left'
  },
  menuContent: {
    display: 'none',
    position: 'absolute',
    left: '0px',
    zIndex: '9999',
    backgroundColor: 'white',
    minWidth: '200px',
    padding: '12px',
    overflow: 'auto',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)'
  },
  show: {
    display: 'block'
  },
  separator: {
    width: '100%',
    borderTop: '1px solid light-grey'
  }
};
var _default = Css;
exports["default"] = _default;
