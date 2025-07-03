import HoldingSection from "./HoldingSection";
import {LineChartSection} from "./LineChartSection";

function Holdings() {
  return (
    <div>
      <HoldingSection />
      <br/> <br/>
      <h2>Live Motion Chart</h2>
      
      <LineChartSection />
    </div>
  );
};

export default Holdings;