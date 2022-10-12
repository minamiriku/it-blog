import NextLink, { LinkProps as NextLinkProps } from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
} & NextLinkProps &
  ChakraLinkProps;
export const Link = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  legacyBehavior,
  onMouseEnter,
  onTouchStart,
  onClick,
  children,
  ...props
}: Props) => {
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      prefetch={prefetch}
      locale={locale}
      legacyBehavior={legacyBehavior}
      onMouseEnter={onMouseEnter}
      onTouchStart={onTouchStart}
      onClick={onClick}
      passHref
    >
      <ChakraLink _hover={{ textDecoration: "none", opacity: 0.7 }} {...props}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};
