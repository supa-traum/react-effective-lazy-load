import { useNavigate } from "react-router-dom"

export default function A(){
  const navigate = useNavigate();
  return <button onClick={() => navigate('/b')}>A입니다!!!!!!!!!!!!</button>
}