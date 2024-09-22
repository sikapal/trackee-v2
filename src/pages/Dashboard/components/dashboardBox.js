import { TrendingDown, TrendingUp} from "@mui/icons-material"
import { HiDotsVertical } from "react-icons/hi"


const DashboardBox = (props) => {

    return (
        <div className='dashboardBox'
            style={{ backgroundImage: `linear-gradient(to right, ${props.color?.[0]} , ${props.color?.[1]})` }}
        >

            {
                props.grow === true? 
                <span className="chart"><TrendingUp/></span>
                :
                <span className="chart"><TrendingDown/></span>
             
            }
            <div className="innerDashbox">
                <div className="col1">
                    <h4 className="text-white">Total users</h4>
                    <span className="text-white">277</span>
                </div>

                <div className="innerDashboxIcon ">
                    {
                        props.icon ?
                            <span className="icon">
                                {props.icon ? props.icon : ''}
                            </span>
                            :
                            ''
                    }

                </div>
            </div>

            <div className="innerDashboxDate">
                <h6 className="text-white">Last Week</h6>
                <span className="toggleIcon"> <HiDotsVertical/></span>
            </div>

        </div>


    )
}

export default DashboardBox
