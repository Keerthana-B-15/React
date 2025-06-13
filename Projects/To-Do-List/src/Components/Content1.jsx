function Content1() {
  let todoName = 'Buy  Milk';
  let date = '4/10/2025';


  return (
    <div className="container">
      <div className="row krow">
        <div className="col-6">
          <h4>{todoName}</h4>
        </div>
        <div className="col-4">
          <h4>{date}</h4>
        </div>
        <div className="col-2 btn btn-danger">Delete</div>
      </div>
      <br />
    </div>
  )
}

export default Content1;