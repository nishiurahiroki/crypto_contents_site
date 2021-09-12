import { Network } from './Network'

export interface TokenBridgeApp {
  supportNetworks : Network[],
  url : string,
  name : string
}
