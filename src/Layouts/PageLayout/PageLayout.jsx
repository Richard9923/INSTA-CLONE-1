import { Box, Flex } from '@chakra-ui/react'
import SideBar from '../../pages/HomePage/SideBar/SideBar'
import { useLocation } from "react-router-dom"

const PageLayout = ({ children }) => {
    const {pathname} = useLocation()
    return (
        <Flex>
            {/* barra lateral na esquerda */}
            {pathname !== '/auth' ? (
                <Box w={{base:"70px", md:"240px"}}>
                <SideBar />

                </Box>
            ) : null}
            {/* conteudo da página na direita */}
        <Box flex={1} w={{base: "calc(100% - 70px",md:"calc(100% - 240px"}}>
            {children}
        </Box>
        </Flex>
    )
}

export default PageLayout