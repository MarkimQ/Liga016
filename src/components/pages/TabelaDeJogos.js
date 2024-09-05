import styles from './TabelaDeJogos.module.css'
import JogosSerieA from './JogosSerieA'
import JogosSerieB from './JogosSerieB'
import JogosMisto from './JogosMisto'
import ButtonSeries from '../form/ButtonSeries'
import { useState } from 'react'



function TabelaDeJogos({nomeAba}) {

  const [abaAtiva, setAbaAtiva] = useState('botao 1')

  function alteraAba(nomeAba) {
    setAbaAtiva(nomeAba)
    console.log(nomeAba)
  }

  function btnSeries(nomeAba) {
    switch (nomeAba) {
      case 'botao 1':
        return < JogosSerieA />
      case 'botao 2':
        return < JogosSerieB />
      case 'botao 3':
        return < JogosMisto />
      default:
    }
  }

    return (
      <div>
        <div className={styles.abas}>
          <ButtonSeries abaAtiva = {abaAtiva} alteraAba = {alteraAba} />

        </div>

        <div className={styles.abas_conteudo}>
          {btnSeries(abaAtiva)}
        </div>
      </div>

    )

}

export default TabelaDeJogos