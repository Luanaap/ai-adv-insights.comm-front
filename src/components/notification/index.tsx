"use client";

import { Button, Flex, Link, Stack, Menu, Portal, Text, Skeleton, Box } from "@chakra-ui/react"
// import "./notification.css";

import { useTranslation } from "react-i18next";
import { CustomIcon } from "@/infra/icon";
import { NotificationMenuContent } from "./notificaionMenuContent";
import { useState } from "react";

type NotificationMenuProps = {
    notifications: Notification[];
    setNotifications: (data: Notification[]) => void;
}

export const NotificationMenu = () => {
    // const { user } = useContext(UserContext);
    const { t } = useTranslation();
    // const { authToken } = useContext(AuthTokenContext);
    const [isLoading, setIsLoading] = useState(false);

    // const [ updateNotifications ] = useUpdateNotificationsMutation();

    // const handleUpdateNotifications = async(ids: string[]) => {
    //     await updateNotifications({
    //         userId: user.id,
    //         ids: ids,
    //         accessToken: authToken
    //     })
    //     .unwrap()
    //     .then((data) => {
    //         setNotifications(data);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // }

    return (
        <Menu.Root positioning={{ placement: "bottom" }} closeOnSelect={false}>
            <Menu.Trigger asChild>
                <Button variant="plain" width="25px">
                    <CustomIcon name="notification" customColor="#FFFFFFF5" iconSize={20}/>
                    {/* {notifications.filter((item) => !item.readed).length > 0 && (
                        <Box
                            position="absolute"
                            left="25px"
                            bottom="25px"
                            backgroundColor="#ff037b"
                            width="10px"
                            height="10px"
                            borderRadius="50%"
                        />
                    )} */}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                <Menu.Content padding="0px">
                    <Text margin="10px 0px 10px 20px" fontSize="18px">{t("notifications")}</Text>
                    <Flex overflowY="auto" flexDir="column" maxH="500px">
                        <NotificationMenuContent
                            // notifications={notifications}
                            // isLoading={isLoading}
                            // handleUpdateNotifications={handleUpdateNotifications}
                        />
                    </Flex>
                    {/* {notifications.length > 0 && (
                        <Link
                            marginLeft="20px"
                            variant="underline"
                            h={"42px"}
                            fontSize="14px"
                            color="#000000F5"
                            onClick={
                                () => handleUpdateNotifications(notifications.map((item) => item.id))
                            }
                        >
                            {t("markAllAsRead")}
                        </Link>
                    )} */}
                </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}