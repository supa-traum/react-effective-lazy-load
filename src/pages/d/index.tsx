import { useNavigate } from "react-router-dom"

export default function D(){
  const navigate = useNavigate();
  return <button onClick={() => navigate('/e')}>D입니다!!!!!!!!!!!!!!!!</button>
}