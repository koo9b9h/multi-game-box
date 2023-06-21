import {SuspectList} from '../utils/img';
import SuspectImg from '../components/SuspectImg';
import React,{useRef} from 'react'; 
import MyHeader from '../components/MyHeader';
// import { useNavigate } from "react-router-dom";

const CatchThief =  (data) => {
    const selectThief = useRef(1);
    const chanceCount = useRef(3);
    selectThief.current = (Math.floor(Math.random() * 9) + 1);

    
    const resetGame = () => {
        selectThief.current = (Math.floor(Math.random() * 9) + 1);
        chanceCount.current = 3;
    }

    const checkThief = (id)=> {
        const isThief = id === selectThief.current ? true: false;

        if(isThief){
            alert("도둑을 잡았습니다. 게임이 리셋됩니다.");
            resetGame();
        }
        if(!isThief) {
            chanceCount.current -=1;
            if(chanceCount.current === 0){
                alert("선한 시민을 잡았습니다. \n기회가 없어 게임이 리셋됩니다.");
                resetGame();
            } else{
                alert(`선한 시민을 잡았습니다. 기회가 ${chanceCount.current} 회 남았습니다.`);
            }
        }
    }

    return (
        <div className='CatchThief'>
            <MyHeader headerText={data.headerText}/>
            <h3>케릭터 중에 도둑이 있습니다. 3번의 기회 안에 도둑을 잡으세요.</h3>
            <div className='imgBox'>
                {SuspectList.map((it) => {
                        return(
                            <SuspectImg
                                src={it.suspect_img}
                                id={it.suspect_id}
                                onClick={checkThief}
                            />)})}
            </div>            
        </div>
    );
}

export default CatchThief;