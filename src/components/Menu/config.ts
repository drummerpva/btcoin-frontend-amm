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
        label: 'About',
        href: 'https://btcoin.finance/btcoin.pdf',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x779c19621fb068c3bab5d574b8de5d803bc00b80',
      },
      {
        label: 'Binance Smart Chain Token',
        href: 'https://bscscan.com/token/0x779c19621fb068c3bab5d574b8de5d803bc00b80',
      },
      {
        label: 'Binance Smart Chain Address',
        href: 'https://bscscan.com/address/0x779c19621fb068c3bab5d574b8de5d803bc00b80',
      },
      {
        label: 'Binance Smart Chain Address',
        href: 'https://bscscan.com/address/0x86db2bba644ba76207f9e55e6cb4d95f8348ae77',
      },
      {
        label: 'Exchange Swap BUSD x BTCOINS',
        href: 'https://btcoin.finance/exchange/#/swap?outputCurrency=0x779c19621fb068c3bab5d574b8de5d803bc00b80&inputCurrency=BUSD',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items:[
      {
        label: 'GitHub',
        href: 'https://github.com/drummerpva',
      },
      {
        label: 'Astrotools.io',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x86db2bba644ba76207f9e55e6cb4d95f8348ae77',
      },
    ],
  },
  {
    label: 'Social Media',
    icon: 'IfoIcon',
    items:[
      {
        label: 'Telegram',
        href: 'https://t.me/joinchat/nm6SkGwKU8I2Njlh',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/btcoin14',
      },
      {
        label: 'Youtube',
        href: 'https://www.youtube.com/channel/UChznt9taplBh0cuhzA4I7AA',
      },
      {
        label: 'Medium',
        href: 'https://btcoin-finance.medium.com',
      },
    ],
  },{
    label: 'Whitepaper',
    icon: 'TicketIcon',
    href: 'https://btcoin.finance/btcoin.pdf',
  },{
    label: 'BTcoins Graphic',
    icon: 'InfoIcon',
    href: 'https://dex.guru/token/0x779c19621fb068c3bab5d574b8de5d803bc00b80-bsc',
  },{
    label: 'Audit',
    icon: 'AuditIcon',
    href: 'https://github.com/drummerpva/btcoin-audit',
  },
]

export default config
