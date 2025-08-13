import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
// import { Flex, Menu, Skeleton, Stack, Text } from "@chakra-ui/react";

type NotificationMenuContentProps = {
    isLoading: boolean;
    notifications: Notification[];
    handleUpdateNotifications: (data: string[]) => Promise<void>;
}

const AVAILABLE_KEYS= [
    "DOCUMENT_PROCESS_SUCCESS_DESC",
    "DOCUMENT_PROCESS_ERROR_DESC",
    "AMBIENT_SHARING_DESC",
    "PUBLIC_AMBIENT_SHARING_DESC",
    "MANAGE_AMBIENT_LINK",
    "ACCESS_AMBIENT_LINK",
    "DOCUMENT_TITLE",
    "AMBIENT_SHARING",
    "AMBIENT_SAVED",
    "AMBIENT_SAVED_CONTENT",
    "AMBIENT_REVIEW",
    "AMBIENT_APPROVE_REJECTED",
    "AMBIENT_REVIEW_TITLE",
    "AMBIENT_INACTIVATED"
]

export const NotificationMenuContent = ({
    isLoading = false,
    notifications = [],
    handleUpdateNotifications
}: Partial<NotificationMenuContentProps>) => {
    // const router = useRouter();
    // const { t } = useTranslation();

    return null; // Por enquanto não retorna nada

    // TODO: Implementar o componente completo depois
    // if (isLoading) {
    //     return (
    //         <Stack flex="1" padding="20px">
    //             <Skeleton height="5" />
    //             <Skeleton height="5" width="584px" />
    //             <Skeleton height="5" width="584px" />
    //         </Stack>
    //     )
    // } else if (notifications.length === 0) {
    //      return (<Menu.Item value="empty">{t("noNotifications")}</Menu.Item>)
    // }
    
    // const mapped: string[] = [];
    // const handleClick = async(notificationId: string) => {
    //     await handleUpdateNotifications([notificationId]);
    // }
    // return notifications.map((item) => {
    //     const timeTag = getGrouppedTagByDate("", new Date(item.createdAt), t);
    //     let showTimeTag = mapped.indexOf(timeTag) === -1;
    //     if (showTimeTag) {
    //         mapped.push(timeTag);
    //     }
    //     
    //     let title = item.title;
    //     let content = item.content;
    //     let redirectTo = item.redirectTo;
    //     if (AVAILABLE_KEYS.includes(title.split("|")[0])) {
    //         title = t(item.title.split("|")[0], { name: item.title.split("|")[1]})
    //     }
    //     if (AVAILABLE_KEYS.includes(content.split("|")[0])) {
    //         content = t(content.split("|")[0], { name: content.split("|")[1]})
    //     }
    //     if (redirectTo && AVAILABLE_KEYS.includes(redirectTo.split("|")[0])) {
    //         redirectTo = t(redirectTo.split("|")[0], { url: redirectTo?.split("|")[1]})
    //     }
    //     return (
    //         <Menu.Item
    //             key={item.id}
    //             value={item.id}
    //             padding="0px"
    //             flexDir="column"
    //             gap="0px"
    //         >
    //             {showTimeTag && (
    //                 <Flex className="groupped-time-box">
    //                     <Text marginLeft="20px">{timeTag}</Text>
    //                 </Flex>
    //             )}
    //             <Flex
    //                 className={`custom-menu-item ${!item.readed ? "custom-menu-item-not-readed" : ""}`}
    //                 onClick={() => handleClick(item.id)}
    //             >
    //                 {item.tag && (
    //                     <StatusTag
    //                         status={item.tag}
    //                         showIcon={false}
    //                         padding="2px 12px 2px 12px"
    //                     />
    //                 )}
    //                 <Flex justifyContent="space-between" width="100%">
    //                     <Tooltip
    //                         content={title}
    //                         contentProps={{ css: { "--tooltip-bg": "#ffffff", color: "black" } }}
    //                     >
    //                         <Text fontSize="16px" className="custom-menu-item-title">
    //                             {title}
    //                         </Text>
    //                     </Tooltip>
    //                     <Text>{formatDateTime(item.createdAt)}</Text>
    //                 </Flex>
    //                 <Text fontSize="14px" color="#000000CC">{content}</Text>
    //                 {redirectTo && (
    //                     <Link
    //                         color="#000000F5"
    //                         onClick={() => {
    //                             if (redirectTo) {
    //                                 handleClick(item.id);
    //                                 router.push(redirectTo.split(":")[1]);
    //                             }
    //                         }}
    //                     >
    //                         {redirectTo.split(":")[0]}
    //                         <CustomIcon name="chevron-right"/>
    //                     </Link>
    //                 )}
    //             </Flex>
    //         </Menu.Item>
    //     )
    // })
}