import { useEffect, useState } from 'react'
import styles from './Classificacao.module.css'

function Classificacao() {

    const [jogos, setJogos] = useState([])

    useEffect(() => {
        const buscarJogos = async () => {
            const response = await fetch('https://raw.githubusercontent.com/MarkimQ/ranking016-json/main/classificacao.json')
            const data = await response.json()
            setJogos(data)
        }
        buscarJogos()
    }, [])


    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Posição</th>
                    <th>Time</th>
                    <th>Pontos</th>
                    <th>Jogos</th>
                    <th>Vitorias</th>
                    <th>Derrotas</th>
                    <th>Sets Ganhos</th>
                    <th>Sets Perdidos</th>
                </tr>
            </thead>
            <tbody>
                {
                    jogos.map(jogo => (
                        <tr key={jogo.Posicao}>
                            <td>{jogo.Posicao}</td>
                            <td>{jogo.Time}</td>
                            <td>{jogo.Pontos}</td>
                            <td>{jogo.Jogos}</td>
                            <td>{jogo.Vitorias}</td>
                            <td>{jogo.Derrotas}</td>
                            <td>{jogo.Sets_Ganhos}</td>
                            <td>{jogo.Sets_Perdidos}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>

    )
}

export default Classificacao