import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Aventura.module.css'

function Aventura() {

    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {   
        const buscarRepositorios = async () => {
            const response = await fetch('./filmes.json')
            const data = await response.json()
            setRepositories(
                data.filter(repo => repo.genero == "Aventura" || repo.subgenero == "Aventura")
            )
        }
        buscarRepositorios()
    }, [])
    

    return (
        <section className={styles.projetos}>
            <h2>Filmes de Aventura</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo) => (
                                <Card
                                    key={repo.id}
                                    nome={repo.nome}
                                    genero={repo.genero}
                                    capa={repo.capa}
                                    classificacao={repo.classificacao}
                                    elenco={repo.elenco_principal}
                                    ano={repo.ano}
                                    subgenero={repo.subgenero}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }
        </section>
    )
}

export default Aventura