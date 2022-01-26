import { useEffect, useState } from "react";
import { Container, Jogo } from "./styles";

interface GameData {
  home_team: {
    full_name: string;
    home_team_score: number;
  },
  visitor_team: {
    full_name: string;
    visitor_team_score: number;
  },
  gameStatus: string;
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
        },
        gameStatus: data.data[0].status
      }
      setGameData(gameInfo)
    })
  }, [])

  

  return (
    <Container>
      <h1>Jogo mais recente do Lakers</h1>
      
      <Jogo>
        {
          gameData?.gameStatus === "Final" ? <h2>Jogo encerrado</h2>
          : (gameData?.home_team.home_team_score && gameData?.visitor_team.visitor_team_score) === 0 
          ? <h2>Próximo jogo em breve</h2> 
          : <h2>Jogo em andamento</h2>
        }
        <h2>{gameData?.home_team.full_name} : <span>{gameData?.home_team.home_team_score}</span></h2>
        <h3>X</h3>
        <h2>{gameData?.visitor_team.full_name} : <span>{gameData?.visitor_team.visitor_team_score}</span></h2>
      </Jogo>
    </Container>
  )
}