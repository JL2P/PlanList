import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import {Link, withRouter, Route } from 'react-router-dom'

const DetailGroupNav = ({onLogInUser,detailGroup,memberList,member}) => {
  console.log(member)
  const [activeItem, setActiveItem] = useState("전체글");

  const handleItemClick = (e,{name}) => {
      setActiveItem(name);
  }
  const navAlert = () => {
    member.confirm !== "true" && alert("권한이 없습니다.")
  }

  return (
    <div>
        <Menu pointing secondary>
            <Menu.Item
            as={Link} to={`/groupdetail/${detailGroup.id}/`}
            name="전체글"
            active={activeItem === "전체글"}
            onClick={handleItemClick}
            />
            <Menu.Item
            as={Link} to={member.confirm === "true" && `/groupdetail/${detailGroup.id}/member`}
            name="멤버"
            active={activeItem === "멤버"}
            onClick={handleItemClick}
            onMouseDown={navAlert}
            />
            <Menu.Item
            name="사진첩"
            active={activeItem === "사진첩"}
            onClick={handleItemClick}
            />
            <Menu.Item
            name="첨부파일"
            active={activeItem === "첨부파일"}
            onClick={handleItemClick}
            />
            <Menu.Menu position="right">
            {detailGroup.master === onLogInUser.accountId ?
              <Menu.Item
                as={Link} to={member.confirm === "true" && `/groupdetail/${detailGroup.id}/masterSetting`} 
                name="그룹 설정"
                active={activeItem === "그룹 설정"}
                onClick={handleItemClick}
                onMouseDown={navAlert}
              />
              : 
              <Menu.Item
                as={Link} to={member.confirm === "true" && `/groupdetail/${detailGroup.id}/userSetting`} 
                name="그룹 설정"
                active={activeItem === "그룹 설정"}
                onClick={handleItemClick}
                onMouseDown={navAlert}
              />
            }
            
            </Menu.Menu>
        </Menu>
    <br />
    </div>
  );
};

export default DetailGroupNav;
