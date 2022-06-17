import './wears.scss'

const Wears = (props) => {
    return (
        <div className="row">
            <div className="col s12 m8">
                <div className="card custom-card">
                    <div className="card-image custom-card-image" id={props.id}>
                        <img src={props.img} className='img' alt={props.title} />
                        <span className="card-title custom-card-title">{props.title}</span>
                    </div>
                    <div className="card-content custom-card-content">
                        <p>{props.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wears