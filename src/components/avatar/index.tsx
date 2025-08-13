"use client";

import React from "react";
import { HStack, VStack, Text, Icon, Avatar } from "@chakra-ui/react";
import { UserMenu } from "@/components/user-menu";

type UserAvatarProps = {
	name: string;
	role?: string;
	imgUrl?: string;
	onClick?: () => void;
	bg?: string;
};

function getInitials(value: string) {
	return value
		.split(" ")
		.filter(Boolean)
		.slice(0, 2)
		.map((s) => s[0]?.toUpperCase())
		.join("");
}

export function UserAvatar({ name, role, imgUrl, onClick, bg }: UserAvatarProps) {
	const [open, setOpen] = React.useState(false);

	return (
		<HStack w="auto" pl="8" pr="0" py="5" gap="6" align="center" bg={bg} borderRadius="md">
			<Avatar.Root boxSize="10" pointerEvents="none">
				{imgUrl ? (
					<Avatar.Image src={imgUrl} alt={name} />
				) : (
					<Avatar.Fallback>{getInitials(name)}</Avatar.Fallback>
				)}
			</Avatar.Root>
			<VStack gap={0} align="start" minW={0} pointerEvents="none" flex="1">
				<Text color="white" fontWeight="semibold" lineHeight="short" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
					{name}
				</Text>
				{role ? (
					<Text color="white" opacity={0.85} fontSize="sm" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
						{role}
					</Text>
				) : null}
			</VStack>
			<UserMenu
				open={open}
				onOpenChange={(v) => setOpen(v)}
				onToggle={() => {
					if (onClick) onClick();
					setOpen((prev) => !prev);
				}}
			/>
		</HStack>
	);
}

