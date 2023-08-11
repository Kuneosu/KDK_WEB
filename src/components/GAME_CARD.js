import { useState } from "react";
import "./GAME_CARD.css";

const GAME_CARD = () => {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className={`GAME_CARD ${expanded ? "expanded" : ""}`}>
            <div className="GAME_HEADER">
                <div className="GAME_DATE" onClick={handleClick}>08<br />- 10</div>
                <div className="sep_line"></div>
                <div className="GAME_TITLE" onClick={handleClick}>게임 제목</div>
                <div className="sep_line"></div>
                <div className="GAME_BUTTON">🏸</div>
            </div>
            <div className="GAME_CONTENT">
                <div className="GAME_STATE">
                    경기상태 : 종료
                </div>
                <div className="GAME_WINNER">
                    1위 : A, 2위 : B
                </div>
                <div className="GAME_DELETE">
                    DEL
                </div>
            </div>
        </div>
    );
};

export default GAME_CARD;