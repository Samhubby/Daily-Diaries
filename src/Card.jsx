import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { database, onValue, ref } from "../config/firebase";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [confessionList, setConfessionList] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    onValue(ref(database, "confessions/"), (snapshot) => {
      let data = snapshot.val();
      const temp = [];
      for (let key in data) {
        temp.push(data[key]);
      }
      setConfessionList(temp);
      setisLoading(false);
    });
  }, []);
  return (
    <div className="flex w-screen flex-row items-center justify-center space-x-6 space-y-6 flex-wrap">
      {isLoading
        ? <div className="w-[50%]"><ShimmerSimpleGallery card imageHeight={300} row={3} caption/></div>
        : confessionList.map((data, index) => {
            return (
              <div key={index}>
                <div className="border-2 border-purple-900 rounded-2xl w-60 h-60 p-2">
                  <div className="space-y-3">
                    <span className="text-sm">{data.date}</span>
                    <br />

                    <p className="text-center">{data.note}</p>
                    <span className="text-sm"></span>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Card;
