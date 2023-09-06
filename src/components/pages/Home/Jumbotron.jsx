"use client";

import CustomContainer from "@/components/CustomContainer/CustomContainer";
import Title from "@/components/Title";

const Jumbotron = () => {
  return (
    <div className="h-[calc(100vh-64px)] lg:h-[calc(100vh-120px)] bg-monumen bg-no-repeat bg-cover bg-center w-full flex items-center justify-center">
      <CustomContainer>
        <div className="mb-0 lg:mb-14">
          <Title>
            <span>Monumen Pahlawan Perang Kemerdekaan</span>
            <br />
            <span>Republik Indonesia 1945</span>
          </Title>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Jumbotron;
