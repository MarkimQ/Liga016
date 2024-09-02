import {useState} from 'react'

import styles from './ButtonSeries.module.css'

function ButtonSeries(){
    
const [abaAtiva, setAbaAtiva] = useState('botao 1')

  function alteraAba(nomeAba) {
    setAbaAtiva(nomeAba)
  }

    return(
        <section>
          <div className={styles.abas}>
            <button
              className={abaAtiva === 'botao 1' ? 'active' : ''}
              onClick={() => alteraAba('botao 1')}
            >
              Serie A
            </button>

            <button
              className={abaAtiva === 'botao 2' ? 'active' : ''}
              onClick={() => alteraAba('botao 2')}
            >
              Serie B
            </button>

            <button
              className={abaAtiva === 'botao 3' ? 'active' : ''}
              onClick={() => alteraAba('botao 3')}
            >
              Misto
            </button>
            </div>



    </section>

    )
}

export default ButtonSeries