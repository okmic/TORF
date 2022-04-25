import { useContext, useState } from "react"
import { Context } from "../context"

export const AuthPage = () => {

    const cont: any = useContext(Context)
    
    const [form, setForm] = useState({login: "", password: ""})

        return <div className="WrapperInputs" style={{color: 'white'}} >
            <h1>TORF</h1>
            <input 
            type="text" 
            value={form.login} 
            onChange={(e) => setForm({...form, login: e.target.value})} 
            placeholder="login"
            />
            <input 
            type="password" 
            value={form.password} 
            onChange={(e) => setForm({...form, password: e.target.value})} 
            placeholder="password"
            />
            <button 
             onClick={() => cont.setLogin(form)}>In</button>
        </div>
}