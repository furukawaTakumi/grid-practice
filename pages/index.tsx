import type { NextPage } from 'next'
import {
  Box,
  Grid,
  GridItem
} from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Box bg='black' color='white' h='60px'>
        header
      </Box>
      <Grid mx={[0, '20px', '70px']} w='100% - 140px' h='100vh' templateColumns={['repeat(4, 1fr)', 'repeat(6, 1fr)', 'repeat(12, 1fr)']} gap='20px' bg='blue.200'>
        <GridItem bg='pink.200' display={['none', 'block', 'block']} colSpan={[0, 2, 2]} >
          メニュー
        </GridItem>
        <GridItem bg='pink.200' colSpan={[4, 4, 7]} >
          メインコンテンツ
        </GridItem>
        <GridItem bg='pink.200' display={['none', 'none', 'block']} colSpan={[0, 0, 3]} >
          トレンドボックス
        </GridItem>
      </Grid>
      <Box h='60px' bg='black'>
        Hooter
      </Box>
    </>
  )
}

export default Home
