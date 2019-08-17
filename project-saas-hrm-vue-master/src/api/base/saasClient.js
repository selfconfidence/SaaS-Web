import {createAPI, createFormAPI} from '@/utils/request'

export const list = data => createAPI(`/company/${data.page}/${data.size}`, 'post', data)
export const findById = data => createAPI(`/company/${data.id}`, 'get', data)