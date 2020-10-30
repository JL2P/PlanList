import React from "react";
import CategoryGroupItem from "./GroupItem/CategoryGroupItem";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../GroupStyle/Group.scss";

const CategoryGroupView = ({categoryList,onCategorySelect,onCategoryDefault}) => {
  const Groupitem = categoryList.map((item, index) => (
    <CategoryGroupItem key={index} item={item} onCategorySelect={onCategorySelect} />
  ));

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };

  return (
    <div className="bestGroup_wrap">
        <Container className="group_container_border">
            <div className="group_header_text">
                <p className="group_header_headerText">카테고리</p>
                <p className="group_header_contents">원하시는 카테고리를 둘러보고 그룹을 찾아보세요!</p>
                <Link to="/groupcategory" className="group_allView" onClick={() => onCategoryDefault(categoryList[0])}>모두 보기</Link>
            </div>
            <Slider {...settings}>
                {Groupitem}
            </Slider>
        </Container>
    </div>
  );
};

export default CategoryGroupView;
