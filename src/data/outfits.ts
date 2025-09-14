import { Outfits } from "../types/outfits";

export const OUTFITS: Outfits[] = [
  {
    id: "1",
    title: "Men formals",
    items: [
      { type: "Shirt", image: "https://m.media-amazon.com/images/I/6149mVtxPvL._UY1100_.jpg" },
      { type: "Trousers", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR15PxgRVE4BD_MOm_4iNsL_Uirg1vMleccnf4m9YEsNMZkSW6bhYWMkkjewCFRxRynhdDwOwOXrhHbta3Wuv9toZqTNqmXxARfjeLWnXVdx1OEip7JMs0T31XB43mk0rW29QzEKtou&usqp=CAc" },
      { type: "Shoes", image: "https://www.zoomshoes.in/cdn/shop/files/32_2.jpg?v=1688556586" }
    ],
    tags: ["Work", "Office"],
    color: "#F3E8E2",
    style: "Outfit"
  },
  {
    id: "2",
    title: "Casual",
    items: [
      { type: "T-Shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww" },
      { type: "Jeans", image: "https://www.shutterstock.com/image-photo/fashion-trendy-womens-jeans-isolated-600nw-2466839305.jpg" },
      { type: "Sneakers", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSLySrAGsK6UPUmk1Im9cjUOYp0GwwgBFFCVmx5EPVj_Xl9yY3T-rAzfpwWANGB56DMZ1lsK85QSpNIzV2kB__XgY2DlH16lRYbgxfcV-7tlBmeV1_xhYZZphW9MtbTz8ZL67m4hA&usqp=CAc" }
    ],
    tags: ["Leisure", "Casual"],
    color: "#E2F3F1",
    style: "Outfit"
  },
  {
    id: "3",
    title: "Women formals",
    items: [
      { type: "Blouse", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKkYA2iwBSfs0SQgRqln_dIgPWwEIi-Sraw&s" },
      { type: "Skirt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEfqWGqWT6L6g-fC6J2omHXtvIA9MqEeBuw&s" },
      { type: "Heels", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQO6Pxm86gGfaSKHraGDVUc_FaoCZ1VJd9VXP9U4NZTaivoC5zE3uvz18VlOazs8xmTllghVRyVP9HpTATj4DedXO7HrirQS7ZI49oOD-rB8L0jj47c6onaaw" }
    ],
    tags: ["Women", "Work"],
    color: "#F3E2F3",
    style: "Outfit"
  },
  {
    id: "4",
    title: "Summer",
    items: [
      { type: "Dress", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5PYfWDdYorStNuPrkxYYjai6cYgiV-FSOfYfv_QoJ764_E5spnXw5DvD_-Nt1AHUsMuGbrkzIHjzfe8JctuQBYX52afBSyk24qLSz6DiTcRYD7A_n4IPcO5yNRBCw7BxSF_Qj0jFy&usqp=CAc" },
      { type: "Sandals", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yLZthVdSyrG0YA17W-fCJdaQqfWoeLMLTQ&s" },
      { type: "Bag", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSAR0PttHusZO7LlFAC3NPsrvECxxCox4zg&s" }
    ],
    tags: ["Women", "Summer"],
    color: "#FFF5E1",
    style: "Outfit"
  },
  {
    id: "5",
    title: "Streetwear",
    items: [
      { type: "Hoodie", image: "https://image.hm.com/assets/hm/b7/45/b7452dbbea33292cf786726f41fc7f516d359518.jpg?imwidth=1260" },
      { type: "Pleated Pants", image: "https://littleboxindia.com/cdn/shop/files/Pleated_High_Waisted_Wide_Leg_Black_Trousers.jpg?v=1742208851" },
      { type: "Sneakers", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/706e54b6-9360-4760-817d-86bba495f2e5/NIKE+COURT+VISION+LO+NN.png" }
    ],
    tags: ["Urban", "Trendy"],
    color: "#E8E8F3",
    style: "Outfit"
  },
  {
    id: "6",
    title: "Winter Cozy",
    items: [
      { type: "Knit Top", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTENwb2_LJNk9w_-MNJ340FMx_6yFR49-X4PNWIdzDYA0FyAjQIlw_usEwOjmik6hsaZHDaMhbtnG_82RtPgcR-u6UZzk1veLuesFoCICm6cCk5NTN7WHWuZowM" },
      { type: "Puffer Vest", image: "https://static.zara.net/assets/public/f8e1/51a2/622a475282dd/b18ba428df04/04302205800-e1/04302205800-e1.jpg?ts=1754987536915&w=1024" },
      { type: "Boots", image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-AI802967842001_lifestyle?$rl_4x5_pdp$" }
    ],
    tags: ["Winter", "Casual"],
    color: "#DCEAF5",
    style: "Outfit"
  },
  {
    id: "7",
    title: "Evening Party",
    items: [
      { type: "Maxi Dress", image: "https://image.hm.com/assets/hm/ec/9e/ec9ecce91eb0d44c346be33794b479719dca76c1.jpg?imwidth=1260" },
      { type: "Heels", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSolSR5P0CPAYQc0wXjiQueEU8BfU6k5XaU6Fdz8sDzakveR-IgcSnp0I5sG2ipzj4icITRbSAMPTv0El8xqwksF0gFjsEtYVuasTpCM9zpXlIgH8bb7VfXQD0" },
      { type: "Clutch Bag", image: "https://m.media-amazon.com/images/I/81QX9Dat3JL._SY695_.jpg" }
    ],
    tags: ["Party", "Elegant"],
    color: "#F9E2E7",
    style: "Outfit"
  },
  {
    id: "8",
    title: "Beach Day",
    items: [
      { type: "Linen Shirt", image: "https://vellure.in/cdn/shop/files/111Untitled-1.jpg?v=1745577051&width=1000" },
      { type: "Denim Shorts", image: "https://www.crimsouneclub.com/cdn/shop/products/1_89011807-ce58-426c-b079-e1968cf9bcd6.jpg?v=1754637367" },
      { type: "Sandals", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yLZthVdSyrG0YA17W-fCJdaQqfWoeLMLTQ&s" }
    ],
    tags: ["Beach", "Relax"],
    color: "#E1FFF5",
    style: "Outfit"
  },
  {
    id: "9",
    title: "Smart Casual",
    items: [
      { type: "Button-Up Shirt", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTrJkPlfQeue6Vz7XZ1rafLH2C4tbdq17itRnpPH3QeCuC_i8xBvBnXR287Kg6oDAT7x9b4MTafwCi7mnLBZskLeY0--0cPXucWQt38OIHNfhi17P8aRpZqaw" },
      { type: "Chinos", image: "https://static.zara.net/assets/public/673d/86d7/d6a548359c83/85587dc3e76d/00706418707-e1/00706418707-e1.jpg?ts=1755522249950&w=1024" },
      { type: "Loafers", image: "https://cdn19.nnnow.com/web-images/medium/styles/DP76DGRWNMV/1745214001714/1.jpg" }
    ],
    tags: ["Semi-Formal", "Work"],
    color: "#F0EFEA",
    style: "Outfit"
  },
  {
    id: "10",
    title: "Date Night",
    items: [
      { type: "Knit Top", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTENwb2_LJNk9w_-MNJ340FMx_6yFR49-X4PNWIdzDYA0FyAjQIlw_usEwOjmik6hsaZHDaMhbtnG_82RtPgcR-u6UZzk1veLuesFoCICm6cCk5NTN7WHWuZowM" },
      { type: "Mini Skirt", image: "https://image.hm.com/assets/hm/82/30/823008fce2bd58e54b2407c14d4652010be99aaa.jpg?imwidth=1260" },
      { type: "Heels", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQO6Pxm86gGfaSKHraGDVUc_FaoCZ1VJd9VXP9U4NZTaivoC5zE3uvz18VlOazs8xmTllghVRyVP9HpTATj4DedXO7HrirQS7ZI49oOD-rB8L0jj47c6onaaw" }
    ],
    tags: ["Romantic", "Evening"],
    color: "#FFE2EC",
    style: "Outfit"
  }
];
