import { COLORS } from "../constants";

const banners = [
    {
        id: 1,
        title: 'Same Price of $100',
        description: 'Shoe in Miniacs Shop',
        date: 'Dec 24',
        image: require('../assets/images/banner-01.png'),
    },
    {
        id: 2,
        title: 'FlASH SALE Haloween',
        description: 'Stay tune and check your notif everyday',
        date: '6 hours',
        image: require('../assets/images/banner-02.png'),
    }
]

const flashDeals = [
    {
        id: 1,
        title: "Flash Deals",
        desc: "Sale time from 1:00pm - 3:00pm"
    },
    {
        id: 2,
        image: require('../assets/images/dummy/product_01.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 3,
        image: require('../assets/images/dummy/product_02.png'),
        sold_qty: "546",
        total_qty: "5k",
        percentage: "11%"
    }
]

const promoItems = [
    {
        id: 1,
        title: "Promo Product",
        desc: "Products are priced from 40%"
    },
    {
        id: 2,
        image: require('../assets/images/dummy/product_03.png'),
        name: "Wireless Controller PS4™",
        price: 278.00,
        discount: "-54%"
    },
    {
        id: 3,
        image: require('../assets/images/dummy/product_04.png'),
        name: "T-shirt Men Uniquilo",
        price: 378.00,
        discount: "-60%"
    }
]

const categories = [
    {
        id: 1,
        name: "Bed",
        qty: "1.2k",
        image_1: require('../assets/images/dummy/bed_01.png'),
        image_2: require('../assets/images/dummy/bed_02.png'),
        image_3: require('../assets/images/dummy/bed_03.png'),
        bg_color: COLORS.primary20
    },
    {
        id: 2,
        name: "Bathtub",
        qty: "1.2k",
        image_1: require('../assets/images/dummy/bathtub_01.png'),
        image_2: require('../assets/images/dummy/bathtub_02.png'),
        image_3: require('../assets/images/dummy/bathtub_03.png'),
        bg_color: COLORS.error20
    },
    {
        id: 2,
        name: "Chair",
        qty: "1.2k",
        image_1: require('../assets/images/dummy/chair_01.png'),
        image_2: require('../assets/images/dummy/chair_02.png'),
        image_3: require('../assets/images/dummy/chair_03.png'),
        bg_color: COLORS.success20
    },
    {
        id: 3,
        name: "Wardrobe",
        qty: "1.2k",
        image_1: require('../assets/images/dummy/wardrobe_01.png'),
        image_2: require('../assets/images/dummy/wardrobe_02.png'),
        image_3: require('../assets/images/dummy/wardrobe_03.png'),
        bg_color: COLORS.secondary20
    }
]

const quickALinks = [
    {
        id: 1,
        title: 'Event',
        icon: require('../assets/icons/book.png'),
        color: '#FFFFFF',
    },
    {
        id: 2,
        title: 'Transport',
        icon: require('../assets/icons/car.png'),
        color: '#6DA2FD',
    },
    {
        id: 3,
        title: 'Live',
        icon: require('../assets/icons/video.png'),
        color: '#F9A1D8',
    },
    {
        id: 4,
        title: 'Coin',
        icon: require('../assets/icons/shopping_bag.png'),
        color: '#00D2DF',
    },
    {
        id: 5,
        title: 'Flash Sale',
        icon: require('../assets/icons/clock.png'),
        color: '#F7565D',
    },
    {
        id: 6,
        title: 'Search',
        icon: require('../assets/icons/search.png'),
        color: '#FDD452',
    },
    {
        id: 7,
        title: 'Premium',
        icon: require('../assets/icons/fire.png'),
        color: '#FF841E',
    },
    {
        id: 8,
        title: 'Card',
        icon: require('../assets/icons/credit_card.png'),
        color: '#7B60EA',
    }

]

const services = [
    {
        id: 1,
        title: 'Fast shopping',
        description: 'Fast home delivery within 2h free shipping',
        price: 'Only 50$/Month',
        image: require('../assets/images/get_card.png')
    },
    {
        id: 2,
        title: 'Fresh food',
        description: 'You just need the menu we will suggest, choose buy for you',
        price: 'Only 20$/Month',
        image: require('../assets/images/buy_coffee.png')
    },
    {
        id: 3,
        title: 'Exchange old things',
        description: 'You can exchange used items',
        price: 'Only 10$/Month',
        image: require('../assets/images/get_money.png')
    },
    {
        id: 4,
        title: 'Give gifts friend',
        description: 'Help you to send gifts to your loved ones',
        price: 'Only 5$/Month',
        image: require('../assets/images/get_reward.png')
    }
]

const chartData = [
    {
        x: 'Mon',
        y: 62136.52
    },
    {
        x: 'Tue',
        y: 42410.65
    },
    {
        x: 'Wed',
        y: 50794.10
    },
    {
        x: 'Thur',
        y: 75452.00
    },
    {
        x: 'Fri',
        y: 62136.60
    },
    {
        x: 'Sat',
        y: 42410.00
    },
    {
        x: 'Sun',
        y: 26136.50
    }
]

const orders = [
    {
        id: 1,
        order_no: 678765,
        date: '11:20AM   2018-03-12',
        total: '$570.00'
    },
    {
        id: 2,
        order_no: 678765,
        date: '11:20AM   2018-03-12',
        total: '$208.00'
    },
    {
        id: 3,
        order_no: 678765,
        date: '11:20AM   2018-03-12',
        total: '$600.00'
    }
]

const flashSales = [
    {
        id: 1,
        time: "08:00",
        status: "Done Flash"
    },
    {
        id: 2,
        time: "12:00",
        status: "Ongoing"
    },
    {
        id: 3,
        time: "16:00",
        status: "Next Flash"
    },
    {
        id: 4,
        time: "20:00",
        status: "Next Flash"
    }
]

const brands = [
    {
        id: 1,
        name: "All"
    },
    {
        id: 2,
        name: "Nikon",
        logo: require('../assets/images/dummy/logo_01.png')
    },
    {
        id: 3,
        name: "Sony",
        logo: require('../assets/images/dummy/logo_02.png')
    },
    {
        id: 4,
        name: "Fujifilm",
        logo: require('../assets/images/dummy/logo_03.png')
    }
]

const flashSaleItems = [
    {
        id: 1,
        name: 'Fujifilm Instax Mini 9',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_01.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 2,
        name: 'Nikon Coolpix B500',
        price: '$67.00',
        discount: '-64%',
        image: require('../assets/images/dummy/camera_02.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 3,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 4,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 5,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 6,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 7,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 8,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    }
]

const featuredProducts = [
    {
        id: 1,
        title: "Up To 50% Off\nHoliday Bit",
        image: require('../assets/images/dummy/featured_01.png')
    }
]

const topSearch = [
    {
        id: 1,
        keyword: "Man",
        result: "35k",
        image: require('../assets/images/dummy/top_01.png')
    },
    {
        id: 2,
        keyword: "Women",
        result: "35k",
        image: require('../assets/images/dummy/top_02.png')
    },
    {
        id: 3,
        keyword: "Jeans",
        result: "45k",
        image: require('../assets/images/dummy/top_03.png')
    }
]

const suggestedSearch = [
    {
        id: 1,
        keyword: "T-Shirt"
    },
    {
        id: 2,
        keyword: "Baggy"
    },
    {
        id: 3,
        keyword: "Kids"
    },
    {
        id: 4,
        keyword: "Ot"
    },
    {
        id: 5,
        keyword: "Jacket"
    },
    {
        id: 6,
        keyword: "Dress"
    },
    {
        id: 7,
        keyword: "Dress"
    }
]

const recentSearch = [
    {
        id: 1,
        keyword: "Summer dress"
    },
    {
        id: 2,
        keyword: "Summer beach wear"
    },
    {
        id: 3,
        keyword: "Children's hats"
    },
    {
        id: 4,
        keyword: "Doice & Babana"
    }
]

const offerTypes = {
    zero_installment: {
        title: "0% installment",
        icon: require('../assets/icons/fire.png'),
        color: COLORS.error
    },
    free_ship_extra: {
        title: "Free ship Extra",
        icon: require('../assets/icons/car.png'),
        color: COLORS.support1
    },
    pay_3_gift_1: {
        title: "Pay 3 gift 1",
        icon: require('../assets/icons/gift_fill.png'),
        color: COLORS.support2
    }
}

const headphoneBrands = [
    {
        id: 1,
        name: "All"
    },
    {
        id: 2,
        name: "Sony",
        logo: require('../assets/images/dummy/logo_02.png')
    },
    {
        id: 3,
        name: "JBL",
        logo: require('../assets/images/dummy/logo_04.png')
    },
    {
        id: 4,
        name: "Beat",
        logo: require('../assets/images/dummy/logo_05.png')
    }
]

const technologyCategory = [
    {
        id: 1,
        name: "Smart phone",
        images: [
            require("../assets/images/dummy/smartphone_01.png"),
            require("../assets/images/dummy/smartphone_02.png"),
            require("../assets/images/dummy/smartphone_03.png")
        ],
        no_of_items: 0
    },
    {
        id: 2,
        name: "Smart TV",
        images: [
            require("../assets/images/dummy/tv_01.png"),
            require("../assets/images/dummy/tv_02.png"),
            require("../assets/images/dummy/tv_03.png")
        ],
        no_of_items: 0
    },
    {
        id: 3,
        name: "Laptop",
        images: [
            require("../assets/images/dummy/laptop_01.png"),
            require("../assets/images/dummy/laptop_02.png"),
            require("../assets/images/dummy/laptop_03.png")
        ],
        no_of_items: 0
    },
    {
        id: 4,
        name: "Tablet",
        images: [
            require("../assets/images/dummy/tablet_01.png"),
            require("../assets/images/dummy/tablet_02.png"),
            require("../assets/images/dummy/tablet_03.png")
        ],
        no_of_items: 0
    },
    {
        id: 5,
        name: "Headphone",
        images: [
            require("../assets/images/dummy/general_technology_02.png"),
            require("../assets/images/dummy/headphone_02.png"),
            require("../assets/images/dummy/headphone_03.png")
        ],
        no_of_items: 233,
        brands: headphoneBrands
    },
    {
        id: 6,
        name: "Camera",
        images: [
            require("../assets/images/dummy/camera_04.png"),
            require("../assets/images/dummy/camera_05.png"),
            require("../assets/images/dummy/camera_06.png")
        ],
        no_of_items: 467,
        brands: brands
    }
]

const technologyProducts = [
    {
        id: 1,
        category_id: 6,
        name: "Canon Powershot G9 X Mark II",
        image: require("../assets/images/dummy/camera_06.png"),
        rating: 4.7,
        no_of_rating: "3k",
        price: "$367.00",
        discount: "-24%",
        extra_offer: offerTypes.zero_installment
    },
    {
        id: 2,
        category_id: 6,
        name: "Fujiflim X-A7 Mint Green",
        image: require("../assets/images/dummy/camera_07.png"),
        rating: 4.7,
        no_of_rating: "3k",
        price: "$678.00",
        discount: "-24%",
        extra_offer: offerTypes.zero_installment
    },
    {
        id: 3,
        category_id: 6,
        name: "Fujifilm Instax Mini 9",
        image: require("../assets/images/dummy/camera_01.png"),
        rating: 4.7,
        no_of_rating: "3k",
        price: "$367.00",
        discount: "-24%",
        extra_offer: offerTypes.zero_installment
    },
    {
        id: 4,
        category_id: 6,
        name: "Nikon Coolpix B500",
        image: require("../assets/images/dummy/camera_02.png"),
        rating: 4.7,
        no_of_rating: "3k",
        price: "$678.00",
        discount: "-24%",
        extra_offer: offerTypes.zero_installment
    },
    {
        id: 5,
        category_id: 6,
        name: "Camera Nikon D5000",
        image: require("../assets/images/dummy/camera_03.png"),
        rating: 4.7,
        no_of_rating: "3k",
        price: "$367.00",
        discount: "-24%",
        extra_offer: offerTypes.zero_installment
    },
    {
        id: 6,
        category_id: 5,
        name: "Headphone Elogin HF01",
        image: require("../assets/images/dummy/headphone_04.png"),
        rating: 4.7,
        no_of_rating: "3k",
        price: "$367.00",
        discount: "-24%",
        extra_offer: offerTypes.zero_installment
    },
    {
        id: 7,
        category_id: 5,
        name: "Crest Edition Wireles Headphone",
        image: require("../assets/images/dummy/headphone_02.png"),
        rating: 4.7,
        no_of_rating: "3k",
        price: "$678.00",
        discount: "-24%",
        extra_offer: offerTypes.zero_installment
    },
    {
        id: 8,
        category_id: 5,
        name: "Headphone JBL E55BT",
        image: require("../assets/images/dummy/headphone_05.png"),
        rating: 4.7,
        no_of_rating: "3k",
        price: "$678.00",
        discount: "-24%",
        extra_offer: offerTypes.free_ship_extra
    },
    {
        id: 9,
        category_id: 5,
        name: "Heaphone Beat Solo 3",
        image: require("../assets/images/dummy/headphone_06.png"),
        rating: 4.7,
        no_of_rating: "3k",
        price: "$678.00",
        discount: "-24%",
        extra_offer: offerTypes.pay_3_gift_1
    },
    {
        id: 10,
        category_id: 5,
        name: "Noise solation Bluetoot Heaphone",
        image: require("../assets/images/dummy/headphone_07.png"),
        rating: 4.7,
        no_of_rating: "3k",
        price: "$678.00",
        discount: "-24%",
        extra_offer: offerTypes.zero_installment
    },
    {
        id: 11,
        category_id: 5,
        name: "ANC Personalized Noise Canceling",
        image: require("../assets/images/dummy/headphone_08.png"),
        rating: 4.7,
        no_of_rating: "3k",
        price: "$678.00",
        discount: "-24%",
        extra_offer: offerTypes.zero_installment
    }
]

const generalCategory = [
    {
        id: 1,
        name: "Men",
        qty: "1.2k",
        image: require('../assets/images/dummy/general_men.png'),
        sub_images: [
            require('../assets/images/dummy/general_men_01.png'),
            require('../assets/images/dummy/product_04.png'),
            require('../assets/images/dummy/general_men_03.png')
        ],
        bg_color: COLORS.primary08,
        title_color: COLORS.primary
    },
    {
        id: 2,
        name: "Women",
        qty: "1.2k",
        image: require('../assets/images/dummy/general_women.png'),
        sub_images: [
            require('../assets/images/dummy/general_women_01.png'),
            require('../assets/images/dummy/general_women_02.png'),
            require('../assets/images/dummy/general_women_03.png')
        ],
        bg_color: COLORS.error08,
        title_color: COLORS.error
    },
    {
        id: 3,
        name: "Technology",
        qty: "1.7k",
        image: require('../assets/images/dummy/general_technology.png'),
        sub_images: [
            require('../assets/images/dummy/general_technology_01.png'),
            require('../assets/images/dummy/general_technology_02.png'),
            require('../assets/images/dummy/general_technology_03.png'),
        ],
        bg_color: COLORS.success08,
        title_color: COLORS.success,
        sub_categories: technologyCategory,
        products: technologyProducts
    },
]

const favoriteFoodBrands = [
    {
        id: 1,
        name: "The Pizza Company",
        logo: require('../assets/images/dummy/favorite_brand_01.png')
    },
    {
        id: 2,
        name: "Pizza Hut",
        logo: require('../assets/images/dummy/favorite_brand_02.png')
    },
    {
        id: 3,
        name: "McDonald's",
        logo: require('../assets/images/dummy/favorite_brand_03.png')
    },
    {
        id: 4,
        name: "Starbucks",
        logo: require('../assets/images/dummy/favorite_brand_04.png')
    },
    {
        id: 5,
        name: "Motu",
        logo: require('../assets/images/dummy/favorite_brand_05.png')
    },
    {
        id: 6,
        name: "Burger King",
        logo: require('../assets/images/dummy/favorite_brand_06.png')
    }
]

const favoriteFoodProducts = [
    {
        id: 1,
        name: "Grapefruit Honey Ice Cream",
        price: "$7.00",
        image: require('../assets/images/dummy/favorite_food_01.png')
    },
    {
        id: 2,
        name: "Mango Ice Cream",
        price: "$6.00",
        image: require('../assets/images/dummy/favorite_food_02.png')
    },
    {
        id: 3,
        name: "Blackcurrant Vanilla Ice Cream Cake",
        price: "$67.00",
        image: require('../assets/images/dummy/favorite_food_03.png')
    },
    {
        id: 4,
        name: "Strawberry Ice Cream",
        price: "$17.10",
        image: require('../assets/images/dummy/favorite_food_04.png')
    },
]

const collectionCategory = [
    {
        id: 1,
        name: "Food",
        images: [
            require("../assets/images/dummy/food_01.png"),
            require("../assets/images/dummy/food_02.png"),
            require("../assets/images/dummy/food_03.png"),
            require("../assets/images/dummy/food_04.png"),
        ],
        banners: [
            {
                id: 1,
                image: require('../assets/images/banner-04.png')
            }
        ],
        brands: favoriteFoodBrands,
        products: favoriteFoodProducts
    },
    {
        id: 2,
        name: "Sport",
        images: [
            require("../assets/images/dummy/sport_01.png"),
            require("../assets/images/dummy/sport_02.png"),
            require("../assets/images/dummy/sport_03.png"),
            require("../assets/images/dummy/sport_04.png"),
        ]
    },
    {
        id: 3,
        name: "Fashion",
        images: [
            require("../assets/images/dummy/fashion_01.png"),
            require("../assets/images/dummy/fashion_02.png"),
            require("../assets/images/dummy/fashion_03.png"),
            require("../assets/images/dummy/fashion_04.png"),
        ]
    },
    {
        id: 4,
        name: "Dress",
        images: [
            require("../assets/images/dummy/dress_01.png"),
            require("../assets/images/dummy/dress_02.png"),
            require("../assets/images/dummy/dress_03.png"),
            require("../assets/images/dummy/dress_04.png"),
        ]
    },
    {
        id: 5,
        name: "Shoe",
        images: [
            require("../assets/images/dummy/shoe_01.png"),
            require("../assets/images/dummy/shoe_02.png"),
            require("../assets/images/dummy/shoe_03.png"),
            require("../assets/images/dummy/shoe_04.png"),
        ]
    },
    {
        id: 6,
        name: "Top",
        images: [
            require("../assets/images/dummy/tops_01.png"),
            require("../assets/images/dummy/tops_02.png"),
            require("../assets/images/dummy/tops_03.png"),
            require("../assets/images/dummy/tops_04.png"),
        ]
    }
]

const productDetail = {
    name: "Nike Air Jordan 1 Retro High OG 'Bred Toe'",
    sku: "78472493",
    stock: 5,
    price: "$67.00",
    images: [
        {
            id: 1,
            image: require("../assets/images/dummy/shoe_05.png")
        },
        {
            id: 2,
            image: require("../assets/images/dummy/shoe_06.png")
        },
        {
            id: 3,
            image: require("../assets/images/dummy/shoe_07.png")
        },
        {
            id: 4,
            image: require("../assets/images/dummy/shoe_08.png")
        },
        {
            id: 5,
            image: require("../assets/images/dummy/shoe_09.png")
        },
        {
            id: 6,
            image: require("../assets/images/dummy/shoe_10.png")
        },
        {
            id: 7,
            image: require("../assets/images/dummy/shoe_05.png")
        },
        {
            id: 8,
            image: require("../assets/images/dummy/shoe_06.png")
        },
        {
            id: 9,
            image: require("../assets/images/dummy/shoe_07.png")
        },
        {
            id: 10,
            image: require("../assets/images/dummy/shoe_08.png")
        },
        {
            id: 11,
            image: require("../assets/images/dummy/shoe_09.png")
        },
        {
            id: 12,
            image: require("../assets/images/dummy/shoe_10.png")
        }
    ],
    qrcode: require("../assets/images/dummy/product_qrcode.png"),
    colors: [
        {
            id: 1,
            color: COLORS.secondary
        },
        {
            id: 2,
            color: COLORS.error
        },
        {
            id: 3,
            color: COLORS.dark
        },
        {
            id: 4,
            color: COLORS.support5
        },
        {
            id: 5,
            color: COLORS.success
        }
    ],
    sizes: [
        {
            id: 1,
            label: 'L',
            quantity: 42
        },
        {
            id: 2,
            label: 'M',
            quantity: 40
        }
    ],
    category: "Shoe",
    trademark: "Air Jordan",
    provider: "Shoe Store",
    origin: "Made in USA",
    warranty: "Footwear",
    waterproof: "Yes",
    accessories: "Shoe laces, shoelaces, without socks",
    rating: 4.7,
    no_of_rating: 567,
    promotion_end: new Date().setDate(new Date().getDate() + 2)
}

const productReviews = [
    {
        id: 1,
        name: "Katy Langford",
        profile: require("../assets/images/dummy/customer_01.png"),
        date: "12 September",
        review: "This product is so useful and has very nice user interface.",
        rating: 4,
        like: 10,
        comment: 400
    },
    {
        id: 2,
        name: "Katy Langford",
        profile: require("../assets/images/dummy/customer_02.png"),
        date: "12 September",
        review: "This product is so useful and has very nice user interface.",
        rating: 4,
        like: 10,
        comment: 400
    },
    {
        id: 3,
        name: "Katy Langford",
        profile: require("../assets/images/dummy/customer_03.png"),
        date: "12 September",
        review: "This product is so useful and has very nice user interface.",
        rating: 4,
        like: 10,
        comment: 400
    }
]

const interestedProducts = [
    {
        id: 1,
        name: "Nike Air Jordan 1 Retro High OG",
        image: require("../assets/images/dummy/shoe_05.png"),
        price: "$678.00",
        discount: "-24%"
    },
    {
        id: 2,
        name: "Nike Air Zoom SuperRep",
        image: require("../assets/images/dummy/shoe_11.png"),
        price: "$678.00",
        discount: "-24%"
    },
    {
        id: 3,
        name: "Nike Kyrie 2",
        image: require("../assets/images/dummy/shoe_12.png"),
        price: "$678.00",
        discount: "-24%"
    }
]

const bundleProducts = [
    {
        id: 1,
        image: require("../assets/images/dummy/shoe_13.png"),
        price: "$627.00"
    },
    {
        id: 2,
        image: require("../assets/images/dummy/shoe_14.png"),
        price: "$567.00"
    },
    {
        id: 3,
        image: require("../assets/images/dummy/shoe_15.png"),
        price: "$575.00"
    }
]

const viewedProducts = [
    {
        id: 1,
        image: require("../assets/images/dummy/shoe_17.png"),
        price: "$67.00"
    },
    {
        id: 2,
        image: require("../assets/images/dummy/shoe_18.png"),
        price: "$67.00"
    },
    {
        id: 3,
        image: require("../assets/images/dummy/shoe_19.png"),
        price: "$67.00"
    }
]

const messageHeaders = [
    {
        id: 1,
        name: "Reclays Store",
        profile_pic: require("../assets/images/logo.png"),
        last_message: "Please send your address",
        unread_message: 12,
        last_sent: "8:10am"
    },
    {
        id: 2,
        name: "Reclays Store",
        profile_pic: require("../assets/images/logo.png"),
        last_message: "Please send your address",
        unread_message: 5,
        last_sent: "Yesterday"
    },
    {
        id: 3,
        name: "Reclays Store",
        profile_pic: require("../assets/images/logo.png"),
        last_message: "Please send your address",
        unread_message: 7,
        last_sent: "Yesterday"
    },
    {
        id: 4,
        name: "Reclays Store",
        profile_pic: require("../assets/images/logo.png"),
        last_message: "Please send your address",
        unread_message: 2,
        last_sent: "Tuesday"
    },
    {
        id: 5,
        name: "Reclays Store",
        profile_pic: require("../assets/images/logo.png"),
        last_message: "Please send your address",
        unread_message: 3,
        last_sent: "Monday"
    }
]

const messages = [
    {
        _id: 1,
        text: 'Good morning!',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: require('../assets/images/logo.png'),
        },
    },
    {
        _id: 2,
        image: 'https://placeimg.com/140/140/any',
        text: 'Oh and btw, this is my order link \nhttps://shop.webvitals.org/',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'React Native',
            avatar: require('../assets/images/logo.png'),
        },
    },
    {
        _id: 3,
        text: 'Just wanted to tell you, React Native is #awesome',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'React Native',
            avatar: require('../assets/images/logo.png'),
        },
    },
    {
        _id: 4,
        text: 'Good morning!',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'React Native',
            avatar: require('../assets/images/logo.png'),
        },
    }
]

