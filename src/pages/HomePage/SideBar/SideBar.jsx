import React from 'react'
import { Box, Flex, Link, Avatar } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { InstagramLogo, InstagramMobileLogo, SearchLogo, NotificationsLogo, CreatePostLogo } from '../../../assets/contants'

import { AiFillHome } from "react-icons/ai"

const SideBar = () => {
    const sidebarItems = [
        {
            icon: <AiFillHome size={25} />,
            text: "Home",
            link: "/",
        },
        {
            icon: <SearchLogo />,
            text: "Search",
        },
        {
            icon: <NotificationsLogo />,
            text: "Notifications",
        },
        {
            icon: <CreatePostLogo />,
            text: "Create",
        },
        {
            icon: <Avatar size={"sm"} name='Burak Orkmez' src='/profilepic.png' />,
            text: "Profile",
            link: "/asaprogramer"
        },
    ];
  return <Box
        height={"100vh"}
        borderRight={"1px solid"}
        borderColor={"whiteAlpha.300"}
        py={8}
        position={"sticky"} 
        top={0}
        left={0}   
        px={{base:2,md:4}}
    >

    <Flex direction={"column"} gap={10} w="full" height={"full"} >
        <Link to="/" as={RouterLink} pl={2} display={{base:"none", md:"block"}} cursor="pointer" >
        <InstagramLogo />
        </Link>
        <Link to="/" as={RouterLink} pl={2} display={{base:"block", md:"none"}} w={10} cursor="pointer" 
        borderRadius={6}
        
        _hover={{
            bg:'whiteAlpha.200'
        }}
        
        >

        
        <InstagramMobileLogo />
        </Link>
    </Flex>  

    </Box>
  
}

export default SideBar