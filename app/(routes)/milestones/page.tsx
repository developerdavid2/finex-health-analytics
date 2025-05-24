import React from "react";

import MilestonesHeroSection from "@/components/milestones/milestones-hero";
import MilestonesMainSection from "@/components/milestones/milestones-main";

const MilestonesPage = () => {
  return (
    <div className="w-full bg-[#EEF2FF]">
      <MilestonesHeroSection />
      <MilestonesMainSection />
    </div>
  );
};
export default MilestonesPage;
