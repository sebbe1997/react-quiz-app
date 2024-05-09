
import { useState } from "react";
import { FormSelect,FormLabel,Form,Button, FormGroup,Control} from "react-bootstrap";
export default function SettingsForm(props){
    const {categoryArray,setcategoryArray} = useState([]);
    function OnSave(e) {
        e.preventDefault();
        const settings = {}
        settings.category = document.getElementById("category").value;
        props.OnSave(e);
    }
    return (<Form className="text-center">
            <FormGroup>
            <FormLabel htmlFor="questionsamount " className="form-label">Amount of questions </FormLabel>
            <Form.Control type="number" min={1} max={10} defaultValue={5}/>
            <FormLabel className="form-label">Category</FormLabel>
            <FormSelect className="form-control" name="category" id="category" >
                <option>Open this select menu</option>
                <option value="General Knowledge">General Knowledge</option>
                <option value="Entertainment: Music">Entertainment: Music</option>
                <option value="Science: Computers">Science: Computers</option>
            </FormSelect>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </FormGroup>
        </Form>)
}