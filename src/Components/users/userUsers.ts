import { useEffect,useState} from "react";
export type User = {
   id:number,
    email:string,
    password: string,
    name: string,
    role: string,
    avatar:string,
    creationAt: string,
    updatedAt: string
}

type Result = {
  users:User[],
  error:Error | null,
  loading: boolean
}

 export default function useUserss():Result{
const [users,setUsers] = useState<User[]>([])
const [error,setError] = useState<Error | null>(null)
const [loading,setLoading] = useState<boolean>(true)

useEffect(()=>{
 fetch('https://api.escuelajs.co/api/v1/users')
.then(res =>{
  if(!res.ok) throw new Error('Failed to fetch users!');
  return res.json()
})
.then(data => setUsers(data))
.catch(err => setError(err))
.catch(() => setLoading(false))
},[])
return {users,error,loading}
}