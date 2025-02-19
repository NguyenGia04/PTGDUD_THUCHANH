import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BaiSum from './BaiSum.jsx'
import BaiXuatTen from './BaiXuatTen.jsx'
import BaiPhepTinh from './BaiPhepTinh.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BaiXuatTen/> */}
    {/* <BaiSum/> */}
    <BaiPhepTinh/>
  </StrictMode>,
)
