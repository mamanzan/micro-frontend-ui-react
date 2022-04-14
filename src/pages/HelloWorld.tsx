import { LayoutSidebarMain } from "../components/LayoutSidebarMain";
import { Sidebar } from "../components/Sidebar";

export const HelloWorld = () => {
  const selectItem = (item: string) => {
    console.log(`Select Item ${item}`);
  };
  return (
    <div className="hello-world">
      <LayoutSidebarMain sidebar={<Sidebar />} main={<div></div>} />
    </div>
  );
};
