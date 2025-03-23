import ForbesListItem from '../ForbesListItem/ForbesListItem';
import style from './ForbesList.module.css'
const ForbesList = ({list}) => {
  return <> 
  <h2>ForbesList</h2>;
  <div className={style.board}>
  <div className={style.header}>
    <h2 className={style.title}>
      <span className={style.titleTop}>Forbes</span>
      <span className={style.titleBottom}>Leader board</span>
    </h2>
  </div>

  <ul className={style.list}>
    {list.map(({ id, avatar, name, capital, isIncrease })=> (
      <li key={id} className={style.item}>
      <ForbesListItem key={id} avatar={avatar} name={name} capital={capital} isIncrease={isIncrease} /></li>))}
  </ul>
</div>
  </>
};

export default ForbesList;
