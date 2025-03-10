import { Datagrid, List, ReferenceField, TextField, EditButton } from 'react-admin';

const PostList = () => (
    //  List actually fetches the data from the provider, the datagrid displays
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <ReferenceField source="userId" reference="users" />
            <EditButton />
        </Datagrid>
    </List>
);

export default PostList;