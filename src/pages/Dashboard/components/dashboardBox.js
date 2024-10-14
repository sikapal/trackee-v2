import { TrendingDown, TrendingUp} from "@mui/icons-material"


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
                    <h4 className="text-white">Livraisons en cours</h4>
                    <span className="text-white">18</span>
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
{/* 
            <div className="innerDashboxDate">
                <h6 className="text-white"></h6>
            </div> */}

        </div>


    )
}

export default DashboardBox
