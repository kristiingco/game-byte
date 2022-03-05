const SHOP_DATA = [
    {
        id: "fc0f83d69ac54145b8d97c757707ab92",
        title: "Games",
        routeName: "games",
        items: [
            {
                id: "d78cf2d221f8435fb3b961c30caa5497",
                name: "Legend of Zelda: Breath of the Wild",
                imageUrl:
                    "https://target.scene7.com/is/image/Target/GUEST_e97f4ca6-9e20-4e34-ae64-1ac42d0d394c?wid=488&hei=488&fmt=pjpeg",
                price: 59.99,
            },
            {
                id: "80efc8272daf4e388972eb3c4bc9f829",
                name: "Persona 5 Royal",
                imageUrl:
                    "https://jvgamesperu.pe/wp-content/uploads/2021/01/P4-PERSONA-5-Royal.png",
                price: 79.99,
            },
            {
                id: "b60e064212ea4d35991977264128c05d",
                name: "Fire Emblem: Three Houses",
                imageUrl:
                    "https://target.scene7.com/is/image/Target/GUEST_0c91e7b3-d7be-417c-9838-af586d5c83c6?wid=488&hei=488&fmt=pjpeg",
                price: 59.99,
            },
            {
                id: "11344cfcd9804ec5b9ea39ce645311ce",
                name: "Kingdom Hearts HD 1.5 ReMIX",
                imageUrl:
                    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8897/8897501_sa.jpg",
                price: 39.99,
            },
            {
                id: "7a3097f6958c444bb5abd0ff051a73c1",
                name: "Pokemon Legends Arceus",
                imageUrl:
                    "https://media.gamestop.com/i/gamestop/11120694/Pokemon-Legends-Arceus---Nintendo-Switch?$pdp$",
                price: 59.99,
            },
            {
                id: "e2080d02a852445cb86bca098c718e50",
                name: "The Great Ace Attorney Chronicles",
                imageUrl:
                    "https://nintendoeverything.com/wp-content/uploads/the-great-ace-attorney-chronicles-boxart.jpg",
                price: 39.99,
            },
            {
                id: "ce84dd8901cc49e780eca7d45c22df76",
                name: "Hades",
                imageUrl:
                    "https://d.ecimg.tw/items/DGBJBHA900BGAO5/000001_1623300334.jpg",
                price: 34.99,
            },
            {
                id: "edcf1040dd93488e81c68638d121af00",
                name: "Final Fantasy VII Remake",
                imageUrl:
                    "https://g-h.sgp1.digitaloceanspaces.com/wp-content/uploads/2021/03/27154553/Final-Fantasy.jpg",
                price: 69.99,
            },
            {
                id: "b4e5821a00cb4491933138d3bbe16792",
                name: "Neo: The World Ends With You",
                imageUrl:
                    "https://i5.walmartimages.com/asr/7a06fae5-1cbc-4daa-bd4a-aebae7ac30cf.aa7b2f384e2f97a0fd5b6dac508f0d7b.jpeg",
                price: 39.99,
            },
        ],
    },
    {
        id: "dafaebd35a494626a7e6b389f6fa7bfc",
        title: "Consoles",
        routeName: "consoles",
        items: [
            {
                id: "62a3fc3706da4f75a93cb8695c3a9e8a",
                name: "Nintendo Switch",
                imageUrl:
                    "https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/systems_5/nintendo_switch_3/CI_NSwitch_Console_01_image500w.jpg",
                price: 249.99,
            },
            {
                id: "d967180fc166438fb0742f2e138c292a",
                name: "Playstation 5",
                imageUrl:
                    "https://i.pcmag.com/imagery/reviews/047S0c9zdo5nBklbPt1Dbs9-12..v1604614641.jpg",
                price: 499.99,
            },
            {
                id: "85eb01c6600c4ed78974dc1af55aee5f",
                name: "Xbox Series X",
                imageUrl:
                    "https://i.pcmag.com/imagery/reviews/02IVfjGisnI2rBYfxu9hDve-12..v1605193197.png",
                price: 449.99,
            },
            {
                id: "c230194cf5584167ad68104b8cfa8b24",
                name: "Playstation 4",
                imageUrl:
                    "https://i5.walmartimages.com/asr/fa525f02-78b9-4cc5-941a-f675b204ebd0_1.b2a74829b55fc3bde9f0275885502f73.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
                price: 199.99,
            },
            {
                id: "720b5df329ce42188ab38f6b21d53473",
                name: "Nintendo Switch Lite",
                imageUrl:
                    "https://www.techinn.com/f/13735/137350426/nintendo-switch-lite-console.jpg",
                price: 249.99,
            },
            {
                id: "4091e4b25e874d84ac66bc9105fe5e8f",
                name: "Steam Deck",
                imageUrl:
                    "https://media.wired.com/photos/60f088d62310feffcd558d58/1:1/w_1762,h_1762,c_limit/Gear-Steam-Deck-Valve.jpg",
                price: 399.99,
            },
            {
                id: "d407824d8e234b039763004b4973619e",
                name: "Nintendo 3DS",
                imageUrl:
                    "https://m.media-amazon.com/images/I/41NGofA8vOL._SX425_.jpg",
                price: 149.99,
            },
            {
                id: "f4e755220d9d4d4a9ce402ac4a2382c4",
                name: "Playstation Portable",
                imageUrl:
                    "https://m.media-amazon.com/images/I/615gWr9r13L._SL1500_.jpg",
                price: 249.99,
            },
        ],
    },
    {
        id: "50f335080e624b59adf269f8e7f8162a",
        title: "Controllers",
        routeName: "controllers",
        items: [
            {
                id: "89e378b59be74013a4b437b7d2944361",
                name: "Nintendo Switch Joycons",
                imageUrl:
                    "https://i5.walmartimages.com/asr/33c9f1e1-597e-4778-8f45-7e1d0e569c50_1.cb97f5123e61b43f76033ad836c0f75a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
                price: 79.99,
            },
            {
                id: "dfe5b7b70eed43678e97ca8c10528a69",
                name: "Nintendo Switch Pro Controller",
                imageUrl:
                    "https://m.media-amazon.com/images/I/61drpi3cYUL._SL1258_.jpg",
                price: 69.99,
            },
            {
                id: "69f557c982344c49b3a0a0549ac44bd5",
                name: "Playstation 5 DualSense Wireless Controller",
                imageUrl:
                    "https://www.mytrendyphone.eu/images/Sony-PlayStation-5-DualSense-Wireless-Controller-23122020-White-0711719399506-01-p.jpg",
                price: 74.99,
            },
            {
                id: "0d3af218797a4aba892635e36ce21d45",
                name: "Playstation DualShock 4 Wireless Controller",
                imageUrl:
                    "https://media.direct.playstation.com/is/image/sierialto/dualshock-ps4-controller-red-accessory-front",
                price: 165,
            },
            {
                id: "95bec633cc33432d8bc4b3ba6b6aa814",
                name: "Xbox Wireless Controller",
                imageUrl:
                    "https://media.gamestop.com/i/gamestop/11108369/Microsoft-Xbox-Series-X-Wireless-Controller-Robot-White",
                price: 54.99,
            },
        ],
    },
    {
        id: "528f6d96f5664af9a74e5bc0103253f0",
        title: "Keyboards",
        routeName: "keyboards",
        items: [
            {
                id: "e420e8e8aab14d8391f03904340b5fe8",
                name: "Corsair K100 RGB Optical",
                imageUrl:
                    "http://cdn.shopify.com/s/files/1/0355/8296/7943/products/k4_1024x.jpg?v=1636105006",
                price: 249.99,
            },
            {
                id: "9eff0211dabc41d4853897f4f46dff7b",
                name: "G.Skill KM360",
                imageUrl:
                    "https://i5.walmartimages.com/asr/261cc469-82dd-4c8e-b963-847105e02386.461db29342ca5606a3f275a2927bc690.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
                price: 54.99,
            },
            {
                id: "50ffe25d3fdf4c3ca330dedaa127459c",
                name: "Logitech G915 Lightspeed",
                imageUrl:
                    "https://media.ldlc.com/r1600/ld/products/00/05/88/26/LD0005882606_1.jpg",
                price: 249.99,
            },
            {
                id: "d329776921ee4cfd904c3cd79444f0f6",
                name: "Keychron K2 (Version 2)",
                imageUrl:
                    "https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K2-Wireless-Mechanical-Keyboard-ISO-Nordic-Gateron-blue-switch-RGB-light-white-alumium-case_1800x1800.jpg?v=1616584748",
                price: 88.99,
            },
            {
                id: "9e576ecb8968408ca544c99db88c1e82",
                name: "Wooting Two HE",
                imageUrl:
                    "http://cdn.shopify.com/s/files/1/0012/8407/9705/products/W2HE-ANSI-US-PBT-top_8bc33642-0f10-4a29-adb0-984086d13750_1024x.jpg?v=1637918241",
                price: 194.99,
            },
            {
                id: "74cae63b8aed43d7909de19ebaa3a242",
                name: "HyperX Alloy Elite RGB",
                imageUrl:
                    "https://media.kingston.com/hyperx/product/hx-product-keyboard-alloy-elite-2-us-3-zm-lg.jpg",
                price: 139.99,
            },
            {
                id: "443a3aad92c94351b0ad509d09571390",
                name: "Razer Cynosa Chroma",
                imageUrl:
                    "https://media.gamestop.com/i/gamestop/11102825/Razer-Cynosa-V2-Chroma-RGB-Membrane-Wired-Gaming-Keyboard?$pdp$",
                price: 79.99,
            },
        ],
    },
    {
        id: "045b5c3c2b544cb4964ff3064bedbbb6",
        title: "Headsets",
        routeName: "headsets",
        items: [
            {
                id: "5dc800684aea4011812e20980e39ff44",
                name: "Razer Blackshark V2",
                imageUrl:
                    "https://www.techinn.com/f/13832/138329421/razer-blackshark-v2-pro-wireless-gaming-headset.jpg",
                price: 99.99,
            },
            {
                id: "0c9b696c9adb47158c6e5e6b8d0a6258",
                name: "HyperX Cloud II Wireless",
                imageUrl:
                    "https://m.media-amazon.com/images/I/71g5MRbP52L._AC_SS450_.jpg",
                price: 149.99,
            },
            {
                id: "26ab54cb744f4f759972ce2513c2058e",
                name: "Razer Kraken X",
                imageUrl:
                    "https://www.techinn.com/f/13832/138329423/razer-kraken-x-lite-gaming-headset.jpg",
                price: 59.99,
            },
            {
                id: "6d77357b479743bfb40ab61d9856b196",
                name: "Epos H6PRO",
                imageUrl:
                    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6482/6482709_sd.jpg;maxHeight=640;maxWidth=550",
                price: 179.99,
            },
            {
                id: "3ff1d8ff862e4fdd8ee7132d41e4fba7",
                name: "Steelseries Arctis 9X",
                imageUrl:
                    "https://i0.wp.com/ax.com.kw/wp-content/uploads/2021/04/SteelSeries-ARCTIS-9-WIRELESS.png?fit=1024%2C1024&ssl=1",
                price: 188.99,
            },
        ],
    },
];

export default SHOP_DATA;
