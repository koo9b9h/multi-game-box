import React,{} from "react";
import { useNavigate } from "react-router-dom";
import InGameButton from "../components/InGameButton";
import {GameList} from "../utils/GameList";
import MyHeader from "../components/MyHeader";

const Home = (data) => {
    const navigate = useNavigate();
    return (
        <div className="Home">
            <MyHeader headerText={data.headerText}/>
            {
                GameList.map((it) => {
                    return(
                    <InGameButton 
                        text={it.gameName} 
                        onClick={()=>navigate(it.url)}
                    />
                    )
                })
            }
        </div>
    )
}

export default Home;