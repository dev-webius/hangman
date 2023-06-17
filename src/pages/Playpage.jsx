import { Link } from 'react-router-dom';
import { systemWord } from '../slices/gameSlice';
function PlayPage(){
    const questAnwers = ['한글', '영어', '일본어', '중국어'];
    const randomValue = questAnwers[Math.floor(Math.random() * questAnwers.length)];
    console.log(randomValue);
    return(
        <div>

            <Link to ="/result">submit</Link>
        </div>
    )
}

export default PlayPage;

