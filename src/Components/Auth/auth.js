import Api from './init'

export const signIn = async (user, pass, type)=>{
   const res = await Api.post('/login')
   if(res){
       return res.data.token
    }
}

export const getData = async ()=>{
    const data = await Api.get('/getStories', {
        headers:{
            "x-access-token": localStorage.getItem('x-access-token')
        }
    })
    return data.data
}

