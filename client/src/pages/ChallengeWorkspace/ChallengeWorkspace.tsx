// pages/ChallengeWorkspace.tsx
import { useParams } from 'react-router-dom'; 

function ChallengeWorkspace() {
  const { id } = useParams();

  return (
    <div>
      <h2>Challenge Editor for challange {id}</h2>
    </div>
  );
}

export default ChallengeWorkspace;
