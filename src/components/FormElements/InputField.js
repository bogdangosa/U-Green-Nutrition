import styles from '../../styles/InputField.module.css';

const InputField = ({placeholder,value,setValue}) => {
  return (
    <div className={styles.InputField}>
        <input type="text" placeholder={placeholder} value={value} onChange={(e)=>setValue(e.target.value)}/>
    </div>
  );
}

export default InputField;