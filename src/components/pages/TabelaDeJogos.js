import styles from './TabelaDeJogos.module.css'
import JogosSerieA from './JogosSerieA'
import JogosSerieB from './JogosSerieB'
import JogosMisto from './JogosMisto'
import ButtonSeries from '../form/ButtonSeries'


function TabelaDeJogos({nomeAba}) {

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
          <ButtonSeries />

        </div>

        <div className={styles.abas_conteudo}>
          {btnSeries( )}
        </div>
      </div>

    )

}

export default TabelaDeJogos