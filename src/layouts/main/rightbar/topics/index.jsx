import { topics } from "~/utils/const";
import Topic from "./topic";
import SidebarSection from "~/components/sidebar-section";

const Topics = () => {
  return (
    <SidebarSection title="İlgini çekebilecek gündemler" more="/trends">
      {topics.map((topic, index) => (
        <Topic key={index} item={topic} />
      ))}
    </SidebarSection>
  );
};
export default Topics;
