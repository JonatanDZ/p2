import { Datagrid, List, ReferenceField, TextField, EditButton, UrlField } from 'react-admin';


const SalesList = () => {
    return ( 
        <List>
            <Datagrid>
                <TextField source="albumId" />
                <TextField source="id" />
                <TextField source="title" />
                <UrlField source="url" />
                <UrlField source="thumbnailUrl" />
                <EditButton />
            </Datagrid>
        </List>
     );
}
 
export default SalesList;