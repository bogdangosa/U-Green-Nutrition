import styles from '../../styles/InputFieldCalories.module.css';

const InputFieldCalories = ({placeholder,value,setValue}) => {
  return (
    <div className={styles.InputField}>
        <p>Calorie count:</p>
        <input type="number" placeholder={placeholder} value={value} onChange={(e)=>setValue(e.target.value)}/>
    </div>
  );
}

export default InputFieldCalories;