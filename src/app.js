import React from 'react';
import ReactDOM from 'react-dom';
import Master from './components/Master';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
    cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
  } from 'material-ui/styles/colors';

import {fade} from 'material-ui/utils/colorManipulator';
  

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#32cb00',
        primary2Color: '#76ff03',
        primary3Color: '#b0ff57',
        accent1Color: '#99cc60',
        accent2Color: '#ccff90',
        accent3Color: '#ffffc2',
        textColor: darkBlack,
        secondaryTextColor: fade(darkBlack, 0.54),
        alternateTextColor: white,
        canvasColor: white,
        borderColor: darkBlack,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack
    },
    appBar: {
        height: 50
    },
    toolbar: {
        height: 50
    }
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
    <Master/>
</MuiThemeProvider>, document.getElementById('app'));
