import {  Sidebar, SidebarContent } from "./components/ui/sidebar";

export default function LeftSidePanel(){
    return <Sidebar
        side="left"
        variant="floating"
        collapsible="offcanvas"
    >
        <SidebarContent>

        </SidebarContent>
    </Sidebar>
}