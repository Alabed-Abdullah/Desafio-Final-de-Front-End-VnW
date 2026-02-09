import ImgPerfil from '../../assets/Abdullah.jpg'
import styles from './Perfil.module.scss'


function Perfil() {
  return (

<section className={styles.containerPerfil}>

<article>
  <img src={ImgPerfil} alt=" Foto de perfil do Abdullah Alabed" />
  <div className={styles.cardInfo}>
    <h2>Abdullah Alabed</h2>
    <h3>Voluntário Ativo</h3>
    <p className={styles.paragrafoSobreMim}>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
    

    <address>
      <p>Foz do Iguaçu, PR</p>
      <p>abdalabed1998@gmail.com</p>
      <p>Membro desde Janeiro de 2026</p>
    </address>
         <ul className={styles.listaInteresse}>
             <li>Educação</li>
             <li>Meio Ambiente</li>
             <li>Assistência Social</li>
            <li>Design</li>
         </ul>
  </div>
</article>

</section>

)







}

export default Perfil;
