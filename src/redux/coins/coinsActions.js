import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const transferCoins = createAsyncThunk(
    'coins/transferCoins',
    async ({ recieverId, coins }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`http://localhost:4000/api/v1/transfer/transfercoins/${recieverId}`, {
                coins
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authtoken')}`
                }
            })

            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
            else {
                return rejectWithValue(response.data.message)
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
)

//get all transfer coins history

export const getTransferCoinsHistory = createAsyncThunk(
    'coins/getTransferCoinsHistory',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/transfer/transfercoins/getAllTransferCoins`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authtoken')}`
                }

            })

            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
            else {
                return rejectWithValue(response.data.message)
            }


        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }

    }
)

//get the user coins info
export const getTransfercoinsUser = createAsyncThunk(
    'coins/getTransfercoinsUser',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/transfer/transfercoins/getTransferCoinsByUser/${userId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authtoken')}`
                }

            })

            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
            else {
                return rejectWithValue(response.data.message)
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
)

//lottery
export const lottery = createAsyncThunk(
    'coins/lottery',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post(`http://localhost:4000/api/v1/transfer/transfercoins/lottery`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authtoken')}`
                }
            })
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
            else {
                return rejectWithValue(response.data.message)
            }

        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
)