const notifications = [
    {
        id: 1,
        title: "Order Arrived",
        description: "Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order ) ",
        display_date: "July 20, 2020 (08:00 pm)",
        icon: require('../assets/icons/shopping_bag.png'),
        is_read: false
    },
    {
        id: 2,
        title: "Order Arrived",
        description: "Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order ) ",
        display_date: "July 20, 2020 (08:00 pm)",
        icon: require('../assets/icons/shopping_bag.png'),
        is_read: false
    },
    {
        id: 3,
        title: "Order Arrived",
        description: "Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order ) ",
        display_date: "July 20, 2020 (08:00 pm)",
        icon: require('../assets/icons/shopping_bag.png'),
        is_read: false
    },
    {
        id: 4,
        title: "Order Arrived",
        description: "Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order ) ",
        display_date: "July 20, 2020 (08:00 pm)",
        icon: require('../assets/icons/shopping_bag.png'),
        is_read: false
    },
    {
        id: 5,
        title: "Order Arrived",
        description: "Order 24089794727000824 has been completed & arrived at the destination address ( Please rates your order ) ",
        display_date: "July 20, 2020 (08:00 pm)",
        icon: require('../assets/icons/shopping_bag.png'),
        is_read: true
    },
]

const faq = [
    {
        id: 1,
        question: "How does warranty works?",
    },
    {
        id: 2,
        question: "How long is my order delivery time?",
    },
    {
        id: 3,
        question: "How to become a seller?",
    },
    {
        id: 4,
        question: "Why I don't receive OTP code?",
    },
    {
        id: 5,
        question: "How to rate products?",
    },
    {
        id: 6,
        question: "How to get refund?",
    },
    {
        id: 7,
        question: "How to deal with late deliveries?",
    },
    {
        id: 8,
        question: "How to report seller?",
    },
]

