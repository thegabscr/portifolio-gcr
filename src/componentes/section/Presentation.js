import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation() {
    return (
        <div className={styles.presentation} id="Presentation" >
            <h4><strong> Bem-vindo ao meu portifólio </strong></h4>
            <h1> Olá, eu sou Gabriel Cursino! :) </h1>
            <p> Sou apaixonado por tecnologia e criações.
                Estou estudando e me formando pela escola DNC no curso de Desenvolvedor Fullstack. <br />
                Sou uma pessoa bem carismática, educada e procuro sempre melhorar e evoluir. <br />
                Fique á vontade e confira minhas habilidades e meus projetos.
            </p>
            <ButtonA link='https://github.com/thegabscr/' text='Conecte-se comigo!' />
        </div>
    )
}

export default Presentation