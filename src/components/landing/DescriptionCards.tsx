import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import DocusaurusLink from "@docusaurus/Link";

function DescriptionCards() {
  return (
    <Box as="section" bg="white" _dark={{ bg: "neutral.100" }}>
      <Container
        as={SimpleGrid}
        columns={{ base: 1, md: 4 }}
        py={10}
        spacing={8}
        maxW="container.xl"
      >
        <Flex
          flexDir="column"
          p={6}
          gridGap={6}
          boxShadow="md"
          borderRadius="lg"
          bg="white"
          _dark={{ bg: "base.dark" }}
        >
          <img
            height={40}
            width={220}
            src='https://cdn.octagon.mn/static/Octagon-Exchange.png'
            alt="Exchange Logo"
          />
          <Flex flexDir="column" gridGap={4} flexGrow={2}>
            <Heading size="m">Crypto Exchange</Heading>
            <Text fontSize="sm" lineHeight="26px" flexGrow={2}>
            Гадаад болон дотоодын крипто валют арилжих хамгийн хялбар дөхөм бирж
            </Text>
            <Link
              as={DocusaurusLink}
              size="md"
              variant="primary"
              href="docs/exchange/exchange-introduction/"
              alignSelf="center"
            >
              Дэлгэрэнгүй
            </Link>
          </Flex>
        </Flex>

        <Flex
          flexDir="column"
          p={6}
          gridGap={6}
          boxShadow="md"
          borderRadius="lg"
          bg="white"
          _dark={{ bg: "base.dark" }}
        >
          <img
            height={40}
            width={220}
            src='https://cdn.octagon.mn/static/Octagon-Marketplace.png'
            alt="Marketplace Logo"
          />
          <Flex flexDir="column" gridGap={4} flexGrow={2}>
            <Heading size="M">NFT Marketplace</Heading>
            <Text fontSize="sm" lineHeight="26px" flexGrow={2}>
            Үнэ цэнтэй дижитал уран бүтээл авах, зарах, бүтээх цогц платформ
            </Text>
            <Link
              as={DocusaurusLink}
              size="md"
              variant="primary"
              href="docs/nft/nft-intro/"
              alignSelf="center"
            >
              Дэлгэрэнгүй
            </Link>
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          p={6}
          gridGap={6}
          boxShadow="md"
          borderRadius="lg"
          bg="white"
          _dark={{ bg: "base.dark" }}
        >
          <img
            height={40}
            width={220}
            src='https://cdn.octagon.mn/static/Octagon-Wallet.png'
            alt="Wallet logo"
          />
          <Flex flexDir="column" gridGap={4} flexGrow={2}>
            <Heading size="m">Octagon Wallet</Heading>
            <Text fontSize="sm" lineHeight="26px" flexGrow={2}>
              Криптог өдөр тутмын хэрэглээнд нэвтрүүлэх төлбөр тооцооны хэрэгсэл
            </Text>
            <Link
              as={DocusaurusLink}
              size="md"
              variant="secondary"
              href="/"
              alignSelf="center"
            >
              Тун удахгүй
            </Link>
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          p={6}
          gridGap={6}
          boxShadow="md"
          borderRadius="lg"
          bg="white"
          _dark={{ bg: "base.dark" }}
        >
          <img
            height={40}
            width={220}
            src='https://cdn.octagon.mn/static/Octagon-Wallet.png'
            alt="Walk and Earn Logo"
          />
          <Flex flexDir="column" gridGap={4} flexGrow={2}>
            <Heading size="m">Walk and Earn</Heading>
            <Text fontSize="sm" lineHeight="26px" flexGrow={2}>
              Эрүүл мэнддээ хөрөнгө оруулж алхахаас гадна төрөл бүрийн урамшууллын эзэн болох аппликейшн
            </Text>
            <Link
              as={DocusaurusLink}
              size="md"
              variant="secondary"
              href="/"
              alignSelf="center"
            >
              Тун удахгүй
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default DescriptionCards;
