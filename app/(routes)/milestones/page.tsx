import React from "react";

import MilestonesHeroSection from "@/components/sections/milestones/milestones-hero";
import MilestonesMainSection from "@/components/sections/milestones/milestones-main";

const MilestonesPage = () => {
  return (
    <div className="w-full bg-[#EEF2FF]">
      <MilestonesHeroSection />
      <MilestonesMainSection />
    </div>
  );
};
export default MilestonesPage;
