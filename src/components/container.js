export const Container = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-3 icon"><i className={props.icon} /></div>
                        <div className="col-md-9 text-left"><span className="text">{props.title}</span></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-4"><i className="fa fa-minus-circle icon" onClick={() => props.onClick(false)}></i></div>
                        <div className="col-md-4"><span>{props.count}</span></div>
                        <div className="col-md-4"><i className="fa fa-plus-circle increment-icon" onClick={() => props.onClick(true)}></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}