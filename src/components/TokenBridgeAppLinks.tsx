import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { linksSelector } from '../slices/tokenBridgeAppLinksSlice'

import { Network } from '../types/Network'
import NetworkRepository from '../repositories/NetworkRepository'


export function TokenBridgeAppLinks() {
  const [isActiveNetworkSelect, setIsActiveNetworkSelect] = useState<boolean>(false)
  const [networks, setNetworks] = useState<Network[]>([])
  const [selectedNetworks, setSelectedNetworks] = useState<string[]>([])

  const links = useSelector(linksSelector)

  const onClickNetworkSelect = () => {
    setIsActiveNetworkSelect(isActiveNetworkSelect => !isActiveNetworkSelect)
  }

  const onSelectNetwork = (e : any) => {
    if(e.target.checked) {
      setSelectedNetworks(selectedNetworks => [e.target?.value, ...selectedNetworks])
    } else {
      setSelectedNetworks(selectedNetworks => [...selectedNetworks.filter(network => network !== e.target.value)])
    }
  }

  useEffect(() => {
    const networks : Network[] = NetworkRepository.fetchAll()
    setNetworks(networks)

    // Bulumaのdropdownの開閉処理 react外のDOM操作なのであんまりやりたくない
    const toggleDropDown = (e : MouseEvent) => {
      const target = e.target as HTMLElement
      if(target.dataset?.networkDropDown) {
        setIsActiveNetworkSelect(isActiveNetworkSelect => !isActiveNetworkSelect)
      } else {
        const isClickCheckBox = target.dataset.networkDropDownCheckbox
        if(isClickCheckBox) return

        setIsActiveNetworkSelect(false)
      }
    }
    document.addEventListener('click', toggleDropDown)
    return () => document.removeEventListener('click', toggleDropDown)
  }, [])

  return (
    <div className="column">
      <div className="columns">
        <div className="column">
          <strong>Bridge token service links</strong>
        </div>

        <div className="column is-three-fifths">　
          <div className={`dropdown ${isActiveNetworkSelect ? 'is-active' : ''}`} data-network-drop-down>
            <div className="dropdown-trigger">
              <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" data-network-drop-down>
                <span data-network-drop-down>Select network</span>
                <span className="icon is-small" data-network-drop-down>
                  <i className="fas fa-angle-down" aria-hidden="true" data-network-drop-down></i>
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                {
                  networks.map(network => (
                    <label key={network.name} className="checkbox dropdown-item" data-network-drop-down-checkbox>
                      <input type="checkbox" data-network-drop-down-checkbox value={network.name} onChange={onSelectNetwork}/>
                      <span className="icon is-small">
                        <img src={`../../assets/images/network/${network.name}.png`} alt="Image"/>
                      </span>
                      {network.name}
                    </label>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        links
          .filter(link => {
            if(selectedNetworks.length === 0) return true // ネットワークが選択されていない場合はフィルタリングを行わない
            return selectedNetworks.every(network => link.supportNetworks.some(sNetwork => sNetwork.name === network))
          })
          .map(link =>
          (<div key={link.url} className="columns">
            <div className="column">
              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={`https://www.google.com/s2/favicons?domain=${link.url}`} alt="Image"/>
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong className="is-size-4">
                          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                        </strong>
                        <br/>
                        <small>swap fee　</small>
                        <small>
                          <strong>{link.swapFee} %</strong>
                        </small>
                      </p>
                      <nav className="level is-mobile">
                        <div className="level-left">

                          {
                            link.supportNetworks.map(network => (
                              <span key={network.name} className="level-item">
                                <span className="icon is-medium">
                                  <img src={`../../assets/images/network/${network.name}.png`} alt="Image"/>
                                </span>
                              </span>
                            ))
                          }

                        </div>
                      </nav>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
