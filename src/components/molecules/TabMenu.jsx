import React from 'react'
import TabMenuItem from '../atoms/items/TabMenuItem'
import styled from 'styled-components'

const Wrapper = styled.div`
  display : flex;
  padding : 10px;
  flex-direction : column;
`
const TabMenuItemWrapper = styled.div`
  display : flex;
  height : 44px;
`
// onAdd, onDelete, onSelect, onUnselect
  const TabMenu = ({selectedId, menuItems, onDelete, onToggle}) => {
    
    return (
      <Wrapper>
        <TabMenuItemWrapper>
          {
            menuItems.map((element, key)=>(
              <TabMenuItem 
                key = {key}
                selectedId= {selectedId       }
                id        = {element.id       }
                value     = {element.value    } 
                color     = {element.color    } 
                onDelete  = {onDelete         }
                onToggle  = {onToggle         }
              />
            ))
          }
        </TabMenuItemWrapper>
      </Wrapper>
    )
}

export default TabMenu