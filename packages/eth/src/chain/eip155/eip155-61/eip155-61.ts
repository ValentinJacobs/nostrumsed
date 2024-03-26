/* eslint no-template-curly-in-string: 0 */
import type { Chain } from "../../shared"

export const eip155_61 = {
  "name": "Ethereum Classic",
  "shortName": "etc",
  "title": "Ethereum Classic Mainnet",
  "chain": "ETC",
  "icon": "ethereumclassic",
  "rpc": [
    "https://etc.rivet.link",
    "https://besu-at.etc-network.info",
    "https://besu-de.etc-network.info",
    "https://geth-at.etc-network.info",
    "https://geth-de.etc-network.info",
    "https://etc.etcdesktop.com",
    "https://rpc.etcinscribe.com",
    "https://etc.mytokenpocket.vip"
  ],
  "faucets": [],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETC",
    "decimals": 18
  },
  "infoURL": "https://ethereumclassic.org",
  "chainId": 61,
  "networkId": 1,
  "slip44": 61,
  "explorers": [
    {
      "name": "blockscout-ethereum-classic",
      "url": "https://etc.blockscout.com",
      "standard": "EIP3091"
    },
    {
      "name": "etcnetworkinfo-blockscout-ethereum-classic",
      "url": "https://explorer-blockscout.etc-network.info",
      "standard": "none"
    },
    {
      "name": "etcnetworkinfo-alethio-ethereum-classic",
      "url": "https://explorer-alethio.etc-network.info",
      "standard": "none"
    },
    {
      "name": "etcnetworkinfo-expedition-ethereum-classic",
      "url": "https://explorer-expedition.etc-network.info",
      "standard": "none"
    },
    {
      "name": "hebeblock-ethereum-classic",
      "url": "https://etcerscan.com",
      "standard": "EIP3091"
    },
    {
      "name": "oklink-ethereum-classic",
      "url": "https://www.oklink.com/etc",
      "standard": "EIP3091"
    },
    {
      "name": "tokenview-ethereum-classic",
      "url": "https://etc.tokenview.io",
      "standard": "EIP3091"
    }
  ],
  "status": "active"
} satisfies Chain