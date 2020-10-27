import React, { useState } from "react";
import { Menu, Input } from 'semantic-ui-react'

const GroupCategoryNav = ({
        sampleData,
        onCategoryList_select
    }) => {

    const [activeItem, setActiveItem] = useState("전체 그룹");
    const handleItemClick = (e, { name }) => setActiveItem(name);

    const group_category_nav_padding = {padding:"1.5rem"}

    const GroupCategoryNavList = sampleData.map((item,index) => (
        <Menu.Item
            style={group_category_nav_padding}
            name={item.text}
            key={index}
            active={activeItem === item.text}
            onClick={handleItemClick}
            onMouseUp={() => onCategoryList_select(item)}
        />
    ))
  return (
    <div>
      <Menu pointing secondary vertical style={{width:"100%"}}>
        <Menu.Item style={group_category_nav_padding}>
            <h2>카테고리</h2>
            <Input icon='search' placeholder='그룹 검색' />
        </Menu.Item>
        {GroupCategoryNavList}
      </Menu>
    </div>
  );
};

export default GroupCategoryNav;
