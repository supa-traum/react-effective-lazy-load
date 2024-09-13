import { useNavigate } from "react-router-dom"

export default function E(){
  const navigate = useNavigate();
  return <button onClick={() => navigate('/f')}>E입니다!!!!!!!!!!!!!!!!</button>
}