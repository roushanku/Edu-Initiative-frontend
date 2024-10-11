import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

export default function ServicesDropDown() {
  return (
    <Dropdown>
      <DropdownTrigger className="p-0 mt-[2px]">
        <h1 className="cursor-pointer text-sm ">Our Services</h1>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Action event example"
        onAction={(key) => alert(key)}
      >
        <DropdownItem key="new">Academic Tution</DropdownItem>
        <DropdownItem key="copy">Home Tution</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
