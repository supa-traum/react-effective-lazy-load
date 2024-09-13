import { useNavigate } from "react-router-dom"

export default function C(){
  const navigate = useNavigate();
  return <button onClick={() => navigate('/d')}>C입니다!!!!!!!!!!!!!!!!</button>
}