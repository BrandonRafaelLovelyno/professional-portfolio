import Reveal from "@/components/animation/reveal";
import React from "react";

const Home = () => {
  return (
    <div>
      <Reveal
        blockColor="bg-primary"
        blockDir="right"
        childrenDir="up"
        isBlock={true}
        width="w-fit"
      >
        <h1>tes</h1>
      </Reveal>
    </div>
  );
};

export default Home;
