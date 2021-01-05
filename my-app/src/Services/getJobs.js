import Axios from 'axios'

async function getJobs(BASE_URL){
    const data = 
                await Axios.get(BASE_URL)
                .then(res=>res.data)
                .catch(err=>console.log(err))
    
    return data;
    
}

export default getJobs
