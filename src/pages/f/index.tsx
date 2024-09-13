import { useNavigate } from "react-router-dom"

export default function F(){
  const navigate = useNavigate();
  return <button onClick={() => navigate('/a')}>F입니다!!!!!!!!!!!!!!!!</button>
}