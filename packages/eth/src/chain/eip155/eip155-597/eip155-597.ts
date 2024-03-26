/* eslint no-template-curly-in-string: 0 */
import type { Chain } from "../../shared"

export const eip155_597 = {
  "name": "Acala Network Testnet",
  "shortName": "taca",
  "chain": "ACA",
  "rpc": [
    "https://eth-rpc-acala-testnet.aca-staging.network",
    "wss://eth-rpc-acala-testnet.aca-staging.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Acala Token",
    "symbol": "ACA",
    "decimals": 18
  },
  "infoURL": "https://acala.network",
  "chainId": 597,
  "networkId": 597,
  "slip44": 1,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://blockscout.acala-dev.aca-dev.network",
      "standard": "EIP3091"
    }
  ]
} satisfies Chain