import axios from "axios"

const HEADER = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
    },
  };

//member관련 Api와 연동하는 클래스
export default class AccountGalleryRepository{
    //공통 적으로 사용되는 URL
    URL = "/api/accounts";


    //POST /api/account/
    galleryAdd = (filePath, accountId) => {
        let formData = new FormData()
        formData.append("file", filePath)
        return axios.post(this.URL+`${accountId}/gallery`, formData, HEADER).then(request => request.data||[])
    }
    
}