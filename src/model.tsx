import { model } from "./components/projectEditor";
import { Label } from "./components/ui/label";
import { Separator } from "./components/ui/separator";


export default function Model({ name, attributs, operations }: model) {
    return <div className="border p-2 rounded-md w-fit">
        <span>{name}</span> <Separator></Separator>

        <div className="attributs p-2">
            <Label>Attributs</Label>

            {attributs.length}
        </div>

        <Separator></Separator>
        <div className="operations p-2">
            <Label>Operations</Label>
            {operations.length}
        </div>

    </div>

}