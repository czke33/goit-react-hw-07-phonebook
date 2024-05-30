import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

const client=axios.create({
    baseURL:'https://https://66581c5b5c3617052646ed3f.mockapi.io'
});

export const fetchContacts = createAsyncThunk('contacts/fetchAll', 
async (_, thunkAPI) => {
    try {
        const response = await client.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const addContact=createAsyncThunk('contacts/addContact',
async ({name, phone}, thunkAPI) => {
    try {
        const response = await client.post('/contacts', {name, phone});
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
export const deleteContact=createAsyncThunk('contacts/deleteTask',
async ({id}, thunkAPI) => {
    try {
        const response = await client.delete(`/contacts/${id}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});