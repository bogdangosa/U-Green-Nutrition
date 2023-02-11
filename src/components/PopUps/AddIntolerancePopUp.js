import { useState } from "react";
import styles from "../../styles/AddIntolerancePopUp.module.css";
import PopUpOverlay from "./PopUpOverlay";
import { motion,AnimatePresence } from "framer-motion";
import SimpleButton from "../Buttons/SimpleButton";
import InputField from "../FormElements/InputField";


const AddIntolerancePopUp = (props) =>{
    const [Text,setText] = useState("");

    const Variants = {
        in: {
            opacity: 1,
            y: "50vh",
        },
        out: {
            opacity: 0,
            y: "-50vh",
        },
    };
    const Transition = {
        type: "tween",
        duration:0.7
    };

    return (
        <PopUpOverlay>
            <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={Variants}
            transition={Transition}
            key="popUp">
                <div className={styles.IntolerancePopUpContainer +" "+props.className}>
                    <h2 className={styles.PopUpTitle}>Add Intolerance:</h2>
                    <InputField placeholder="Intolerance" value={Text} setValue={(value)=>setText(value)}></InputField>
                    <div className={styles.ButtonsContainer}>
                        <SimpleButton onClick={()=>props.close()}>Close</SimpleButton>
                        <SimpleButton onClick={()=>props.add(Text)}>Add</SimpleButton>
                    </div>
                </div>
            </motion.div>
        </PopUpOverlay>
    )
}
export default AddIntolerancePopUp;