import styles from "./Todoitem.module.css"

function Todoitem({todoName, date}) {

  return (
    <div className="container">
      <div className={` ${styles['krow']} row`}>
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

export default Todoitem;