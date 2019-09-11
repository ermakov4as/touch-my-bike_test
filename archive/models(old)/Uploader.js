import axios from './axios'

export default {
  uploadImg: file => {
    let formData = new FormData()
    formData.append('file', file)
    return axios.post('/garage/upload_image/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
