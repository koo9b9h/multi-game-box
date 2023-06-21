import { useNavigate } from "react-router-dom";

const HomeButton = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    return (
        <div className="HomeButton">
            <button onClick={goHome} >홈으로 가기</button>
        </div>
    );
}

export default HomeButton;