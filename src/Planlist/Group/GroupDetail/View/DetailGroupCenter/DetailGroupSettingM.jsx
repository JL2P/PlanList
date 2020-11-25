import React,{useState} from 'react';
import { Segment, Form, Button, Input, TextArea, Checkbox} from "semantic-ui-react";
import FileUploadFormView from "../../../../todo/view/FileUploadFormView";

const DetailGroupSettingM = ({
        onSettingSave,
        group,
        onSettingRemove,
    }) => {

    const [title, setTitle] = useState(group.title);
    const [description, setDescription] = useState(group.description);
    const [openAt, setOpenAt] = useState(group.openAt === "true");
    const [images, setImages] = useState([]);

    //jpa 수정을 위한 소스에 id값을 같이 넘겨주지 않으면 에러가 나거나 row가 추가 생성 된다.
    const id = group.id;

    const onTitle = (e) => {setTitle(e.target.value);}
    const onDescription = (e) => {setDescription(e.target.value);}
    const onChangeOpenAt = (e) => {setOpenAt(!openAt); console.log(String(openAt))}
    const onChangeImages = (imageList) => setImages(imageList);

    //그리드 사이즈
    const maxNumber = 69;
    
    
    return (
        <div>
            
            <Form onSubmit={(e) => onSettingSave(e,{
                                            id, 
                                            title, 
                                            description, 
                                            openAt:`${String(openAt)}`
                                        },
                                            images.length>0?images[0].file:null
                                        )} >
                <p style={{margin:"0 0 -6px 3px"}}>그룹 내용 수정</p>
                <Segment>
                    {/* 이미지 업로드 부분 */}
                    <div style={{ margin: "1em 0 1.2em" }}>
                        <p style={{marginBottom:".28571429rem", fontWeight:"bold", fontSize:".92857143em"}}>그룹 이미지 수정</p>
                        <FileUploadFormView
                            images={images}
                            onChangeImages={onChangeImages}
                            maxNumber={maxNumber}
                            message={"클릭 또는 드래그하여 이미지를 업로드 해주세요"}
                        />
                    </div>

                    <Form.Field
                        label="Title 수정"
                        control={Input}
                        value={title} 
                        onChange={(e) => onTitle(e)}
                    />

                    <Form.Field
                        label="소개글 수정"
                        control={TextArea}
                        value={description} 
                        onChange={(e) => onDescription(e)}
                    />
                </Segment>

                <p style={{margin:"1.2rem 0 -6px 3px"}}>그룹 공개 여부</p>
                <Segment>
                    <Form.Field style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{display:"inline-block"}}>
                            <label htmlFor ="at" >그룹 공개 여부 표시</label>
                            {openAt === true ? <p style={{color:"#888", textAlign:"center"}}>공개중</p> :
                            <p style={{color:"#888", textAlign:"center"}}>비공개중</p>}
                        </div>
                        <Checkbox id="at" toggle checked={openAt} onChange={onChangeOpenAt} />
                    </Form.Field>
                </Segment>

                <p style={{margin:"1.2rem 0 -6px 3px"}}>그룹 제거</p>          
                <Segment>
                    <Button onClick={(e) => onSettingRemove(e,group.id)} inverted color='red'>
                        그룹 삭제
                    </Button>
                </Segment>

                <p style={{margin:"1.2rem 0 -6px 3px"}}>최종 확인</p>
                <Segment style={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                    <Button type='submit'>설정 저장</Button>
                </Segment>
            </Form>
        </div>
    );
};

export default DetailGroupSettingM;