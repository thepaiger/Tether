import api from './apiConfig'
import jwtDecode from 'jwt-decode'

export const signUp = async (credentials) => {
  try {
    const resp = await api.post('/sign-up', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signIn = async (credentials) => {
  try {
    const resp = await api.post('/sign-in', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    // throw error
    return error
  }
}

export const signOut = async () => {
  try {
    localStorage.removeItem("token")
    return true
  } catch (error) {
    throw error
  }
}

export const updateUser = async (credentials, data) => {
  try {
    const resp = await api.put(`/update/${credentials}`, data)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const deleteUser = async (credentials) => {
  try {
    const resp = await api.delete(`/users/${credentials}`)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    const res = await api.get('/verify')
    return res.data
  }
  return false
}

export const getUser = async id => {
  try {
    const resp = await api.get(`/users/${id}`)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

//new

export const addItem = async (userId, data) => {
  try {
    const resp = await api.post(`/users/add-item/${userId}`, data)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const updateQuantity = async (userId, data) => {
  try {
    const resp = await api.put(`/users/cart/${userId}`, data)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const removeItem = async (userId, idx) => {
  try {
    const resp = await api.put(`/users/remove-item/${userId}`, idx)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const clearCart = async (userId) => {
  try {
    const resp = await api.delete(`/users/clear-cart/${userId}`)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const getAllUsers = async () => {
  try {
    const resp = await api.get('/users/')
    return resp.data
  } catch (error) {
    throw error
  }
}