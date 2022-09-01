import React from 'react';
import s from './Message.module.css';


type messageDataPropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}


function Message(props: messageDataPropsType) {
    return (
        <div className={s.message}>
            <div className={s.message__img__wrapper}>
                <img src={props.avatar} alt="avatar"/></div>
            <div className={s.message__content}>
                <p className={s.message__name}>{props.name}</p>
                <p className={s.message__text}>{props.message}</p>
                <p className={s.message__time}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
