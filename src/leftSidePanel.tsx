import {  Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "./components/ui/sidebar";

export default function LeftSidePanel(){
    return <Sidebar
        side="left"
        variant="floating"
        collapsible="offcanvas"
    >
        <SidebarContent>
            <SidebarHeader>
                Header
            </SidebarHeader>
            <SidebarFooter>
                Footer
            </SidebarFooter>

        </SidebarContent>
    </Sidebar>
}