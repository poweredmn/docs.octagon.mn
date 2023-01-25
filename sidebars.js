/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  general: [
    {
      type: "category",
      label: "Шинэ хэрэглэгчид",
      link: { type: "doc", id: "getting-started" },
      items: ["create-user", "verify-user", "verify-dan"],
    },
    {
      type: "category",
      label: "Данс цэнэглэх",
      link: { type: "doc", id: "deposit" },
      items: [
        "deposit",
        "deposit-banks",
        "deposit-crypto",
      ],
    },
  ],
  exchange: [
    {
      type: "category",
      link: { type: "doc", id: "exchange/exchange-introduction" },
      label: "Крипто Бирж",
      items: [
        "exchange/exchange-introduction",
        "exchange/bydep",
        "exchange/admc-hodl",
      ],
    },
    {
      type: "category",
      link: { type: "doc", id: "exchange/spot-trading" },
      label: "Spot Арилжаа",
      items: [
        "exchange/spot-trading",
        "exchange/spot-pairs",
        "exchange/user-wallets",
        "exchange/how-to-buy",
        "exchange/how-to-sell",
      ],
    },
    {
      type: "category",
      link: { type: "doc", id: "exchange/futures-trading"},
      label: "Futures арилжаа",
      items: [
        "exchange/futures-trading",
        "exchange/futures-take-profit",
        "exchange/futures-stop-loss",
      ],
    },
  ],
  nft: [
    {
      type: "category",
      label: "NFT Marketplace ажиллагаа",
      link: { type: "doc", id: "nft/nft-intro" },
      items: [
        "nft/nft-intro", 
        "nft/nft-buy", 
        "nft/nft-sell",
      ],
    },
    {
      type: "category",
      label: "NFT Marketplace нэмэлт боломжууд",
      link: { type: "doc", id: "nft/nft-features" },
      items: [
        "nft/nft-features",
        "nft/nft-games",
      ],
    },
  ],
  collection: [
    {
      type: "category",
      label: "NFT Цуглуулгууд",
      link: { type: "doc", id: "collections/nft-collections" },
      items: [
        "collections/nft-collections",
        "collections/arbc",
        "collections/uka-nft",
        "collections/num-nft",
        "collections/league-nft",
        ],
    },
  ],
  dao: [
    {
      type: "category",
      label: "What is DAO",
      link: { type: "generated-index" },
      items: [
        "dao/dao-intro",
        "dao/create-dao",
        "dao/how-to-vote",
      ],
    },
  ],
};

module.exports = sidebars;
