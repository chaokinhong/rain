import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <Menu>
      <Menu.Item>
        <Link to="/login">LoginPage</Link>
      </Menu.Item>
    </Menu>
  )
}

export default App
