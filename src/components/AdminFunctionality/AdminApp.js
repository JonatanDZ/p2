"use client";
import {
    Admin,
    Resource,
} from "react-admin";
import { Layout } from "../Layout"; 
import PostList from "../../app/admin/posts/post-list";
import UserList from "../../app/admin/users/user-list";
import { PostShow } from "../../app/admin/posts/post-show";
import { UserShow } from "../../app/admin/users/user-show";
import { PostEdit } from "../../app/admin/posts/post-edit";
import { UserEdit } from "../../app/admin/users/user-edit";
import PostCreate from "../../app/admin/posts/post-create";
import UserCreate from "../../app/admin/users/user-create";
import TursoDataProvider from "../../app/admin/TursoDataProvider";
import HomePage from "../../app/admin/DashboardAdmin/homepage";
import ItemList from "../../app/admin/items/item-list";
import SalesList from "../../app/admin/Sales/catalogue-list";

//const dataProvider = simpleRestProvider('libsql://p2-project-kat123.turso.io');


const AdminApp = () => (
    <Admin dataProvider={TursoDataProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    </Admin>
);

export default AdminApp;
