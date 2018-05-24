import 'babel-polyfill'
import './styles/index.scss'
import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import './styles/index.scss'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
injectTapEventPlugin()

render(
  <MuiThemeProvider>
    {routes}
  </MuiThemeProvider>,
  document.getElementById('app')
)
