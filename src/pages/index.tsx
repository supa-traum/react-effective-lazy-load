import { useNavigate } from "react-router-dom"

export default function Init(){
  const navigate = useNavigate();
  
  return <button onClick={() => navigate('/a')}>A로 가보자!</button>
}