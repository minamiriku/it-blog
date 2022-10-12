import { HStack, Icon as ChakraIcon, IconProps, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  size?: string | number;
} & IconProps;

export const Icon = ({ icon, size = 4, ...props }: Props) => {
  return <ChakraIcon as={icon} w={size} h={size} {...props} />;
};

export const IconText = ({
  icon,
  children,
  ...props
}: Props & { children: React.ReactNode }) => {
  return (
    <HStack spacing={1}>
      <Icon icon={icon} {...props} />
      <Text>{children}</Text>
    </HStack>
  );
};
