import Header from '../Header'
import { useEffect } from 'react'
import { Flex, Box, Grid, GridItem } from '@chakra-ui/react'



function Solidarite() {




    useEffect(()=>{
        document.getElementById('root').style.backgroundColor = "#FCEFB4"
    })






    return ( 
        <>
        
            <Header></Header>
            <Grid templateColumns='1fr 1fr 1fr'>
                <Flex>1 </Flex>
                <Flex></Flex>
                <Flex></Flex>
            </Grid>
        </>


     );
}

export default Solidarite;