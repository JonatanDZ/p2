import { Datagrid, EditButton, List, TextField } from "react-admin";

const ItemList = () => {
    return ( <List>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="stock"/>
            <TextField source="price"/>
            <EditButton />
        </Datagrid>
    </List> );
}
 
export default ItemList;