const coin_history = [
    {
        id: 1,
        coin_label: "+1000",
        status_label: "Accepted",
        color: COLORS.primary,
        date: "September 23, 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis turpis, bibendum quis nisi at, auctor tempus felis. Ut non mauris vulputate, pellentesque nisi id, tempus augue."
    },
    {
        id: 2,
        coin_label: "+100",
        status_label: "Accepted",
        color: COLORS.success,
        date: "September 23, 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis turpis, bibendum quis nisi at, auctor tempus felis. Ut non mauris vulputate, pellentesque nisi id, tempus augue."
    },
    {
        id: 3,
        coin_label: "-100",
        status_label: "Cancelled",
        color: COLORS.error,
        date: "September 23, 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis turpis, bibendum quis nisi at, auctor tempus felis. Ut non mauris vulputate, pellentesque nisi id, tempus augue."
    }
]

export default {
    banners,
    flashDeals,
    promoItems,
    categories,
    quickALinks,
    services,
    chartData,
    orders,
    flashSales,
    brands,
    flashSaleItems,
    featuredProducts,
    topSearch,
    suggestedSearch,
    recentSearch,
    generalCategory,
    collectionCategory,
    productDetail,
    productReviews,
    interestedProducts,
    bundleProducts,
    viewedProducts,
    messageHeaders,
    messages,
    notifications,
    faq,
    coin_history
}