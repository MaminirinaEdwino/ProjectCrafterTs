import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Select, SelectTrigger } from "./components/ui/select";

export function NewAttributForm(){
    return <>
        <Label>Attribut </Label>
        <Input name="attribut-name" id="attribut-name" className="attribut-name"/>
        
        <Select>
            <SelectTrigger>
                
            </SelectTrigger>
        </Select>
    </>
}