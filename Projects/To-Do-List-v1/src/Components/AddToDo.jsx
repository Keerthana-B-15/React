function Add() {
    return (
        <div className="container text-center">
            <div className="row krow">
                <div className="col-6">
                    <input type="text" placeholder="Enter todo here" />
                </div>
                <div className="col-4">
                    <input type="date" />
                </div>
                <div className="col-2 btn btn-success">Add</div>
            </div>
            <br />
        </div>
    )
}

export default Add;