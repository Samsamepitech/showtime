import "../../style/Adminstyle/AdminView.css"
import AdminSideBar from './AdminSideBar'
import HomeAdmin from "./HomeAdmin"
import Topbar from './TopBar'
import { useNavigate } from 'react-router-dom';
export default function AdminView() {
  if (localStorage.getItem('role') === "1")
  return (
    <div>
        <Topbar/>
        <div className="containerMain">
            <AdminSideBar/>
            <HomeAdmin/>
        </div>
    </div>
  )

  else
    return (
      <div> YOU ARE NOT AUTHORIZED</div>
      
    )
}
