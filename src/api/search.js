import axios from 'axios'

export function getSearchDefaultWords () {
  const url = '/proxyApi/x/web-interface/search/default'

  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

export function getHotWords () {
  const url = 'https://s.search.bilibili.com/main/hotword'

  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}

export function getSuggest (query) {
  const url = '/proxyApi/suggest'
  const data = {
    'term': query
  }

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res)
  })
}

export function getResultList (keyword, page, pagesize) {
  const url = '/proxyApi/x/web-interface/search/all/v2'
  const data = {
    keyword,
    page,
    pagesize
  }

  return axios(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res)
  })
}

export function getResultTypeList (keyword, page, pagesize, type) {
  const url = '/proxyApi/x/web-interface/search/type'
  const data = {
    keyword,
    page,
    pagesize,
    order: type,
    search_type: 'video'
  }

  return axios(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res)
  })
}
