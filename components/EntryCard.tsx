import React from "react";
import { Link, LinkText } from "@/components/ui/link";
import { useRouter } from "expo-router";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Pressable } from "react-native";
import { IconSymbol } from "./ui/IconSymbol";
import { StarIcon, Icon } from "../components/ui/icon/index";
import { Text } from "@/components/ui/text";
import { Entry, useEntryContext } from "./ui/entry-context-provider/index";

const EntryCard: React.FC<Entry> = ({
  id,
  startDate,
  startTime,
  endDate,
  endTime,
  scaleRating,
  pinned,
}) => {
  const { pinEntry } = useEntryContext();
  const router = useRouter();

  const handleLinkPress = () => {
    router.push({
      pathname: "/(tabs)/(home)/[title]",
      params: { title: id },
    });
  };

  return (
    <>
      <Card variant="filled" className="mt-4">
        <Heading>{id}</Heading>
        <Pressable onPress={() => pinEntry(id)}>
          <Icon
            as={StarIcon}
            size="xl"
            className={`${
              pinned ? "text-blue-500" : "text-gray-500"
            } abosulte right-4 top-4`}
          />
        </Pressable>
        <Text className="text-md my-1 dark:text-white">{startDate}</Text>
        <Text className="text-md my-1 dark:text-white">
          Pain rating: {scaleRating}
        </Text>
        <Link
          onPress={handleLinkPress}
          className="flex-row items-center justify-center"
        >
          <LinkText className="text-blue-500 text-lg no-underline">
            See Details
          </LinkText>
        </Link>
      </Card>
    </>
  );
};

export default EntryCard;
