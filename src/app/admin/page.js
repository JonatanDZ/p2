/*
import Admin from 'react-admin/lib/Admin';
import Resource from 'react-admin/lib/Resource';
import List from 'react-admin/lib/List';
import Datagrid from 'react-admin/lib/Datagrid';
import TextField from 'react-admin/lib/TextField';
import ImageField from 'react-admin/lib/ImageField';
import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = simpleRestProvider('/api/products');  //api key
const ProductList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="price" />
      <ImageField source="image" label="Image" />
    </Datagrid>
  </List>
);

const AdminPage = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="products" list={ProductList} />
  </Admin>
);

export default AdminPage;
*/