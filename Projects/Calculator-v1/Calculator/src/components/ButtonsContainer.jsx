import styles from './ButtonsContainer.module.css'

function ButtonsContainer() {
    let buttons = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    return (
        <>
            <div className={styles["buttons-container"]}>
                {buttons.map((item) => <button className={styles["button"]}>{item}</button> )}
            </div>
        </>
    )
}

export default ButtonsContainer