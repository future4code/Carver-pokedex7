import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialState, url) => {
  const [data, setData] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)

  const getPokemons = () => {
    setIsLoading(true)

    axios.get(url)
      .then((res) => {
        setIsLoading(false)
        setData(res.data)
      })
      .catch((err) => {
        setIsLoading(false)
        // alert("Ocorreu um erro :(")
      })
  }

  useEffect(() => {
    getPokemons()
  }, [url])

  return [data, isLoading]

}

export default useRequestData