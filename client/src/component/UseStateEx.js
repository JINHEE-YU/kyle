import {useState} from 'react';
import UserNameA from './UserNameA';
import styles from './UseStateEx.module.css'
 
export default (props)=>{
    const [name, setName] = useState('Mike');
    const [age, setAge] = useState(props.age);
    const msg = age > 19? '성인' : '미성년자';

    function changeName(){
        setName(name === "Mike"?"Jane":"Mike");
        setAge(age + 1);
    }
    return (
    <div className={styles.Button}>
        <h3>{name} ({age}) : {msg}</h3>
        <UserNameA name={name}/>
        <button onClick={changeName}>change</button>
    </div>
    )
}