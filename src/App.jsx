import axios from "axios";
import { useState } from "react";
import GithubStatus from "./GithubStatus";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

export default function App() {
  const [isLoading,setIsLoading] = useState(false)
  const [user,setUser] = useState()

  async function handleSubmit(e){
    e.preventDefault();
    
    setIsLoading(true)

    const formData = new FormData(e.target)
    const username = formData.get("username");

    async function getUserData () {
      await axios.get(`https://api.github.com/users/${username}`).then((res)=>{
        setUser(res.data)      
      }).finally(()=>{
        setIsLoading(false)
      })
    }

    toast.promise(getUserData(),
       {
         loading: 'Fetching...',
         success: <b>Success</b>,
         error: <b>Try again.</b>,
       }
     );


  }
  return (
    <div className="flex flex-col h-screen container space-y-10 mx-auto justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[80%] md:w-[50%] mx-auto">
        <input className="border border-indigo-500 ring-1 focus:outline-none rounded border-1 p-1" type="text" placeholder="Username" name="username" id="username"/>
        <button disabled={isLoading} className="bg-indigo-500 rounded py-1 px-5 text-white" type="submit">{isLoading ? <Loader2 className="animate-spin"/> : "Get"}</button>
      </form>
      <div>
      { user&& 
        <GithubStatus user={user} />
      }
      </div>
    </div>
  )
}