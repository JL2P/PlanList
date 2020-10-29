import React from "react";
import BestGroupItem from "./GroupItem/BestGroupItem";
import { Container} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../GroupStyle/Group.scss";

const BestGroupView = ({ sampleData,onCategoryDefault }) => {
  const Groupitem = sampleData.map((item, index) => (
    <BestGroupItem key={index} item={item} />
  ));

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div className="bestGroup_wrap">
        <Container className="group_container_border">
            <div className="group_header_text">
                <p className="group_header_headerText">인기 그룹</p>
                <p className="group_header_contents">많은 사람들이 참여중인 그룹입니다.</p>
                <Link to="/groupcategory" className="group_allView" onClick={onCategoryDefault}>모두 보기</Link>
            </div>
            <Slider {...settings}>
                {Groupitem}
            </Slider>
        </Container>
    </div>
  );
};

export default BestGroupView;
