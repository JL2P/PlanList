import React from "react";
import { Menu} from "semantic-ui-react";
import {Link} from 'react-router-dom'

const DetailGroupNav = ({
      onLogInUser,
      group,
      member,
      activeItem,
      onHandleItemClick,
  }) => {
    console.log(member)

  const navAlert = () => {
    member.confirm !== "true" && alert("권한이 없습니다.")
  }

  const memberConfirm = member.confirm === "true" ? true: false;
  const masterAuth = member.confirm === "true" && member.manager === "true" ? true : false;
  const memberAuth = member.confirm === "true" && member.manager === "false" ? true : false;

  return (
    <div>
        <Menu pointing secondary>
            <Menu.Item
            as={Link} to={`/groupdetail/${group.id}/`}
            name="전체글"
            active={activeItem === "전체글"}
            onClick={() => onHandleItemClick("전체글")}
            />
            <Menu.Item
            as={Link} to={memberConfirm?`/groupdetail/${group.id}/member`:''}
            name="멤버"
            active={activeItem === "멤버"}
            onClick={() => onHandleItemClick("멤버")}
            onMouseDown={navAlert}
            />
            <Menu.Item
            name="사진첩"
            active={activeItem === "사진첩"}
            onClick={() => onHandleItemClick("사진첩")}
            />
            <Menu.Item
            name="첨부파일"
            active={activeItem === "첨부파일"}
            onClick={() => onHandleItemClick("첨부파일")}
            />
            <Menu.Menu position="right">
            {group.master === onLogInUser.accountId ?
              <Menu.Item
                as={Link} to={masterAuth?`/groupdetail/${group.id}/masterSetting`:''} 
                name="그룹 설정"
                active={activeItem === "그룹 설정"}
                onClick={() => onHandleItemClick("그룹 설정")}
                onMouseDown={navAlert}
              />
              : 
              <Menu.Item
                as={Link} to={memberAuth?`/groupdetail/${group.id}/userSetting`:''} 
                name="그룹 설정"
                active={activeItem === "그룹 설정"}
                onClick={() => onHandleItemClick("그룹 설정")}
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
