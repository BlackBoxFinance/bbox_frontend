import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'BBOX',
    lpAddresses: {
      97: '',
      56: '0x748C5D67d48E9F33a3B047dA3BE93EE1dF9761d9',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0x748C5D67d48E9F33a3B047dA3BE93EE1dF9761d9',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'BBOXV2-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xaBE61765ca1A893A10DBc138F10585067a4c0501',   // lp address bboxv2-bnb
    },
    tokenSymbol: 'BBOX',
    tokenAddresses: {
      97: '',
      56: '0x748C5D67d48E9F33a3B047dA3BE93EE1dF9761d9', // bbox address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
