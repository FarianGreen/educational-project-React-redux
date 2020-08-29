import Axios from "axios"



const instance = Axios.create({ 
    withCredentials:true,
    headers: {"API-KEY":"071b6d68-0b74-4b87-ad98-fcf50e2e246f"},
    baseURL : "https://social-network.samuraijs.com/api/1.0/"

})

export const userAPI ={
    getUser (currentPage=1, pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=> {
                return response.data});
    },
    follow (userId){
      return  instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
                
    },
 
    getProfile(userId){
       return profileAPI.getProfile(userId)
    }
}

export const profileAPI ={
    getProfile(userId){
       return instance.get(`profile/`+ userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/`+ userId);
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status});
    }
}

export const authAPI = {
me () {
    return instance.get(`auth/me`)
},
 login (email, password, rememberMe =false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
},
LogOut () {
    return instance.delete(`auth/login`);
}
}
