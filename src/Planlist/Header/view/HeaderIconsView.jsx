import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Label, Dropdown } from "semantic-ui-react";
import HeaderSearch from "./HeaderSearch";

const iconStyle = {
  width: "28px",
  height: "28px",
  marginLeft: "1.5em",
  marginBottom: "0.5em",
};

const HeaderIconsView = ({ accounts,notConfirmFollowers,element }) => {

  return (
    <Container>
      <Menu.Item position="left">
        <Link to="/">
          <img
            src="/images/logo/logo.png"
            style={{
              height: "3.5em",
              width: "8em",
              marginRight: "3px",
            }}
            alt="logo"
          />
        </Link>
      </Menu.Item>

      <Menu.Item>
        <HeaderSearch accounts={accounts} />
      </Menu.Item>

      <Menu.Item position="right">
        <Link to={"/search/"}>
          <img
            src="/images/button/loupe_white.png"
            style={iconStyle}
            alt="loupe_white"
          />
        </Link>
        {/* <Link to={"/chat/"}>
          <img
            src="/images/button/messenger_white.png"
            style={iconStyle}
            alt="messenger_white"
          />
        </Link> */}
        <Link to={"/ranking/"}>
          <img
            src="/images/button/ranking.png"
            style={iconStyle}
            alt="messenger_white"
          />
        </Link>

        <Menu.Item as='a' style={{padding:"0", position:"relative"}}>
          <img
            src="/images/button/heart_white.png"
            style={iconStyle}
            alt="heart_white"
          />
          {notConfirmFollowers.length !== 0 ?
            <>
              <Label style={{opacity:"0.9"}} floating color='red'>
                {notConfirmFollowers.length}
              </Label>
              <Dropdown icon="" style={{position:"absolute",bottom:"0",left:"0",width:"100%",height:"100%"}}>
                <Dropdown.Menu>
                  <Dropdown.Menu scrolling>
                    {notConfirmFollowers.map((option) => (
                        <Dropdown.Item 
                          key={option.accountId} 
                          style={{cursor:"default", display:"flex", borderBottom:"1px solid #d9d9d9"}}
                        >
                          <img src={option.imgUrl} alt="" style={{borderRadius:"100%", marginRight:"1em"}} />
                          {`${option.accountId} 님이 팔로우 신청을 하셨습니다.`}
                          {element.filter(list => 
                            list.key === option.accountId
                          )}
                        </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown.Menu>
              </Dropdown>
            </>
            :
              <Dropdown icon="" style={{position:"absolute",bottom:"0",left:"0",width:"100%",height:"100%"}}>
                  <Dropdown.Menu>
                    <Dropdown.Menu scrolling>
                        <Dropdown.Item 
                          text={"새로운 알람이 없습니다."}
                          style={{cursor:"default"}}
                        />
                    </Dropdown.Menu>
                  </Dropdown.Menu>
              </Dropdown>
          }
        </Menu.Item>

        <Link to={"/groupmenu/"}>
          <img
            src="/images/button/ufo_white.png"
            style={iconStyle}
            alt="ufo_white"
          />
        </Link>
        <Link to={`/account/`}>
          <img
            src="/images/button/user_white.png"
            style={iconStyle}
            alt="user_white"
          />
        </Link>
      </Menu.Item>
    </Container>
  );
};

export default HeaderIconsView;
