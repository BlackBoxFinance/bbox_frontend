import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'BBOXV2',
    tokenAddress: '0x748C5D67d48E9F33a3B047dA3BE93EE1dF9761d9',   // bbox address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x748C5D67d48E9F33a3B047dA3BE93EE1dF9761d9',  // bbox address
    contractAddress: {
      97: '',
      56: '0x058F3F7857D47326021451b6b67c3E92838a6EdC',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
]

export default pools
