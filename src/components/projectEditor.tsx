import EditorPanel from "@/editorPanel";
import LeftSidePanel from "@/leftSidePanel";
import NavBar from "@/navBar";
import { SidebarProvider } from "./ui/sidebar";
import { useState } from "react";

export type attribut = {
    name: string,
    type: string,
    nullable: boolean
};

export type operation = {
    method: string,
    auth: string,
    role: string
}

export type model = {
    name: string
    attributs: attribut[],
    operations: operation[]
}



export type project_config = {
    apiname: string,
    version: string,
    techno: string,
    database: {
        dbname: string,
        sgbd: string
    },
    models: model[],
    user: {
        name: string,
        attributs: string,
        operation: string
    }

}

export default function ProjectEditor() {
    const [projectConfig, setProjectConfig] = useState<project_config>({
        apiname: "teste",
        version: "string",
        techno: "string",
        database: {
            dbname: "string",
            sgbd: "string"
        },
        models: [
            {
                name:"model2",
                attributs: [],
                operations: []
            }
        ],
        user: {
            name: "string",
            attributs: "string",
            operation: "string"
        }

    })
    return <>

        <SidebarProvider>
            <LeftSidePanel></LeftSidePanel>

            <main className="w-full">
                <NavBar setProject={setProjectConfig} project={projectConfig}></NavBar>
                <EditorPanel project={projectConfig} setProject={setProjectConfig}></EditorPanel>
            </main>

        </SidebarProvider>

    </>
}