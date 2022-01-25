import { useEffect, useState } from "react";
import { Container } from "./styles";

interface FormProps {
  handleSetTrueLogin: () => void;
}

export function Form({ handleSetTrueLogin }: FormProps) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    username: "JohnDoe",
    password: "johndoe123"
  }

  function handleLogin() {
    if(user.username === username && user.password === password) {
      handleSetTrueLogin()
      return;
    }
    alert("Login failed!")
  }

  

  return (
    <Container>
      <h1>Torcida Lakers</h1>

      <input 
        type="text"
        placeholder="Usuário"
        onChange={(data) => { setUsername(data.target.value) }}
      />

      <input 
        type="text"
        placeholder="Senha"
        onChange={(data) => { setPassword(data.target.value) }}
      />

      <button 
        type="submit"
        onClick={handleLogin}
      >
        ENTRAR
      </button>
    </Container>
  )
}