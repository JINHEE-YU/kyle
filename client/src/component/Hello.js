import World from './World';
import styles from "./Hello.module.css"
export default () => {
    return (
        <div>
            <h1 style={{
                color: "#f00",
                borderRight: "50px",
                marginBottom: "50px",
                opacity: 1,
            }}>Hello</h1>
            <World/>
            <div className={styles.box}>
                Hello.js - box
            </div>
        </div>
    )
};