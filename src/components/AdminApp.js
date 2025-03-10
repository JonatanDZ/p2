"use client";
import {
    Admin,
    Resource,
} from "react-admin";
import { Layout } from "./Layout"; 
import PostList from "../app/admin/posts/post-list";
import UserList from "../app/admin/users/user-list";
import { PostShow } from "../app/admin/posts/post-show";
import { UserShow } from "../app/admin/users/user-show";
import { PostEdit } from "../app/admin/posts/post-edit";
import { UserEdit } from "../app/admin/users/user-edit";
import PostCreate from "../app/admin/posts/post-create";
import UserCreate from "../app/admin/users/user-create";

import HomePage from "../app/admin/homepage";
import jsonServerProvider from 'ra-data-json-server';

const dataProviderJ = jsonServerProvider('https://jsonplaceholder.typicode.com');


const AdminApp = () => (
<Admin layout={Layout} dataProvider={dataProviderJ} dashboard={ HomePage }>
    <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} create={PostCreate}/> 
    <Resource name="users" list={UserList} show={UserShow} edit={UserEdit} create={UserCreate}/>
</Admin>
);

export default AdminApp;
