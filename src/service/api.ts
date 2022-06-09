const url:string = "http://localhost:8000/cars"

export const getCars = async () => {
   var reponse = await fetch(url)
   .then((res)=>res.json())
   .catch((e)=>console.log(e))

   return reponse
}
export const getCar = async (id:any) => {
   return await fetch(url + `/${id}`)
   .then((res)=>res.json())
   .catch((e)=>console.log(e))
}
