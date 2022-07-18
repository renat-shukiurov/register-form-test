import React from "react";
import {GlobalStyle} from "./App.style";
import Form from "./components/form/Form";
import Table from "./components/table/Table";

export default function App() {

    return (

        <>
            <GlobalStyle/>
            <Form/>
            <Table/>
        </>

    );
}