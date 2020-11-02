import React from "react";
import MyGroupItem from "./GroupItem/MyGroupItem";
import NewGroupItem from "./GroupItem/NewGroupItem";
import { Container} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import '../../GroupStyle/Group.scss';

const MyGroupView = ({ 
    sampleData,
    categoryList,
    onCreateGroup,
    onCategoryDefault,
    onLogInUser
   }) => {
  const Groupitem = sampleData.map((item, index) => (
    <MyGroupItem key={index} item={item} />
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
    <div className="myGroup_wrap">
      <Container>
        <div className="group_header_text">
          <p className="group_header_headerText">내 그룹</p>
          <p className="group_header_contents">내가 가입한 그룹 목록입니다.</p>
          <Link to={`/groupcategory/${categoryList[1].value}`} className="group_allView" onClick={() => onCategoryDefault(categoryList[1])}>모두 보기</Link>
        </div>
          <Slider {...settings}>
            <NewGroupItem 
              categoryList={categoryList} 
              onCreateGroup={onCreateGroup}
              onLogInUser={onLogInUser}
            />
            {Groupitem}
          </Slider>
      </Container>
    </div>
  );
};

export default React.memo(MyGroupView);
