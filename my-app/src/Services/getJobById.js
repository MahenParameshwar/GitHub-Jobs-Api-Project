import Axios from 'axios'

async function getJobById(id){
    const data = 
                await Axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`)
                .then(res=>res.data)
                .catch(err=>console.log(err))
    
    return data;
    
}


export default getJobById