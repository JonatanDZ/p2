import { SimpleForm, TextInput, Create, NumberInput, EmailField } from "react-admin";


const UserCreate = () => {
    return ( <Create>
        <SimpleForm>
            <TextInput source="name" />
            <EmailField source="email" />
            <NumberInput source="phone number"/>
        </SimpleForm>
    </Create> );
}
 
export default UserCreate;