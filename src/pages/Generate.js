import SimpleButton from "@/components/Buttons/SimpleButton";
import InputFieldCalories from "@/components/FormElements/InputFieldCalories";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from '../styles/Generate.module.css'
import { Configuration, OpenAIApi } from "openai";
import { AnimatePresence } from "framer-motion";
import AddIntolerancePopUp from "@/components/PopUps/AddIntolerancePopUp";
import IntoleranceCard from "@/components/Cards/IntoleranceCard";


const Generate  = ()=>{
    const [Calories,setCalories] = useState("1000");
    const [Response,setResponse] = useState("")
    const [Loading,setLoading] = useState(false);
    const [PopUpState,setPopUpState] = useState(undefined);
    const [Intolerances,setIntolerances] = useState([]);

    const configuration = new Configuration({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      });
    const openai = new OpenAIApi(configuration);

    const generateDiet = async () =>{
        setLoading(true)
        const result = await openai.createCompletion({
            model: "text-davinci-003",
            prompt:`create a healthy diet plan for ${prompt} calories a day`,
            temperature: 0.6,
            max_tokens:256,
          })
        setResponse(result.data.choices[0].text);
        console.log(result.data.choices[0].text);
        setLoading(false)
    }

    const deleteIntolerance = (index) =>{
        const IntoleranceArray= [...Intolerances];
        IntoleranceArray.splice(index,1);
        setIntolerances(IntoleranceArray);
    }

    return(
        <main className={styles.GeneratePage}>
            <div className={styles.TopBar}>
                <SimpleButton onClick={()=>setPopUpState(!PopUpState)}>Intolerances</SimpleButton>
                <InputFieldCalories placeholder="number" value={Calories} setValue={(value)=>setCalories(value)}></InputFieldCalories>
                <SimpleButton onClick={()=>generateDiet()}>Generate</SimpleButton>
                {Loading?<p>Loading...</p>:<></>}
            </div>
            <div className={styles.IntoleranceBar}>
                {Intolerances.map((intolerance,index)=>{
                    return <IntoleranceCard key={index} delete={()=>deleteIntolerance(index)}> {intolerance}</IntoleranceCard>
                })}
            </div>
            <div className={styles.ResponseContainer}>
                {Response==""?
                <p>The generated response will appear here</p>:
                <p>{Response}</p>}
            </div>

            <AnimatePresence >
                {PopUpState == true && (
                    <AddIntolerancePopUp close={() => setPopUpState(false)} add={(text)=>{setIntolerances([...Intolerances,text]);setPopUpState(false)}}/>
                )}
            </AnimatePresence>

        </main>
    )
}

export default Generate;