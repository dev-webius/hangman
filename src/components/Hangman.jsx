import image01 from './images/hangman01.png';
import image02 from './images/hangman02.png';
import image03 from './images/hangman03.png';
import image04 from './images/hangman04.png';
import image05 from './images/hangman05.png';
import image06 from './images/hangman06.png';
import image07 from './images/hangman07.png';
import image08 from './images/hangman08.png';
import image09 from './images/hangman09.png';
import image10 from './images/hangman10.png';
import image11 from './images/hangman11.png'

function Hangman() {
  return (
    <>
      <div className='hangman'>
        <div className='hangman-image'>
          <img src={image11} alt="" />
        </div>
        <div className='hangman-word'>
          <p>_____</p>
        </div>
      </div>
    </>
  );
}

export default Hangman;
