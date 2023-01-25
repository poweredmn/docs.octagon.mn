import React from "react";
import {
  Box,
  Flex,
  Heading,
  Grid,
  Container,
  VStack,
  Link,
  GridItem,
} from "@chakra-ui/react";


const FOOTER_HUB = [
  {
    name: "Octagon ID",
    path: "https://id.octagon.mn",
  },
  {
    name: "NFT Marketplace",
    path: "https://nft.octagon.mn",
  },
  {
    name: "Crypto Exchange",
    path: "https://octagon.mn",
  },
  {
    name: "Crypto Wallet",
    path: "https://octagon.mn",
  },
  {
    name: "Walk and Earn",
    path: "https://octagon.mn",
  },
];

const FOOTER_SOCIALS = [
  {
    path: "https://www.facebook.com/www.octagon.mn",
    name: "Facebook Page",
  },
  {
    path: "https://github.com/poweredmn",
    name: "Github Repo",
  },
  {
    path: "https://twitter.com/",
    name: "Twitter Handle",
  },
  {
    path: "https://www.youtube.com/@Octagonexchange",
    name: "Youtube Channel",
  },
];
const FOOTER_LEGAL = [
  {
    name: "Мөнгө угаалтын эсрэг",
    path: "https://",
  },
  {
    name: "Тусгай зөвшөөрөл",
    path: "https://",
  },
  {
    name: "Нууцлал",
    path: "https://",
  },
  {
    name: "Терроризмыг санхүүжүүлэхийн эсрэг",
    path: "https://",
  },

];

const FOOTER_SUPPORT= [
  {
    name: "Түгээмэл асуулт хариулт",
    path: "https://docs.octagon.mn/",
  },
  {
    name: "Чатаар холбогдох",
    path: "https://www.facebook.com/www.octagon.mn/",
  },
  {
    name: "И-мэйл илгээх",
    path: "mail:info@octagon.mn",
  },
];
const FOOTER_MENU = [
  { label: "Экосистем", links: FOOTER_HUB },
  { label: "Сошиал холбоос", links: FOOTER_SOCIALS },
  { label: "Хууль эрх зүй", links: FOOTER_LEGAL },
  { label: "Тусламжийн хэсэг", links: FOOTER_SUPPORT},
];


type VerticalMenuProps = {
  items: {
    name: string;
    path: string;
  }[];
};

function VerticalMenu({ items }: VerticalMenuProps) {
  return (
    <VStack
      as="ul"
      p={0}
      pt={2}
      spacing={2}
      listStyleType="none"
      alignItems="flex-start"
    >
      {items.map((item, index) => (
        <li key={item.name + index}>
          <Link
            isExternal
            href={item.path}
            color="base.onyx"
            fontSize="xs"
            lineHeight="20px"
            whiteSpace="nowrap"
            _dark={{
              color: "neutral.0",
            }}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </VStack>
  );
}

export default function Footer() {
  return (
    <Box
      as="footer"
      py={8}
      bg="neutral.25"
      _dark={{
        bg: "base.dark",
      }}
    >
      <Container as={VStack} maxW="container.xl" spacing={{ base: 12, md: 8 }}>
         <Grid
          w="full"
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
          gap={12}
        >
          <GridItem>
            <img
            height={120}
            width={120}
            style={{
              objectFit:"cover"
            }}
            src='https://cdn.octagon.mn/static/ISO.png'
            alt="Octagon Logo"
          />
          </GridItem>
          {FOOTER_MENU.map(({ label, links }) => {
            return (
              <GridItem key={label}>
                <Heading
                  size="xs"
                  as="h6"
                  color="base.dark"
                  _dark={{ color: "neutral.0" }}
                >
                  {label}
                </Heading>
                <VerticalMenu items={links} />
              </GridItem>
            );
          })}
        </Grid>

        <Flex
          w="full"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems="center"
          gridGap={10}
          >
        </Flex>
      </Container>
    </Box>
  );
}
