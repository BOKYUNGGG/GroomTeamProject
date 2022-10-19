import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addTabMenuItem, deleteTabMenuItem, toggleTabMenuItem} from '../../modules/tabMenu'
import TabMenu from './TabMenu'

  const TabMenuContainer = () => {

    const selectedId = useSelector(state=>state.tabMenuReducer.selectedId) 
    const menuItems = useSelector(state=>state.tabMenuReducer.menuItems)
    const dispatch = useDispatch()
    const onToggle = data => dispatch(deleteTabMenuItem(data))
    const onDelete = data => dispatch(toggleTabMenuItem(data))


    return (
      <>
        <TabMenu
          selectedId= {selectedId}
          menuItems = {menuItems}
          onToggle  = {onToggle}
          onDelete  = {onDelete}
        ></TabMenu>
      </>
    )
}

export default TabMenuContainer