import { MenuEntry } from '@saltswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://btcoin.finance/'
  },
  {
    label: 'Exchange',
    href: '/swap',
    icon: "ExchangeIcon"
  },
  {
    label: 'Liquidity',
    href: '/pool',
    icon: 'LiquidityIcon'
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://btcoin.finance/#/farms'
  },
  {
    label: 'Dens',
    icon: 'PoolIcon',
    href: 'https://btcoin.finance/#/pools'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'GitHub',
        href: 'https://github.com/drummerpva',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x71783d77d6019560770f7ce059a9d7294e1c4c70',
      },
      {
        label: 'Binance Smart Chain (BSC)',
        href: 'https://bscscan.com/token/0x71783d77d6019560770f7ce059a9d7294e1c4c70',
      },
      {
        label: 'Token Info BSC',
        href: 'https://bscscan.com/address/0xf328c01b7b895fe17e573dbaf739d9c25fcde210',
      },
      {
        label: 'Exchange Swap BUSD x BTCOIN',
        href: 'https://btcoin.finance/exchange/#/swap?outputCurrency=0x71783d77d6019560770f7ce059a9d7294e1c4c70&inputCurrency=BUSD',
      },
    ],
  },
]

export default config
