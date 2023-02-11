import styles from '../../styles/SimpleButton.module.css';

const SimpleButton = (props) => {
  return (
    <div className={styles.Button +" "+props.className} onClick={()=>props.onClick()}>
        <p>{props.children}</p>
    </div>
  );
}

export default SimpleButton;