import { Datagrid, List, ReferenceField, TextField, EditButton, UrlField } from 'react-admin';
import { db } from "../../../db";
import { shopsTable, UsersTable } from "../../../db/schema";
import { exists } from "drizzle-orm";

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