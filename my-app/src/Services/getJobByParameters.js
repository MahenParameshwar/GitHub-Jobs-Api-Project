import Axios from 'axios'

async function getJobByParameters({description,location,full_time}){
    console.log(location)
    const data = 
                await Axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`,{
                   params : { description,
                    location,
                    full_time
                   }
                })
                .then(res=>res.data)
                .catch(err=>console.log(err))
    
    return data;
    
}

export default getJobByParameters
