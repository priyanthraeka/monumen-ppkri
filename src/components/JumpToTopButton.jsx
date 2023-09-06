"use client";

import { useRef } from "react";
import { FaAngleUp } from "react-icons/fa";

const JumpToTopButton = () => {
  const buttonRef = useRef();

  const showButtonHandler = () => {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      buttonRef.current.classList.remove("hidden");
      buttonRef.current.classList.add("block");
    } else {
      buttonRef.current.classList.remove("block");
      buttonRef.current.classList.add("hidden");
    }
  };
  window.onscroll = () => showButtonHandler();

  const clickButtonHandler = () => {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
  };

  return (
    <button
      ref={buttonRef}
      onClick={clickButtonHandler}
      className="fixed hidden right-5 bottom-10 z-50 p-3 bg-red-500 text-white rounded-full animate-bounce"
    >
      <FaAngleUp size={25} />
    </button>
  );
};

export default JumpToTopButton;
