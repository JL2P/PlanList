import React from "react";
import BestGroupItem from "./GroupItem/BestGroupItem";
import { Container} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../GroupStyle/Group.scss";

const BestGroupView = ({ 
    groups,
    onCategoryDefault,
    categoryList,
    onGroupDetail_page
    }) => {
  const Groupitem = groups.map((item, index) => {
    if(index < 12){
      return(
        <BestGroupItem key={index} item={item} onGroupDetail_page={onGroupDetail_page} />
      )
    }
    
  });

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
          // infinite: true,
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
                <Link to={`/groupcategory/${categoryList[2].value}`} className="group_allView" onClick={() => onCategoryDefault(categoryList[2])}>모두 보기</Link>
            </div>
            <Slider className="slider" {...settings}>
                {Groupitem}
            </Slider>
        </Container>
    </div>
  );
};

export default BestGroupView;
