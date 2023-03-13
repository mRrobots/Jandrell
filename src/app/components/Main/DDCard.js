import React from "react";
import style from "./DDcard.module.css";

export default function DDCard() {
  function DateEvent() {
    return (
      <div className={style.dateEvent}>
        <div className={style.date}>
          <div>April</div>
          <div>05</div>
        </div>
        <div className={style.event}>
          This is Youth day,Our School will participate in kfc race
        </div>
      </div>
    );
  }
  return (
    <div className={style.ddcard}>
      <div className={style.heading}>DIARY DATE</div>
      <div className={style.main}>
        <DateEvent />
        <DateEvent />
        <DateEvent />
        <DateEvent />
      </div>
      <div className={style.footer}>
        <button>ALL DATES</button>
        <button>CALENDAR</button>
      </div>
    </div>
  );
}
