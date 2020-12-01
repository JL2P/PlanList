import React from "react";
import { Container, Item, Image } from "semantic-ui-react";

const ProfileFollowerView = ({ follower, onBtn, children }) => {
  // const [confirmOpen, setConfirmOpen] = useState(false);
  // const onConfirmModal = (trigger) => {
  //   setConfirmOpen(trigger);
  // };

  return (
    <div>
      {children}
      <Container>
        <Item>
          <div
            className="part_a"
            style={{
              display: "flex" /* flex로 지정*/,
              justifyContent: "space-between" /* 양옆으로 벌리는 기능 */,
              alignItems: "center" /* 높이의 정중앙 */,
              margin: "1em",
            }}
          >
            <div
              className="part_a1"
              style={{
                display: "flex",
                justifyContent:
                  "flex-start" /* 플랙스 박스 시작점부터 정렬  ㄹ*/,
                alignItems: "center",
              }}
            >
              <div className="part_b">
                {/* <Link to={{pathname:`/account/${follower.accountId}`,state:{fromDashboard:true}}} >  */}
                <a href={"/account/" + follower.accountId}>
                  <Image
                    src={
                      follower.galleries
                        ? follower.galleries.length > 0
                          ? follower.galleries[0].filePath
                          : follower.imgUrl
                        : null
                    }
                    bordered
                    centered
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                    alt="profile"
                    circular
                  />
                </a>
                {/* </Link>     */}
              </div>

              <div className="part_b2">
                <a href={"/account/" + follower.accountId}>
                  <div>&emsp;{follower.accountId}</div>
                </a>
                <div>&emsp;{follower.name}</div>
              </div>
              <div></div>
            </div>
            <div className="part_a2">{onBtn}</div>
          </div>
        </Item>
      </Container>
    </div>
  );
};

export default ProfileFollowerView;
