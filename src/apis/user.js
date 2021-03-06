import client from './client'

const getPage = (params) => {
  return client({
    url: '/user/page',
    method: 'get',
    params
  })
}

const create = (user) => {
  return client({
    url: '/user/create',
    method: 'post',
    data: user
  })
}

const remove = (names) => {
  return client({
    url: '/user/delete',
    method: 'post',
    data: names
  })
}

const update = (user) => {
  return client({
    url: '/user/update',
    method: 'post',
    data: user
  })
}

export default { getPage, create, remove, update }
