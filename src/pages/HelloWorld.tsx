import { Dropdown } from "../components/Dropdown";
import { LayoutSidebarMain } from "../components/LayoutSidebarMain";
import { Sidebar } from "../components/Sidebar";

export const HelloWorld = () => {
  const selectItem = (item: string) => {
    console.log(`Select Item ${item}`);
  };
  return (
    <div className="hello-world">
      <LayoutSidebarMain
        sidebar={<Sidebar />}
        main={
          <div>
            <h1>Main</h1>{" "}
            <Dropdown
              items={["a", "b", "c", "d"]}
              name={"Hello"}
              onSelectItem={selectItem}
            />
          </div>
        }
      />
    </div>
  );
};
