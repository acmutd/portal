import React from "react";

function SidebarContent(props: any) {
  return (
    <div className="p-10 mx-10 mt-10 rounded-lg bg-gray-200">
      {props.children}
    </div>
  );
}

export default SidebarContent;
