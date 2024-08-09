import styles from './Card.module.css'

function Card({nome, genero, capa, classificacao, ano, subgenero, elenco}) {
    return (
        <section className={styles.card}>
            <h3>{nome}</h3>
            <img src={capa}/>
            <h4>{genero}</h4>
            <h5>{subgenero}</h5>
            <p>{classificacao}</p>
            <p>{ano}</p>
            <div className={styles.card_footer}>
                <p>{elenco[0]}</p>
                <p>{elenco[1]}</p>
                <p>{elenco[2]}</p>
            </div>
        </section>
    )
}

export default Card