import styles from '../../styles/IntoleranceCard.module.css';

const IntoleranceCard = (props) => {
  return (
    <div className={styles.IntoleranceCard +" "+props.className}>
        <p>{props.children}</p>
        <img src="close_icon.svg" className={styles.CloseIcon} onClick={()=>props.delete()}></img>
    </div>
  );
}

export default IntoleranceCard;