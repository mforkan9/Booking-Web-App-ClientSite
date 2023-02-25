import { useEffect } from "react"
import { useState } from "react"

const useFetch = (url,...unlimited) =>{
    const [data,setData] = useState([])
    const [isPending,setIsPending] = useState(true)
   const [error,setError] = useState(null)

   useEffect(() => {
    const fetchData = async() =>{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('something went wrong')
        }
        const data = await response.json()

        setData(data)
        setIsPending(false)
        setError(null)
    }
    fetchData().catch(err =>{
        setIsPending(false)
        setError(err.message)
    })
   }, [url,unlimited])

   return({
    data,
    isPending,
    error
   })
}

export default useFetch;