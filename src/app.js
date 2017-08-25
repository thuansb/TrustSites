import React from 'react';
import ReactDOM from 'react-dom';
import Master from './components/Master';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>
        <Master />
    </MuiThemeProvider>, 
    document.getElementById('app')
);
