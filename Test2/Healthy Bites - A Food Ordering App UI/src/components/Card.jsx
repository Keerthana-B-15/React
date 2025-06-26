import Styles from "./card.module.css"

function Card(props){
    return (
        <>
            <div className={Styles.card}>
                <div className={Styles.cardContent}>    {props.children}

                </div>

            </div>
        </>
    )
}

export default Card