import "../../style/Adminstyle/HomeAdmin.css"
import FeaturedInfo from "./featuredInfo/FeaturedInfo"
import Chart from "./charts/Chart"
import WidgetSmall from "./widgetSmall/WidgetSmall"
import WidgetLarge from "./widgetLarge/WidgetLarge"
import axios from 'axios';
import { render } from "@testing-library/react"



export default function HomeAdmin() {
  
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    
      <div className="homeWidgets">
          <WidgetSmall />
          <WidgetLarge />
        </div>
    </div>
   
  
  )
}
