import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectedNetwork, networks, changeNetwork } from '../slices/networkSelectorSlice'


export function NetworkSelector() {
  const selected = useSelector(selectedNetwork)
  const networkList = useSelector(networks)

  const dispatch = useDispatch()

  return (
    <div className="column">
      <div className="control has-icons-left">
        <div className="select is-large">
          <select
            value={selected?.name}
            onChange={e => dispatch(changeNetwork(e.target.value))}
          >
            {
              networkList.map(network => (
                <option key={network.name} value={network.name}>{network.name}</option>
              ))
            }
          </select>
        </div>
        <span className="icon is-large is-left">
          <img
            src={`../../assets/images/network/${selected?.name}.png`}
            width={50}
            height={50}
          />
        </span>
      </div>
    </div>
  )
}
