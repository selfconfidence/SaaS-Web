import {createAPI, createFormAPI} from '@/utils/request'

export const save = data => createAPI(`/company/department/`, 'post', data)
export const findById = data => createAPI(`/company/department/${data.id}`, 'get', data)
export const update = data => createAPI(`/company/department/${data.id}`, 'put', data)
export const deleteById = data => createAPI(`/company/department/${data.id}`, 'delete', data)
export const findAll = data => createAPI(`/company/department/`, 'get', data)

export const saveOrUpdate =  data => (data.id == undefined?save(data):update(data))