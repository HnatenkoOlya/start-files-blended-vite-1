import style from './CryptoHistory.module.css'
import format from 'date-fns/format'
const CryptoHistory = ({items}) => {
  return <>
  <h2>CryptoHistory</h2>;
  <table className={style.table}>
  <thead className={style.thead}>
    <tr>
      <th className={style.th}>№</th>
      <th className={style.th}>PRICE</th>
      <th className={style.th}>AMOUNT</th>
      <th className={style.th}>DATE</th>
    </tr>
  </thead>

  <tbody>
    {items.map (transaction => (
        <tr className={style.tr} key={transaction.id}>
        <td className={style.td}>{transaction.id}</td>
        <td className={style.td}>{transaction.price}</td>
        <td className={style.td}>{transaction.amount}</td>
        <td className={style.td}>{format(new Date(transaction.date), "Pp")}</td>
      </tr>
    ))}
  </tbody>
</table>
  </>
};

export default CryptoHistory;
