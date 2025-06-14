import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Error from "./Error"
import { auth, db } from "./firebase-config";
import { useNavigate } from "react-router-dom";

function Register() {
  const [errorMessage, setErrorMessage] = useState("")
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!email || !password1 || !password2) {
      setErrorMessage("Please fill all inputs");
      return;
    }
    if (password1 !== password2) {
      setErrorMessage("Passwords don't match");
      return;
    }
    if (password1.length < 6) {
      setErrorMessage("Password is too weak, use at least 6 characters");
      return;
    } 
  
    const username = email.trim().split("@")[0];
    console.log(username);
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password1);
      const user = userCredential.user;
  
      await setDoc(doc(db, "players", user.uid), {
        username: username,
        email: email.trim().toLowerCase(),
        createdAt: new Date().toISOString(),
        highestScore: 0
      });
  
      setErrorMessage("Successfully signed up");
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  

  return (
    <div className="register">
      <h2>Register</h2>
      <section className="inputs">
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="examplemail@gmail.com"></input>
        <input onChange={(e) => setPassword1(e.target.value)} value={password1} type="password" placeholder="Password"></input>
        <input onChange={(e) => setPassword2(e.target.value)} value={password2} type="password" placeholder="Repeat Password"></input>
        <button onClick={handleRegister}>Register</button>
      </section>
      <Error message={errorMessage} />
    </div>
  )
}
export default Register