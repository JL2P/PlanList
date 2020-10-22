import React from 'react';
import { Image } from 'semantic-ui-react'

const GroupProfilView = ({sampleData}) => {
    return (
        <div>
            <Image src={sampleData[2].imgUrl} style={{borderRadius:"10px",marginBottom:"1rem"}}/>
            <p style={{fontSize:"1.2rem", fontWeight:"bold"}}>{sampleData[2].title}</p>
            <p>멤버 : {sampleData[2].rating}명</p>
            <p>{sampleData[2].description}</p>
            
        </div>
    );
};

export default GroupProfilView;