import styles from './TabelaDeJogos.module.css'
import JogosSerieA from './JogosSerieA'
import JogosSerieB from './JogosSerieB'
import JogosMisto from './JogosMisto'
import { useState } from 'react'
import TabButton from '../form/TabButton'



function TabelaDeJogos({nomeAba}) {

  const [abaAtiva, setAbaAtiva] = useState('')

  function alteraAba(nomeAba) {
    setAbaAtiva(nomeAba)
    console.log(nomeAba)
  }

  function btnSeries(nomeAba) {
    switch (nomeAba) {
      case 'Serie A':
        return < JogosSerieA />
      case 'Serie B':
        return < JogosSerieB />
      case 'Misto':
        return < JogosMisto />
      default:
    }
  }

    return (
      <div>
        <div className={styles.abas}>
              <TabButton nomeAba='Serie A' abaAtiva={abaAtiva} alteraAba={alteraAba}/> 
              <TabButton nomeAba='Serie B' abaAtiva={abaAtiva} alteraAba={alteraAba}/> 
              <TabButton nomeAba='Misto' abaAtiva={abaAtiva} alteraAba={alteraAba}/>   
        </div>

        <div className={styles.abas_conteudo}>
          {btnSeries(abaAtiva)}
        </div>
      </div>

    )

}

export default TabelaDeJogos