
import { FormSelect,FormLabel,Form,Button, FormGroup, Modal} from "react-bootstrap";

export default function SettingsForm(props){ 
    //TODO figure out why all form values get into the url look up event lifting again and 
    // using bootstrap modals with forms.
    const categories = props.categories || [];
    function onsubmit(e){
        props.setShow(false);
        const settings ={};
        settings.category = document.getElementById("category").value;
        settings.questionAmount = document.getElementById("questionAmount").value;
        e.settings = settings;
        
        props.onplayclick(e);
    }
    const oncancel = (e) => {props.setShow(false);}
   
    return (<Modal show = {props.show}>
            <Form className="text-center">
                <Modal.Header>
                <Modal.Title>Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup >
                        <FormLabel htmlFor="questionsamount " className="form-label">Amount of questions </FormLabel>
                        <Form.Control type="number"  id="questionAmount" min={1} max={10} defaultValue={5}/>
                        <FormLabel className="form-label">Category</FormLabel>
                        <FormSelect className="form-control" name="category" id="category" >
                            
                            {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </FormSelect>
                    </FormGroup>
                </Modal.Body>
                   <Modal.Footer>
                    <Button variant="secondary" type="submit" onclick = {oncancel}>
                        cancel
                    </Button>
                    <Button variant="primary" type="submit" onClick={onsubmit}>
                        Submit
                    </Button>
                    </Modal.Footer>
        </Form>
        </Modal>)
}