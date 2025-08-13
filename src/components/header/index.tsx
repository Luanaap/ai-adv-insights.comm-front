import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { UserAvatar } from "../avatar";
import LogoIcon from "../../../public/icons/logo.svg";
import LanguageSelector from "@/lib/language-selector/LanguageSelector";
import { NotificationMenu } from "../notification";
import { CustomIcon } from "@/infra/icon";


export function Header() {
  return (
    <Flex 
      width="100vw"
      height="72px"
      justifyContent="space-between"
      alignItems="center"
      px={10}
      background="primary.200"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
      >
        <LogoIcon width="82px" height="32px" />
        <Text textStyle="base" ml={4} color="white" opacity="80%">
          Speech Analytics
        </Text>
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="plain" width="25px">
          <CustomIcon name="tools-search" customColor="#FFFFFFF5" iconSize={20} />
        </Button>

        <NotificationMenu />

        <Button variant="plain" width="25px">
          <CustomIcon name="question" customColor="#FFFFFFF5" iconSize={20} />
        </Button>
        
        <Box
          borderRight={1}
          borderStyle="solid"
          borderColor="primary.600"
          height={10}
          width={1}
          mx={1}
        />
        
        <LanguageSelector />
        
        <Box
          borderRight={1}
          borderStyle="solid"
          borderColor="primary.600"
          height={10}
          width={1}
          mx={1}
        />
        
        <UserAvatar name="Luana" role="Monitoramento" />
      </Flex>
    </Flex>
  );
}
