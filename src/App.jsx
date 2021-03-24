import React, { useState } from 'react'
import react from '@/assets/svg/react.svg'
import vite2 from '@/assets/svg/vite2.svg'

import './App.css'

import { Button, Space } from 'antd'
function App() {
  const [text, setText] = useState('vite2-react17-admin')

  return (
    <div className="App">
      <Space direction="vertical">
        <div className="logoList">
          <img className="logo" src={vite2} alt="" />
          <img className="logo" src={react} alt="" />
        </div>
        {text}
        <Button block type="link">
          开始
        </Button>
      </Space>
    </div>
  )
}

export default App
