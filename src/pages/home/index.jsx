import StickyHeader from "~/components/sticy-header";
import Tab from "~/components/tab";

const Home = () => {
  return (
    <>
      <Tab activeTab="for-you">
        <StickyHeader title={"Ana sayfa"}>
          <Tab.Items>
            <Tab.Item id="for-you">Sana özel</Tab.Item>
            <Tab.Item id="followings">Takip edilenler</Tab.Item>
          </Tab.Items>
        </StickyHeader>

        <Tab.Content id="for-you">1. content</Tab.Content>
        <Tab.Content id="followings">2. content</Tab.Content>
      </Tab>
      Home
    </>
  );
};
export default Home;
