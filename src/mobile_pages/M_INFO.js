import GAME_CARD from "../components/GAME_CARD";
import TOPBAR from "../components/TOPBAR";
import "./M_INFO.css";

const M_INFO = () => {
    return (
        <div className="M_INFO">
            <TOPBAR text={"마스코터 대진표 생성 도우미"} />
            <GAME_CARD />
            <GAME_CARD />
            <GAME_CARD />
        </div>
    );
};

export default M_INFO;