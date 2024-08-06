import React, { useState } from "react";
import AuthOperations from "./hooks/userNameConnect.js";

const Intro = () => {
  const [userName, setUserName] = useState("");
  const [showComponent, setShowComponent] = useState(false);
  const { mutate, isPending, isError, data } = AuthOperations({
    onSuccess: () => {
      setShowComponent(true);
    },
    onError: (error) => {
      console.log("error", error);
      setShowComponent(false);
    },
  });

  return (
    <div
      style={{ display: showComponent ? "none" : "flex" }}
      className="flex flex-col text-center items-center justify-center gap-[5px] z-10 absolute bg-green-400 h-[100%] w-[100%]"
    >
      <h1 className=" text-white leading-[22px] text-[22px]">
        enter your tiktok @user_name
      </h1>
      <input
        type="text"
        placeholder="enter your tiktok @user_name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        onClick={() => {
          mutate([
            {
              method: "POST",
              url: "addUserName",
              name: userName,
            },
          ]);
        }}
      >
        {isPending ? "leading..." : "start"}
      </button>
      {isError && <p>there is an error</p>}
    </div>
  );
};

export default Intro;
