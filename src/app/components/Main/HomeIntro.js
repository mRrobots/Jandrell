import React from 'react'
import style from "./HomeIntro.module.css"
import avatar from "../../../assets/blade.jpg"
export default function HomeIntro() {
  return (
    <div className={style.home}>
        <div className={style.intro}>
            <div> Welcome To Jandrell Secondary School</div>
            <div> Located at Mpumalanga, the rise of the sun</div>
            <div>Line</div>
        </div>
        <div className={style.welcome} >
            <div>
                <img src={avatar} width = {200}></img>
            </div>
            <div> Some paragraph</div>
        </div>
    </div>
  )
}
