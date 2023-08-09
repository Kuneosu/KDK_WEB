import './M_HOME.css';
import { useNavigate } from 'react-router-dom';

const M_HOME = () => {
    const navigate = useNavigate();
    const moveInfo = () => {
        navigate('../info');
    };

    return (
        <div className='M_HOME'>
            <div className='M_HOME_LOGO'>
                <span>
                    마스코터 대진표 <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;생성 도우미
                </span>
            </div>
            <div className='M_HOME_BUTTON'>
                <button onClick={moveInfo}>대진표 생성</button>
            </div>
        </div>
    )
}

export default M_HOME;