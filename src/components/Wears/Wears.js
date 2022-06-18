import './wears.scss'

const Wears = (props) => {
    return (
        <div className="row">
            <div className="col s12 m12">
                <div 
                    className="card"
                    style={{borderRadius: '10px'}}
                >
                    <div className="card-image" id={props.id}>
                        <img 
                            src={props.img} 
                            alt={props.title}
                            style={{borderRadius: '5px 5px 0 0'}} 
                        />
                        <span 
                            className="card-title" 
                            style={{fontWeight: 500}}
                        >
                            {props.title}
                        </span>
                    </div>
                    <div className="card-content">
                        <p>{props.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wears