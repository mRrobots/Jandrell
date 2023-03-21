import React from "react";
import style from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={style.main}>
      <div>
        <h1>Contact Us</h1>
        <h2>Address</h2>
        <div className={style.address}>
          G.S. College of Commerce, Jamanalal Bajaj Marg, Civil Lines, Wardha,
          Maharashtra – 442001 Contact- 07152 -295502 Website : gsccwardha.
          ac.in Email Id -gscc_wardha@rediffmail.com
        </div>
      </div>

      <div>
        <h1>Enquiries</h1>
        <h2>Fill in the form below</h2>
        <form action="#">
          <input type="text" placeholder="Full name"></input>
          <input type="text" placeholder="Your phone number"></input>
          <input type="text" placeholder="Your email"></input>
          <input type="text" placeholder="Enquiry"></input>
          <input type="text" placeholder="Enquiry"></input>
          <button> Submit</button>
        </form>
      </div>
    </div>
  );
}
