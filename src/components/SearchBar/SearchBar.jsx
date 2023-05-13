import style from './SearchBar.module.css'
export default function SearchBar(props) {
   const {onSearch} = props;
   return (
      <div className={style.wrapperSearch}>
         <input className={style.input} type='search' />
         <button className={style.btn} onClick={onSearch}>Agregar</button>
      </div>
   );
}
