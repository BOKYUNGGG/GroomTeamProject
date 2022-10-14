import React from 'react'
import Dropdown from '../components/molecules/Dropdown'

const MainPage = () => {
  const menu =[
    {
      value:"create"
    },
    {
      value:"delete"
    }
  ]
  return (
    <div>
      <Dropdown title="Student" size="small" menu={menu}></Dropdown>

    </div>
  )
}

export default MainPage