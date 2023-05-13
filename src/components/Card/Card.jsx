import style from './Card.module.css'
export default function Card(props) {
   const {id,name,status,species,gender,origin,image,onClose} = props
   return (
      <div className={style.singleCard}>
         <button className= {style.btn} onClick={onClose}>X</button>
         <img src={image} alt='character' />
         <h2 className={style.nameCharacter}>{name}</h2>
         <h2 className={style.statusCharacter}>{status}</h2>
         <h2 className={style.speciesCharacter}>{species}</h2>
         <h2 className={style.genderCharacter}>{gender}</h2>
         <h2 className={style.originCharacter}>{origin}</h2>         
      </div>
   );
}
