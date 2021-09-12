import { Network } from '../types/Network'

export const bsc : Network = {
  name : 'bsc'
}
export const polygon : Network = {
  name : 'polygon'
}
export const ethereum : Network = {
  name : 'ethereum'
}

const networkList : Network[] = [
  bsc,
  polygon,
  ethereum,
]

export default class NetworkRepository {
  static fetchAll() : Network[] {
    return networkList
  }
}
