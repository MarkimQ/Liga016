import { useEffect, useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton';
import styles from './JogosSerieB.module.css'
import dayjs from 'dayjs';

function JogosMisto() {

    const [jogos, setJogos] = useState([])
    const [valor, setValor] = useState('');
    
    const handleChange = (event) => {
        setValor(event.target.value);
        console.log(valor)
    };

    useEffect(() => {
        const buscarJogos = async () => {
            const response = await fetch('https://raw.githubusercontent.com/MarkimQ/ranking016-json/main/Jogos_Serie_B.json')
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
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {
                    jogos.map(jogo => (
                        <tr key={jogo.Jogo}>
                            <td>{jogo.Jogo}</td>
                            <td>{jogo.Time_mandante}</td>
                            <td><Input type='number' onChange={handleChange} /></td>
                            <td>X</td>
                            <td><Input type='number' onChange={handleChange} /></td>
                            <td>{jogo.Time_visitante}</td>
                            <td> { valor !== '' ? dayjs().format('DD/MM/YYYY') : "Data"}</td>
                            <td><input type="text" placeholder='Local do Jogo' /></td>
                            <td><SubmitButton /></td>
                        </tr>
                    ))
                }

            </tbody>
        </table>

    )
}

export default JogosMisto