import { useState } from 'react';
import ImageComponent from './ImageComponent';
import ButtonComponent from './ButtonComponent';

function SomeComponent() {
  const [jackCount, setJackCount] = useState(0);
  const [johnyCount, setJohnyCount] = useState(0);

  function handleJackVote() {
    setJackCount(jackCount + 1);
  }

  function handleJohnyVote() {
    setJohnyCount(johnyCount + 1);
  }

  return (
    <>
      <div className="buttonContainer">
        <div>
          <ImageComponent
            src="./images/jack.webp"
            alt="illustrated happy man"
            count={jackCount}
            person="jackContainer"
          />
          <ButtonComponent className="jackBtn" onClick={handleJackVote}>
            Vote Jack
          </ButtonComponent>
        </div>
        <div>
          <ImageComponent
            src="./images/johny.svg"
            alt="illustrated happy man"
            count={johnyCount}
            person="johnyContainer"
          />
          <ButtonComponent className="johnyBtn" onClick={handleJohnyVote}>
            Vote Johny
          </ButtonComponent>
        </div>
      </div>
    </>
  );
}

export default SomeComponent;
