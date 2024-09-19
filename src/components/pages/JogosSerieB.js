import { useEffect, useState } from 'react'
import styles from './JogosSerieB.module.css'

function JogosSerieB() {

    const [jogos, setJogos] = useState([])

    useEffect(() => {
        const buscarJogos = async () => {
            const response = await fetch('https://raw.githubusercontent.com/MarkimQ/ranking016-json/main/Liga_016_Etapa_Pe_na_Areia.json')
            const data = await response.json()
            setJogos(data)
        }
        buscarJogos()
    }, [])


    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Jogo</th>
                    <th>Time Mandante</th>
                    <th className={styles.sets}>Sets</th>
                    <th>X</th>
                    <th className={styles.sets}>Sets</th>
                    <th>Time Visitante</th>
                    <th>Data</th>
                    <th>Local</th>
                </tr>
            </thead>
            <tbody>
                {
                    jogos.map(jogo => (
                        <tr key={jogo.Jogo}>
                            <td>{jogo.Jogo}</td>
                            <td>{jogo.Time_M}</td>
                            <td className ={jogo.Jogo_Placar_M === '' ? '' : 'green'}>
                                {jogo.Jogo_Placar_M}
                            </td>
                            <td>X</td>
                            <td>{jogo.Jogo_Placar_V}</td>
                            <td>{jogo.Time_V}</td>
                            <td>{jogo.Data}</td>
                            <td>{jogo.Arena}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>

    )
}

export default JogosSerieB