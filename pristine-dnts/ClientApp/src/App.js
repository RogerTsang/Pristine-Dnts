﻿import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router';
import route from './route';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#221e22'
        },
        secondary: {
            main: '#5c2d1f'
        },
    },
    typography: {
        fontSize: 14,
        htmlFontSize: 12
    }
});

const App = () => (
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
            {route.map(route => <Route key={route.key} path={route.path} exact={route.exact} component={route.component} />)}
        </Switch>
    </MuiThemeProvider>
);

export default App;