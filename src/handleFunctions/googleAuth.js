import { auth, provider } from "../config/firebaseconfig";
import { signInWithPopup } from "firebase/auth";
const signInwithGoogle = async () => {
    
  try {
    
    signInWithPopup(auth,provider).then((data)=>{
        console.log(data.user);
        localStorage.setItem("authUser",JSON.stringify(data.user))
    })
  } catch (err) {
    console.log(err.message);
    alert(`err is ${err}`);
  }
};
export { signInwithGoogle };
