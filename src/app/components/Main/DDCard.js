import React, { useState } from "react";
import style from "./DDcard.module.css";

export default function DDCard() {
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
    {
      month: "Aug",
      day: "09",
      event: "This is National Women's Day",
    },
    {
      month: "Sept",
      day: "24",
      event: "This is Heritage day",
    },
    {
      month: "Dec",
      day: "16",
      event: "Day of Reconciliation, we will celebrate at school",
    },
    {
      month: "Sept",
      day: "24",
      event: "This is Heritage day",
    },
    {
      month: "Dec",
      day: "16",
      event: "Day of Reconciliation, we will celebrate at school",
    },
  ];

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  function handleNext() {
    setStart(start + 1);
    setEnd(end + 1);
  }

  function handleBack() {
    setStart(start - 1);
    setEnd(end - 1);
  }
  function DateEvent(props) {
    return (
      <>
        {props.DateLists.slice(props.start, props.end).map((date, index) => (
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

  const isBackButton = start > 0;
  const isNextButton = end <= DateLists.length + 1;

  const backButton = <button onClick={handleBack}>Back</button>;
  const nextButton = <button onClick={handleNext}>Next</button>;

  {
  }
  return (
    <div className={style.ddcard}>
      <div className={style.heading}>DIARY DATE</div>
      <div className={style.main}>
        <DateEvent DateLists={DateLists} start={start} end={end} />
      </div>
      <div className={style.footer}>
        {isNextButton ? nextButton : <></>}
        {isBackButton ? backButton : <></>}
        <button>CALENDAR</button>
      </div>
    </div>
  );
}
