/* eslint no-template-curly-in-string: 0 */
import type { Chain } from "../../shared"

export const eip155_11297108099 = {
  "name": "Palm Testnet",
  "shortName": "tpalm",
  "chain": "Palm",
  "icon": "palm",
  "rpc": [
    "https://palm-testnet.infura.io/v3/${INFURA_API_KEY}"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "PALM",
    "symbol": "PALM",
    "decimals": 18
  },
  "infoURL": "https://palm.io",
  "chainId": 11297108099,
  "networkId": 11297108099,
  "slip44": 1,
  "explorers": [
    {
      "name": "Palm Testnet Explorer",
      "url": "https://explorer.palm-uat.xyz",
      "standard": "EIP3091"
    }
  ]
} satisfies Chain