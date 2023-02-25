import { useState } from "react"

const usePoster = () => {
    const [dispatchData, setDispatchData] = useState(null)
   // const [isSending, setIsSending] = useState(true)
    const [dispatchError, setDispatchError] = useState(null)

    const disPatchReq = async (url, method, body) => {
        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            if (!response.ok) {
                setDispatchError('somthing went wrong')
            }
            //const result = await response.json()
            const result = response

            if (result.ok) {
                setDispatchData(result)
               // setIsSending(false)
                setTimeout(() => {
                   setDispatchData(null) 
                }, 1000);
                setDispatchError(null)
            }
        } catch (error) {
            //setIsSending(false)
            setDispatchError(error)
        }
    }




    return ({
        dispatchData,
        dispatchError,
        disPatchReq
    })
}

export default usePoster;