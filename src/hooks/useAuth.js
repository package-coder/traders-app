import { useEffect, useState } from "react"
import auth from "../config/firebase"


const useAuth = () => {

    const [result, setResult] = useState({
        loading: true,
        user: null,
    })

    useEffect(() => {

        auth.onAuthStateChanged((user) => {
            setResult({ user })
            if (result.loading) 
                setResult({ user, loading: false })
        });
        
    }, [])

    return result
}

export default useAuth