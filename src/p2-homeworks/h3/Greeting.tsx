import React, {ChangeEvent, KeyboardEventHandler, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressEnter} // деструктуризация пропсов
) => {
    const inputClass = s.error ? s.ErrorInput : s.input// need to fix with (?:)


    return (
        <div className={s.hw3Wrapper}>
            <input onKeyPress={onKeyPressEnter}
                   value={name}
                   onChange={setNameCallback}
                   className={inputClass}/>
            <span className={s.error}>{error}</span>
            <button disabled={!name} onClick={addUser}>add</button>
            <span className={s.totalUser}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
