import { useNavigate } from "react-router-dom"

export default function B(){
  const navigate = useNavigate();
  return <button onClick={() => navigate('/c')}>B입니다!!!!!!!!!!!!!!!!</button>
}