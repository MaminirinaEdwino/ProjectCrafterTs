import { Dialog, DialogClose } from "@radix-ui/react-dialog";
import { ModeToggle } from "./components/mode-toggle";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "./components/ui/menubar";
import { Separator } from "./components/ui/separator";
import { SidebarTrigger } from "./components/ui/sidebar";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./components/ui/select";
import { Button } from "./components/ui/button";
interface navprops {
    setProject: Function
}
export default function NavBar({
    setProject
}: navprops) {
    const [newProjectOpen, setNewProjectOpen] = useState(false)
    const handleNewProject = (e: any) => {
        e.preventDefault()
        const form = new FormData(e.target)
        let projectname = form.get("project-name")
        let version = form.get("version")
        let techno = form.get("techno")
        let dbname = form.get("dbname")
        let sgbd = form.get("sgbd")
        console.log(projectname, version, techno, dbname, sgbd)
    }
    return <nav className="mt-2">
        <Menubar>
            <SidebarTrigger></SidebarTrigger>
            <MenubarMenu>
                <MenubarTrigger>
                    Project
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem onClick={() => setNewProjectOpen(!newProjectOpen)}>
                        New Project <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem onClick={handleNewProject}>
                        Open Project <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem onClick={handleNewProject}>
                        Save Project <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator></MenubarSeparator>
                    <MenubarItem onClick={handleNewProject}>
                        Export . . <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>
                    View
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem >
                        Left bar
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>
                    Element
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Add model
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <Separator orientation="vertical"></Separator>
            <ModeToggle></ModeToggle>
        </Menubar>
        <Dialog open={newProjectOpen} onOpenChange={setNewProjectOpen}>


            <DialogTrigger>

            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create a new Project
                    </DialogTitle>
                    <DialogDescription>
                        Create your new project here
                    </DialogDescription>

                </DialogHeader>
                <form onSubmit={handleNewProject} name="new-project-form" method="post">
                    <div className="mb-3 grid gap-3">
                        <Label htmlFor="project-name">ProjectName</Label>
                        <Input name="project-name" id="project-name" />
                    </div>
                    <div className="mb-3 grid gap-3">
                        <Label htmlFor="version">Version</Label>
                        <Input name="version" id="version" />
                    </div>
                    <div className="mb-3 grid gap-3">
                        <Label htmlFor="">Techno</Label>
                        <Select name="techno">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choose the techno or framework ..."></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>
                                        Languages
                                    </SelectLabel>
                                    <SelectItem value="golang">
                                        Golang
                                    </SelectItem>
                                    <SelectItem value="php">
                                        Php
                                    </SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel>
                                        Framework
                                    </SelectLabel>
                                    <SelectItem value="fastapi">
                                        FastAPI (python)
                                    </SelectItem>

                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="mb-3 grid gap-3">
                        <Label htmlFor="dbname">Database name</Label>
                        <Input name="dbname" id="dbname" placeholder="database name" />
                    </div>
                    <div className="mb-3 grid gap-3">
                        <Label htmlFor="sgbd">SGBD</Label>
                        <Select name="sgbd">
                            <SelectTrigger className="w-full">
                            <SelectValue placeholder="sgbd..."></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>
                                        Framework
                                    </SelectLabel>
                                    <SelectItem value="postgres">
                                        PostgreSQL
                                    </SelectItem>

                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex gap-2">
                        <DialogClose asChild>
                            <Button variant={"outline"}>Cancel</Button>
                        </DialogClose>
                        <Button type="submit" >Create</Button>
                    </div>
                </form>
            </DialogContent>


        </Dialog>


    </nav >
}