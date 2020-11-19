import React, { useState, useEffect } from "react";
import { Menu, Input } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import GroupCategorySearch from "./GroupCategorySearch";

const GroupCategoryNav = ({
        sampleData,
        onCategoryList_select,
        selectList,
        groups,
        onAllGroups
    }) => {
      
    // const [activeItem, setActiveItem] = useState(selectList.text);
    // const handleItemClick = (e, { name }) => setActiveItem(name);

    const group_category_nav_padding = {padding:"1.5rem"}
    
    const GroupCategoryNavList = sampleData.map((item,index) => (
        <Menu.Item
            as = {Link}
            style={group_category_nav_padding}
            name={item.text}
            key={index}
            active={selectList.text === item.text}
            // onClick={handleItemClick}
            onMouseUp={() => onCategoryList_select(item)}
            to={item.value === 'all' ? '/groupcategory/' : `/groupcategory/${item.value}`}
        />
    ))
  return (
    <div>
      <Menu pointing secondary vertical style={{width:"100%"}}>
        <Menu.Item style={group_category_nav_padding}>
            <h2>카테고리</h2>
            <GroupCategorySearch groups={groups} onAllGroups={onAllGroups} />
        </Menu.Item>
        {GroupCategoryNavList}
      </Menu>
    </div>
  );
};

export default GroupCategoryNav;
