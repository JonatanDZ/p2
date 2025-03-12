import { Admin, Resource, List, Datagrid, TextField, ImageField} from 'react-admin';
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
