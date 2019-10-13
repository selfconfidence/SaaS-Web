import {createAPI} from '@/utils/request'
import { get } from 'https';
import {ROLE_HTTP} from '@/api/constant/port'

const api = ROLE_HTTP
export const list = data => createAPI(`${api}`, 'get', data)
export const simple = data => createAPI('/sys/role/simple', 'get', data)
export const add = data => createAPI(`${api}`, 'post', data)
export const update = data => createAPI(`${api}/${data.id}`, 'put', data)
export const remove = data => createAPI(`${api}/${data.id}`, 'delete', data)
export const detail = data => createAPI(`${api}/${data.id}`, 'get', data)
export const assignPrem = data => createAPI(`${api}/assignPrem`, 'put', data)
export const findAll = data => createAPI(`${api}/list`,'get',data)

