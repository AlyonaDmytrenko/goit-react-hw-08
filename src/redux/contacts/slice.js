import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, deleteContactThunk, editContact, fetchDataThunk } from "./operations";

const INITIAL_STATE = {
  items: [],        // Список контактів
  loading: false,   // Статус завантаження
  error: null,      // Помилка, якщо вона виникає
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: INITIAL_STATE,

  extraReducers: builder => {
    builder
      .addCase(fetchDataThunk.pending, (state) => {
        state.loading = true; // Коли запит на завантаження контактів відправлений
        state.error = null;   // Очищаємо попередні помилки
      })
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.loading = false; // Завершили завантаження
        state.items = action.payload; // Оновлюємо контакти
      })
      .addCase(fetchDataThunk.rejected, (state, action) => {
        state.loading = false; // Завершили завантаження
        state.error = action.payload; // Зберігаємо помилку, якщо вона є
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload); // Видаляємо контакт
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload); // Додаємо новий контакт
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.items = state.items.map(item =>
          item.id === action.payload.id ? action.payload : item // Оновлюємо контакт
        );
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
