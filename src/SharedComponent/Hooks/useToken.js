import { useEffect, useState } from "react";


const useToken = (user) => { 
    const [token,setToken] = useState('')
    useEffect(() => {
        const email = user?.email
        const emailVerified = user?.emailVerified
        const currentUser = {
            userName:user?.displayName,
            email:user?.email
        }
        if (email && emailVerified) {
            fetch(`https://start-hotel-practice-project.onrender.com/api/v1/client/createUser/${email}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json',
    
                },
                body:JSON.stringify(currentUser)
            })
            .then((res) => res.json())
            .then(data => setToken(data.result))
        }
   
    }, [user])

    return[token]
};

export default useToken;