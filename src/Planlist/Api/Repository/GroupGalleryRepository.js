import axios from "axios"

const HEADER = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
    },
  };

//member관련 Api와 연동하는 클래스
export default class MemberRepository{
    //공통 적으로 사용되는 URL
    URL = "/api/groups/";


    //member 추가
    //POST /api/groups/
    galleryAdd = (filePath, groupId) => {
        let formData = new FormData()
        formData.append("file", filePath)
        return axios.post(this.URL+`${groupId}/gallery`, formData, HEADER).then(request => request.data||[])
    }
    
}