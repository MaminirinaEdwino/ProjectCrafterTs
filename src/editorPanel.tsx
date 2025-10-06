import { Menubar } from "@radix-ui/react-menubar";
import { model, project_config } from "./components/projectEditor";
import { MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./components/ui/menubar";
import Model from "./model";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./components/ui/dialog";
import { useState } from "react";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
interface projectProp {
    project: project_config,
    setProject: Function
}


export default function ({ project, setProject }: projectProp) {
    const [openNewModel, setOpenNewModel] = useState(false)
    const handleNewModel = () => {
        // setProject({...project, project })
        let models: model[];
        let new_model: model;
        new_model = {
            name: " teste",
            attributs: [],
            operations: []
        }
        models = project.models;
        models.push(new_model);
        setProject({ ...project, models: models })



    }
    return <div className="border h-[90vh] m-2 rounded-md p-2">

        {project.apiname}
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>
                    Models menu
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem onClick={() => setOpenNewModel(!openNewModel)}>
                        New
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
        <Dialog open={openNewModel} onOpenChange={setOpenNewModel}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        New Model
                    </DialogTitle>
                    <DialogDescription>
                        Create a new Model here
                    </DialogDescription>
                </DialogHeader>
                <form className="mb-4 grid gap-4" method="post">

                    <div className="model-name grid gap-2">
                        <Label>Model Name</Label>
                        <Input name="model-name" id="model-name" placeholder="Model Name . . ." />
                    </div>

                    <div id="new-attribut-container">
                        <Label>FIelds </Label>
                        
                    </div>
                </form>
                <DialogFooter>
                    <DialogClose>Cancel</DialogClose>
                    <Button onClick={handleNewModel}>Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        <div className="model-container">
            {project.models.map((model: model) => <Model name={model.name} attributs={model.attributs} operations={model.operations}></Model>)}
        </div>
    </div>
}