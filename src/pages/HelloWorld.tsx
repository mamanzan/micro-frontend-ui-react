import { Dropdown } from "../components/Dropdown";
import { LayoutSidebarMain } from "../components/LayoutSidebarMain";

export const HelloWorld = () => {
  const selectItem = (item: string) => {
    console.log(`Select Item ${item}`);
  };
  return (
    <div className="hello-world">
      <LayoutSidebarMain
        sidebar={
          <Dropdown
            items={["a", "b", "c", "d"]}
            name={"Hello"}
            onSelectItem={selectItem}
          />
        }
        main={<h1>Main</h1>}
      />
    </div>
  );
};
