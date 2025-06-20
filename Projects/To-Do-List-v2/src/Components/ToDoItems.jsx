import Todoitem from "./Todoitem"
import styles from "./ToDoItems.module.css"

function ToDoItems({ Todoitems}) {
    return (
        <>
            <div className={styles['item-container']}>
                {Todoitems.map( (item)=> <Todoitem todoName={item.name} date={item.dueDate} /> )}
                
            </div>
        </>
    )
}

export default ToDoItems