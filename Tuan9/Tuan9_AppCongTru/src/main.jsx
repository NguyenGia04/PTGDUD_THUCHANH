import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store } from './app/store';
import CongTruUseState from './BaiTap/CongTruUseState.jsx'
import CongTruReducer from './BaiTap/CongTruReducer.jsx'
import CongTruRedux from './BaiTap/CongTruRedux.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <div>-------------------------------------------------------------------</div>
    <CongTruUseState/>
    <div>-------------------------------------------------------------------</div>
    <CongTruReducer/>
    <div>-------------------------------------------------------------------</div>
   
    <Provider store={store}>
      <CongTruRedux/>
    </Provider>
  </StrictMode>,
)
