import React, { useState } from "react";
import style from "./DDcard.module.css";

export default function DDCard() {
  function DateEvent() {
    const DateLists = [
      {
        month: "April",
        day: "07",
        event: "This is Good Friday,Our School will participate in kfc race",
      },
      {
        month: "April",
        day: "10",
        event: "This is family day,don't come to school ,stay home :/",
      },
      {
        month: "June",
        day: "16",
        event: "This is Youth day,we will celebrate at school",
      },
      // {
      //   month: "Aug",
      //   day: "09",
      //   event: "This is National Women's Day",
      // },
      // {
      //   month: "Sept",
      //   day: "24",
      //   event: "This is Heritage day",
      // },
      // {
      //   month: "Dec",
      //   day: "16",
      //   event: "Day of Reconciliation",
      // },
    ];

    return (
      <>
        {DateLists.map((date, index) => (
          <div className={style.dateEvent}>
            <div className={style.date}>
              <div key={index}>{date.month}</div>
              <div key={index}>{date.day}</div>
            </div>
            <div className={style.event} key={index}>
              {date.event}
            </div>
          </div>
        ))}
      </>
    );
  }
  return (
    <div className={style.ddcard}>
      <div className={style.heading}>DIARY DATE</div>
      <div className={style.main}>
        <DateEvent />
      </div>
      <div className={style.footer}>
        <button>ALL DATES</button>
        <button>CALENDAR</button>
      </div>
    </div>
  );
}
