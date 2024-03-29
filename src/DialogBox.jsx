import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { database, set, ref,onValue } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from 'react-toast'

const DialogBox = () => {
  const [text, setText] = useState("");
  const setDate = () => {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    let day = ("0" + currentDate.getDate()).slice(-2);
    let dateString = `${year}-${month}-${day}`;

    return dateString;
  };
  

  const postData = () => {
    set(ref(database, "confessions/" + uuidv4()), {
      note: text,
      time: Date.now(),
      date: setDate(),
    }).then((error) => {
      if (error) toast.error("Error");
      else toast.success("Submitted");
    });
    setText('')
  };
  return (
    <center>
      <div className="mt-10 ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postData();
          }}
        >
          <textarea
            placeholder="Write your confession here..."
            className="w-[32rem] h-56 p-6 border-2 border-purple-900 rounded-lg "
            name="message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-purple-900 hover:bg-purple-950 text-white p-2 text-xl rounded-2xl w-36 relative right-[20rem] bottom-7"
          >
            Confess
          </button>
        </form>
        <div className="flex justify-center">
          <FaLock />
          <span className="text-sm ml-2 opacity-[0.50]">
            Confessed note will remain for 24hrs
          </span>
        </div>
      </div>
      <ToastContainer delay={2500}/>
    </center>
  );
};

export default DialogBox;
