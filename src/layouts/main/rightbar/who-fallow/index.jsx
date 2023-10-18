import Button from "~/components/button";
import SidebarSection from "~/components/sidebar-section";
import UserCard from "~/components/user-card";
import { whoFallowUsers } from "~/mock";
import { useAccount } from "~/store/auth/hook";

const WhoFallow = () => {
  const account = useAccount();

  return (
    <SidebarSection
      title="Kimi takip etmeli"
      more={`/connect_people?user_id=${account.id}`}
    >
      {whoFallowUsers.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </SidebarSection>
  );
};
export default WhoFallow;
