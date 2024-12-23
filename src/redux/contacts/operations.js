import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import isDuplicated from "../../utils/isDuplicated";
import toast from "react-hot-toast";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (response) {
      return thunkAPI.rejectWithValue(response.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post("/contacts", data);
      toast.success(
        `${data.name} with phone number "${data.number}" was successfully added to Phone Book!`
      );
      return result.data;
    } catch (response) {
      return rejectWithValue(response.message);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const duplicate = isDuplicated(contacts.items, data.name, data.number);
      if (duplicate) {
        toast(
          `You already have ${duplicate.name} with number "${duplicate.number}" in your contacts list. Please check and try again!`
        );
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      toast.success(`Contact was successfully deleted!`);
      return id;
    } catch (response) {
      return rejectWithValue(response.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });
      toast.success(
        `${data.name} with phone number "${data.number}" was successfully edited in Phone Book!`
      );

      return data;
    } catch (response) {
      return rejectWithValue(response.message);
    }
  }
);
