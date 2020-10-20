import React from "react";
import MyGroupItem from "./GroupItem/MyGroupItem";
import { Container, Header, Menu, Card, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import '../GroupStyle/MyGroup.scss';

const MyGroupView = ({ sampleData }) => {
  const Groupitem = sampleData.map((item, index) => (
    <MyGroupItem key={index} item={item} />
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#f2f2f2",
        padding: "80px 0",
      }}
    >
      <Container>
        <p><b style={{display:"block", fontSize:"1.2rem"}}>내 그룹</b></p>
        <p style={{display:"inline-block"}}>내가 가입한 그룹 목록입니다.</p>
        <Link to="/" style={{float:"right"}}>모두 보기</Link>
          <Slider {...settings} className="test">
            {Groupitem}
          </Slider>
      </Container>
    </div>
  );
};

export default MyGroupView;
