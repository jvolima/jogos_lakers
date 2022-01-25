import { useEffect, useState } from "react";
import { Container } from "./styles";

interface GameData {
  home_team: {
    full_name: string;
    home_team_score: number;
  },
  visitor_team: {
    full_name: string;
    visitor_team_score: number;
  }
}

export function Home() {
  const [gameData, setGameData] = useState<GameData>(); 

  useEffect(() => {
    const data = new Date().toLocaleDateString();
    const [day, month, year] = data.split("/");
    
    fetch(`https://www.balldontlie.io/api/v1/games?seasons[]=${Number(year) - 1}&team_ids[]=14&dates[]=${year}-${month}-${day}`)
    .then(response => response.json())
    .then(data => {
      const gameInfo: GameData = {
        home_team: {
          full_name: data.data[0].home_team.full_name,
          home_team_score: data.data[0].home_team_score
        },
        visitor_team: {
          full_name: data.data[0].visitor_team.full_name,
          visitor_team_score: data.data[0].visitor_team_score
        }
      }
      setGameData(gameInfo)
    })
  }, [])

  

  return (
    <Container>
      <h1>Seja bem vindo torcedor do Lakers!</h1>
      
    </Container>
  )
}