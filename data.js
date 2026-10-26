/**
 * GEISO ENTERPRISE - Catalog & Store Data
 * Designed and Developed by CCYI GLOBAL ENTERPRISE
 */

const STORE_CONFIG = {
  brandName: "GEISO ENTERPRISE",
  tagline: "The place of exquisite fashion",
  currency: "\u00A3",
  currencyCode: "GBP",
  freeShippingThreshold: 100,
  phone: "+44 7404 123456",
  email: "info@geisoenterprise.co.uk",
  webmail: "https://webmail.geisoenterprise.co.uk",
  address: "United Kingdom",
  promoCode: "GEISO15",
  promoDiscount: 0.15,
  logoUrl: "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/FAVICON-150x106.png"
};

const CATEGORIES = [
  { id: "all", name: "All Collections", icon: "bi-grid-fill" },
  { id: "Braided Wigs", name: "Braided Wigs & Hair", icon: "bi-stars" },
  { id: "Men & Boys", name: "Men & Boys Native", icon: "bi-person-badge" },
  { id: "Women & Girls", name: "Women & Girls Couture", icon: "bi-gem" },
  { id: "Jackets & Outerwear", name: "Jackets & Outerwear", icon: "bi-tag-fill" }
];

const HERO_SLIDES = [
  {
    title: "The Place of Exquisite Fashion",
    subtitle: "Luxury African Couture & Handcrafted Braided Wigs",
    description: "Discover authentic African heritage infused with contemporary elegance. From bespoke Senator styles to premium micro-twist lace wigs.",
    image: "https://geisoenterprise.co.uk/wp-content/uploads/2024/09/WhatsApp_Image_2024-09-02_at_6.20.21_PM-removebg-preview-300x300.png",
    ctaText: "Shop Collections",
    ctaLink: "#collections",
    badge: "New Season 2026"
  },
  {
    title: "Handmade Braided Wigs",
    subtitle: "Natural Scalp Effect \u2022 Featherlight \u2022 Zero Wait Time",
    description: "13x4 Frontal lace cornrows, micro twists, and knotless box braids handcrafted by master hair stylists.",
    image: "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/13-x-4-Lace-frontal-cornrows-and-single-box-braids-behind-300x300.jpeg",
    ctaText: "Explore Braided Wigs",
    ctaLink: "#collections",
    badge: "100% Handcrafted"
  },
  {
    title: "Royal Native Attires for Men & Boys",
    subtitle: "Distinguished Senator Styles, Jalamia & Modern Caftans",
    description: "Tailored to perfection with crisp lines, premium cashmere & polished cotton fabrics for every high-profile occasion.",
    image: "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_155132643-removebg-preview-1.png",
    ctaText: "Discover Men's Wear",
    ctaLink: "#collections",
    badge: "Bespoke Fit"
  }
];

const TESTIMONIALS = [
  {
    name: "Salama",
    location: "London, UK",
    text: "Thank you so much Geiso Enterprise for the lovely handcrafted wig! It is so pretty and neat, keep up the amazing work.",
    rating: 5,
    verified: true,
    product: "Knotless Box Braid Wig"
  },
  {
    name: "Saudai",
    location: "Birmingham, UK",
    text: "Hello sis, I can't believe I bought 16 wigs from you already and I don't think I am stopping anytime soon! I keep falling in love with everything you drop.",
    rating: 5,
    verified: true,
    product: "16x Repeat Collector"
  },
  {
    name: "Douglas",
    location: "Manchester, UK",
    text: "Thank you so much for the beautiful senator design Native attire. The fitting is razor-sharp and the fabric quality is top tier. Highly recommended!",
    rating: 5,
    verified: true,
    product: "Senator Style Native Attire"
  },
  {
    name: "Fatia",
    location: "Leeds, UK",
    text: "Thank you so much Geiso Enterprise for this lovely wig. It fits me so well and I love it. You have a loyal customer for life!",
    rating: 5,
    verified: true,
    product: "Micro Tiny Twist Wig"
  },
  {
    name: "Brenda",
    location: "Bristol, UK",
    text: "Thank you so much Geiso Enterprise for this lovely wig, I love it so much. Beautiful texture and remarkably comfortable to wear all day.",
    rating: 5,
    verified: true,
    product: "24-Inches Micro Twist"
  },
  {
    name: "Aisha",
    location: "Glasgow, UK",
    text: "Thank you very much sis, the wig is so very beautiful! Delivery was speedy and packaging felt truly luxurious.",
    rating: 5,
    verified: true,
    product: "Ghana Cornrows Closure"
  },
  {
    name: "Zainab",
    location: "Newcastle, UK",
    text: "Geiso Enterprise thank you so much for this gorgeous wig! It makes me look so beautiful and my friends couldn't stop showering me with compliments.",
    rating: 5,
    verified: true,
    product: "Lace Frontal Cornrows"
  },
  {
    name: "Blessing",
    location: "Sheffield, UK",
    text: "I am so happy wearing this attire and wig I bought from you, it makes me feel like true royalty. Pure perfection!",
    rating: 5,
    verified: true,
    product: "Silky Adire Bubu Dress"
  }
];

const PRODUCTS_DATA = [
    {
        "id":  26,
        "title":  "Micro twists made with human hair 13 X 4 frontal lace",
        "category":  "Braided Wigs",
        "price":  120,
        "originalPrice":  138,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/09/Polish_20240831_195210650-50x50.jpg",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/09/Polish_20240831_195210650-300x300.jpg",
        "badge":  "Premium Luxury",
        "tag":  "Best Seller",
        "description":  "Handcrafted lightweight braided wig made with premium synthetic and human hair blend, natural scalp look, and pre-plucked hairline for effortless glamour.",
        "rating":  5,
        "reviewsCount":  13,
        "inStock":  true
    },
    {
        "id":  13,
        "title":  "Bubu Silky Adire made with Vintage fabric",
        "category":  "Women \u0026 Girls",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240825_194937905-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240825_194937905-removebg-preview-300x300.png",
        "badge":  "",
        "tag":  "Exquisite",
        "description":  "Breathable, regal silhouette tailored from luxury silk Adire, rich lace, and vintage authentic fabrics, designed to accentuate elegance and grace.",
        "rating":  5,
        "reviewsCount":  34,
        "inStock":  true
    },
    {
        "id":  9,
        "title":  "Blouse and two wrappers",
        "category":  "Women \u0026 Girls",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240818_163311378-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240818_163311378-removebg-preview-300x300.png",
        "badge":  "Popular",
        "tag":  "Exquisite",
        "description":  "Breathable, regal silhouette tailored from luxury silk Adire, rich lace, and vintage authentic fabrics, designed to accentuate elegance and grace.",
        "rating":  5,
        "reviewsCount":  24,
        "inStock":  true
    },
    {
        "id":  1,
        "title":  "13-x-4-Lace-frontal-cornrows-and-single-box-braids-behind",
        "category":  "Braided Wigs",
        "price":  120,
        "originalPrice":  138,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/13-x-4-Lace-frontal-cornrows-and-single-box-braids-behind-50x50.jpeg",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/13-x-4-Lace-frontal-cornrows-and-single-box-braids-behind-300x300.jpeg",
        "badge":  "Premium Luxury",
        "tag":  "Best Seller",
        "description":  "Handcrafted lightweight braided wig made with premium synthetic and human hair blend, natural scalp look, and pre-plucked hairline for effortless glamour.",
        "rating":  5,
        "reviewsCount":  17,
        "inStock":  true
    },
    {
        "id":  6,
        "title":  "Beautifully Designed Brown Lace \u0026 wine Lace Dress",
        "category":  "Women \u0026 Girls",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240825_195716729-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240825_195716729-removebg-preview-300x300.png",
        "badge":  "Popular",
        "tag":  "Exquisite",
        "description":  "Breathable, regal silhouette tailored from luxury silk Adire, rich lace, and vintage authentic fabrics, designed to accentuate elegance and grace.",
        "rating":  5,
        "reviewsCount":  10,
        "inStock":  true
    },
    {
        "id":  11,
        "title":  "Bubu made with silky Adore Fabric",
        "category":  "Women \u0026 Girls",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240825_194841363-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240825_194841363-removebg-preview-300x300.png",
        "badge":  "",
        "tag":  "Exquisite",
        "description":  "Breathable, regal silhouette tailored from luxury silk Adire, rich lace, and vintage authentic fabrics, designed to accentuate elegance and grace.",
        "rating":  5,
        "reviewsCount":  14,
        "inStock":  true
    },
    {
        "id":  8,
        "title":  "Beautifully sown Lace Dress",
        "category":  "Women \u0026 Girls",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240825_195611520-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240825_195611520-removebg-preview-300x300.png",
        "badge":  "",
        "tag":  "Exquisite",
        "description":  "Breathable, regal silhouette tailored from luxury silk Adire, rich lace, and vintage authentic fabrics, designed to accentuate elegance and grace.",
        "rating":  5,
        "reviewsCount":  25,
        "inStock":  true
    },
    {
        "id":  25,
        "title":  "Micro twist",
        "category":  "Braided Wigs",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/09/Polish_20240831_195531400-50x50.jpg",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/09/Polish_20240831_195531400-300x300.jpg",
        "badge":  "Sale 15% Off",
        "tag":  "Best Seller",
        "description":  "Handcrafted lightweight braided wig made with premium synthetic and human hair blend, natural scalp look, and pre-plucked hairline for effortless glamour.",
        "rating":  5,
        "reviewsCount":  24,
        "inStock":  true
    },
    {
        "id":  30,
        "title":  "Nicely sown African Boys Native attire",
        "category":  "Men \u0026 Boys",
        "price":  40,
        "originalPrice":  46,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_100322040-removebg-preview-1-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_100322040-removebg-preview-1-300x300.png",
        "badge":  "Sale 15% Off",
        "tag":  "Handcrafted",
        "description":  "Impeccably tailored African Senator \u0026 native attire designed for distinguished gentlemen and young royalty, featuring crisp embroidery and rich fabric.",
        "rating":  5,
        "reviewsCount":  24,
        "inStock":  true
    },
    {
        "id":  35,
        "title":  "UNISEX JACKET #2",
        "category":  "Jackets \u0026 Outerwear",
        "price":  60,
        "originalPrice":  69,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_151017330-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_151017330-removebg-preview-300x300.png",
        "badge":  "Sale 15% Off",
        "tag":  "Unisex",
        "description":  "Bold African print statement jacket combining contemporary street style with vibrant traditional Ankara motifs. Unisex cut with premium finish.",
        "rating":  5,
        "reviewsCount":  21,
        "inStock":  true
    },
    {
        "id":  10,
        "title":  "Bubu made from Vintage fabric",
        "category":  "Women \u0026 Girls",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240818_162604191-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240818_162604191-removebg-preview-300x300.png",
        "badge":  "Sale 15% Off",
        "tag":  "Exquisite",
        "description":  "Breathable, regal silhouette tailored from luxury silk Adire, rich lace, and vintage authentic fabrics, designed to accentuate elegance and grace.",
        "rating":  5,
        "reviewsCount":  28,
        "inStock":  true
    },
    {
        "id":  3,
        "title":  "28-inch-7x-7-human-hair-closure-Ghana-cornrows-with-single-box-braids-behind",
        "category":  "Braided Wigs",
        "price":  120,
        "originalPrice":  138,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/28-inch-7x-7-human-hair-closure-Ghana-cornrows-with-single-box-braids-behind-50x50.jpeg",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/28-inch-7x-7-human-hair-closure-Ghana-cornrows-with-single-box-braids-behind-300x300.jpeg",
        "badge":  "Premium Luxury",
        "tag":  "Best Seller",
        "description":  "Handcrafted lightweight braided wig made with premium synthetic and human hair blend, natural scalp look, and pre-plucked hairline for effortless glamour.",
        "rating":  5,
        "reviewsCount":  17,
        "inStock":  true
    },
    {
        "id":  37,
        "title":  "UNISEX JACKET #6",
        "category":  "Jackets \u0026 Outerwear",
        "price":  60,
        "originalPrice":  69,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_152322382-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_152322382-removebg-preview-300x300.png",
        "badge":  "",
        "tag":  "Unisex",
        "description":  "Bold African print statement jacket combining contemporary street style with vibrant traditional Ankara motifs. Unisex cut with premium finish.",
        "rating":  5,
        "reviewsCount":  20,
        "inStock":  true
    },
    {
        "id":  24,
        "title":  "Micro Tiny Twist wig",
        "category":  "Braided Wigs",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/09/IMG-20240909-WA0018-50x50.jpg",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/09/IMG-20240909-WA0018-300x300.jpg",
        "badge":  "Popular",
        "tag":  "Best Seller",
        "description":  "Handcrafted lightweight braided wig made with premium synthetic and human hair blend, natural scalp look, and pre-plucked hairline for effortless glamour.",
        "rating":  5,
        "reviewsCount":  19,
        "inStock":  true
    },
    {
        "id":  15,
        "title":  "Cute and Elegant African female Designs for modern ladies",
        "category":  "Men \u0026 Boys",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240817_091307409-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240817_091307409-removebg-preview-300x300.png",
        "badge":  "Sale 15% Off",
        "tag":  "Handcrafted",
        "description":  "Impeccably tailored African Senator \u0026 native attire designed for distinguished gentlemen and young royalty, featuring crisp embroidery and rich fabric.",
        "rating":  5,
        "reviewsCount":  32,
        "inStock":  true
    },
    {
        "id":  38,
        "title":  "UNISEX JACKET #7",
        "category":  "Jackets \u0026 Outerwear",
        "price":  60,
        "originalPrice":  69,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_151523892-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_151523892-removebg-preview-300x300.png",
        "badge":  "",
        "tag":  "Unisex",
        "description":  "Bold African print statement jacket combining contemporary street style with vibrant traditional Ankara motifs. Unisex cut with premium finish.",
        "rating":  5,
        "reviewsCount":  19,
        "inStock":  true
    },
    {
        "id":  32,
        "title":  "Nicely sown Boys Top and Trouser",
        "category":  "Men \u0026 Boys",
        "price":  40,
        "originalPrice":  46,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_154427174-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_154427174-removebg-preview-300x300.png",
        "badge":  "",
        "tag":  "Handcrafted",
        "description":  "Impeccably tailored African Senator \u0026 native attire designed for distinguished gentlemen and young royalty, featuring crisp embroidery and rich fabric.",
        "rating":  5,
        "reviewsCount":  24,
        "inStock":  true
    },
    {
        "id":  7,
        "title":  "Beautifully sown Female Dress",
        "category":  "Men \u0026 Boys",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240825_194521195-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240825_194521195-removebg-preview-300x300.png",
        "badge":  "",
        "tag":  "Handcrafted",
        "description":  "Impeccably tailored African Senator \u0026 native attire designed for distinguished gentlemen and young royalty, featuring crisp embroidery and rich fabric.",
        "rating":  5,
        "reviewsCount":  12,
        "inStock":  true
    },
    {
        "id":  41,
        "title":  "Women Style 13",
        "category":  "Women \u0026 Girls",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240817_094217749-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240817_094217749-removebg-preview-300x300.png",
        "badge":  "",
        "tag":  "Exquisite",
        "description":  "Breathable, regal silhouette tailored from luxury silk Adire, rich lace, and vintage authentic fabrics, designed to accentuate elegance and grace.",
        "rating":  5,
        "reviewsCount":  12,
        "inStock":  true
    },
    {
        "id":  29,
        "title":  "Nicely \u0026 Beautifully sown African Girls Native attire",
        "category":  "Women \u0026 Girls",
        "price":  40,
        "originalPrice":  46,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_100650786-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_100650786-removebg-preview-300x300.png",
        "badge":  "",
        "tag":  "Exquisite",
        "description":  "Breathable, regal silhouette tailored from luxury silk Adire, rich lace, and vintage authentic fabrics, designed to accentuate elegance and grace.",
        "rating":  5,
        "reviewsCount":  27,
        "inStock":  true
    },
    {
        "id":  39,
        "title":  "UNISEX JACKET #8",
        "category":  "Jackets \u0026 Outerwear",
        "price":  60,
        "originalPrice":  69,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_151734148-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_151734148-removebg-preview-300x300.png",
        "badge":  "Popular",
        "tag":  "Unisex",
        "description":  "Bold African print statement jacket combining contemporary street style with vibrant traditional Ankara motifs. Unisex cut with premium finish.",
        "rating":  5,
        "reviewsCount":  11,
        "inStock":  true
    },
    {
        "id":  2,
        "title":  "24-inches-micro-twist",
        "category":  "Braided Wigs",
        "price":  120,
        "originalPrice":  138,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/24-inches-micro-twist-50x50.jpeg",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/24-inches-micro-twist-300x300.jpeg",
        "badge":  "Premium Luxury",
        "tag":  "Best Seller",
        "description":  "Handcrafted lightweight braided wig made with premium synthetic and human hair blend, natural scalp look, and pre-plucked hairline for effortless glamour.",
        "rating":  5,
        "reviewsCount":  26,
        "inStock":  true
    },
    {
        "id":  14,
        "title":  "Chocolate Coffee Brown Caftan",
        "category":  "Men \u0026 Boys",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_090348656-removebg-preview-1-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_090348656-removebg-preview-1-300x300.png",
        "badge":  "",
        "tag":  "Handcrafted",
        "description":  "Impeccably tailored African Senator \u0026 native attire designed for distinguished gentlemen and young royalty, featuring crisp embroidery and rich fabric.",
        "rating":  5,
        "reviewsCount":  33,
        "inStock":  true
    },
    {
        "id":  12,
        "title":  "Bubu Silky Adire",
        "category":  "Women \u0026 Girls",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240825_194607230-removebg-preview-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240825_194607230-removebg-preview-removebg-preview-300x300.png",
        "badge":  "Popular",
        "tag":  "Exquisite",
        "description":  "Breathable, regal silhouette tailored from luxury silk Adire, rich lace, and vintage authentic fabrics, designed to accentuate elegance and grace.",
        "rating":  5,
        "reviewsCount":  24,
        "inStock":  true
    },
    {
        "id":  22,
        "title":  "Lace Bubu",
        "category":  "Women \u0026 Girls",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/09/Lace-bubu-50x50.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/09/Lace-bubu-300x300.png",
        "badge":  "",
        "tag":  "Exquisite",
        "description":  "Breathable, regal silhouette tailored from luxury silk Adire, rich lace, and vintage authentic fabrics, designed to accentuate elegance and grace.",
        "rating":  5,
        "reviewsCount":  8,
        "inStock":  true
    },
    {
        "id":  19,
        "title":  "Kinky-twist-wig",
        "category":  "Braided Wigs",
        "price":  95,
        "originalPrice":  109.25,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Kinky-twist-wig-50x50.jpeg",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Kinky-twist-wig-300x300.jpeg",
        "badge":  "",
        "tag":  "Best Seller",
        "description":  "Handcrafted lightweight braided wig made with premium synthetic and human hair blend, natural scalp look, and pre-plucked hairline for effortless glamour.",
        "rating":  5,
        "reviewsCount":  23,
        "inStock":  true
    },
    {
        "id":  18,
        "title":  "Kinky-braided-wig",
        "category":  "Braided Wigs",
        "price":  95,
        "originalPrice":  109.25,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/WhatsApp-Image-2024-09-18-at-8.37.37-AM-50x50.jpeg",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/WhatsApp-Image-2024-09-18-at-8.37.37-AM-300x300.jpeg",
        "badge":  "Popular",
        "tag":  "Best Seller",
        "description":  "Handcrafted lightweight braided wig made with premium synthetic and human hair blend, natural scalp look, and pre-plucked hairline for effortless glamour.",
        "rating":  5,
        "reviewsCount":  34,
        "inStock":  true
    },
    {
        "id":  5,
        "title":  "Aso-Oke Traditional complete couple outfit for Yoruba weddings",
        "category":  "Men \u0026 Boys",
        "price":  120,
        "originalPrice":  138,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/09/WhatsApp_Image_2024-09-02_at_6.20.21_PM-removebg-preview-50x50.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/09/WhatsApp_Image_2024-09-02_at_6.20.21_PM-removebg-preview-300x300.png",
        "badge":  "Premium Luxury",
        "tag":  "Handcrafted",
        "description":  "Impeccably tailored African Senator \u0026 native attire designed for distinguished gentlemen and young royalty, featuring crisp embroidery and rich fabric.",
        "rating":  5,
        "reviewsCount":  8,
        "inStock":  true
    },
    {
        "id":  40,
        "title":  "UNISEX JACKET #9",
        "category":  "Jackets \u0026 Outerwear",
        "price":  60,
        "originalPrice":  69,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_152322382-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_152322382-removebg-preview-300x300.png",
        "badge":  "Sale 15% Off",
        "tag":  "Unisex",
        "description":  "Bold African print statement jacket combining contemporary street style with vibrant traditional Ankara motifs. Unisex cut with premium finish.",
        "rating":  5,
        "reviewsCount":  13,
        "inStock":  true
    },
    {
        "id":  21,
        "title":  "Knotless-Box-Braid-Wig",
        "category":  "Braided Wigs",
        "price":  180,
        "originalPrice":  207,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Knotless-Box-Braid-Wig-2-50x50.jpeg",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Knotless-Box-Braid-Wig-2-300x300.jpeg",
        "badge":  "Premium Luxury",
        "tag":  "Best Seller",
        "description":  "Handcrafted lightweight braided wig made with premium synthetic and human hair blend, natural scalp look, and pre-plucked hairline for effortless glamour.",
        "rating":  5,
        "reviewsCount":  34,
        "inStock":  true
    },
    {
        "id":  16,
        "title":  "JALAMIA",
        "category":  "Men \u0026 Boys",
        "price":  60,
        "originalPrice":  69,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240825_195751042-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240825_195751042-removebg-preview-300x300.png",
        "badge":  "",
        "tag":  "Handcrafted",
        "description":  "Impeccably tailored African Senator \u0026 native attire designed for distinguished gentlemen and young royalty, featuring crisp embroidery and rich fabric.",
        "rating":  5,
        "reviewsCount":  15,
        "inStock":  true
    },
    {
        "id":  4,
        "title":  "Afican Senator Style",
        "category":  "Men \u0026 Boys",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_161358071-removebg-preview-1-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_161358071-removebg-preview-1-300x300.png",
        "badge":  "",
        "tag":  "Handcrafted",
        "description":  "Impeccably tailored African Senator \u0026 native attire designed for distinguished gentlemen and young royalty, featuring crisp embroidery and rich fabric.",
        "rating":  5,
        "reviewsCount":  33,
        "inStock":  true
    },
    {
        "id":  36,
        "title":  "UNISEX JACKET #5",
        "category":  "Jackets \u0026 Outerwear",
        "price":  60,
        "originalPrice":  69,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_091007120-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_091007120-removebg-preview-300x300.png",
        "badge":  "Popular",
        "tag":  "Unisex",
        "description":  "Bold African print statement jacket combining contemporary street style with vibrant traditional Ankara motifs. Unisex cut with premium finish.",
        "rating":  5,
        "reviewsCount":  33,
        "inStock":  true
    },
    {
        "id":  33,
        "title":  "Nicely sown Female Dress",
        "category":  "Men \u0026 Boys",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240825_194743163-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Polish_20240825_194743163-removebg-preview-300x300.png",
        "badge":  "Popular",
        "tag":  "Handcrafted",
        "description":  "Impeccably tailored African Senator \u0026 native attire designed for distinguished gentlemen and young royalty, featuring crisp embroidery and rich fabric.",
        "rating":  5,
        "reviewsCount":  25,
        "inStock":  true
    },
    {
        "id":  27,
        "title":  "Micro-Tiny-twist-wig",
        "category":  "Braided Wigs",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Micro-Tiny-twist-wigf-50x50.jpeg",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Micro-Tiny-twist-wigf-300x300.jpeg",
        "badge":  "Popular",
        "tag":  "Best Seller",
        "description":  "Handcrafted lightweight braided wig made with premium synthetic and human hair blend, natural scalp look, and pre-plucked hairline for effortless glamour.",
        "rating":  5,
        "reviewsCount":  19,
        "inStock":  true
    },
    {
        "id":  28,
        "title":  "Mid-Part-Cornrow-Wig",
        "category":  "Braided Wigs",
        "price":  95,
        "originalPrice":  109.25,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Mid-Part-Cornrow-Wig-50x50.jpeg",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Mid-Part-Cornrow-Wig-300x300.jpeg",
        "badge":  "",
        "tag":  "Best Seller",
        "description":  "Handcrafted lightweight braided wig made with premium synthetic and human hair blend, natural scalp look, and pre-plucked hairline for effortless glamour.",
        "rating":  5,
        "reviewsCount":  17,
        "inStock":  true
    },
    {
        "id":  17,
        "title":  "Jalamia for men",
        "category":  "Men \u0026 Boys",
        "price":  60,
        "originalPrice":  69,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240825_202239052-removebg-preview-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240825_202239052-removebg-preview-300x300.png",
        "badge":  "",
        "tag":  "Handcrafted",
        "description":  "Impeccably tailored African Senator \u0026 native attire designed for distinguished gentlemen and young royalty, featuring crisp embroidery and rich fabric.",
        "rating":  5,
        "reviewsCount":  17,
        "inStock":  true
    },
    {
        "id":  23,
        "title":  "Locs-wig",
        "category":  "Braided Wigs",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Locs-wig-50x50.jpeg",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/07/Locs-wig-300x300.jpeg",
        "badge":  "",
        "tag":  "Best Seller",
        "description":  "Handcrafted lightweight braided wig made with premium synthetic and human hair blend, natural scalp look, and pre-plucked hairline for effortless glamour.",
        "rating":  5,
        "reviewsCount":  26,
        "inStock":  true
    },
    {
        "id":  31,
        "title":  "Nicely sown African Male Native attire",
        "category":  "Men \u0026 Boys",
        "price":  80,
        "originalPrice":  92,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_154639806-removebg-preview-1-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_154639806-removebg-preview-1-300x300.png",
        "badge":  "",
        "tag":  "Handcrafted",
        "description":  "Impeccably tailored African Senator \u0026 native attire designed for distinguished gentlemen and young royalty, featuring crisp embroidery and rich fabric.",
        "rating":  5,
        "reviewsCount":  10,
        "inStock":  true
    },
    {
        "id":  34,
        "title":  "Nicely sown Male Top and Trouser",
        "category":  "Men \u0026 Boys",
        "price":  60,
        "originalPrice":  69,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_155834177-removebg-preview-1-100x100.png",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_155834177-removebg-preview-1-300x300.png",
        "badge":  "",
        "tag":  "Handcrafted",
        "description":  "Impeccably tailored African Senator \u0026 native attire designed for distinguished gentlemen and young royalty, featuring crisp embroidery and rich fabric.",
        "rating":  5,
        "reviewsCount":  13,
        "inStock":  true
    },
    {
        "id":  20,
        "title":  "knotless brush box braids",
        "category":  "Braided Wigs",
        "price":  180,
        "originalPrice":  207,
        "image":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240816_094840113-100x100.jpg",
        "thumb":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240816_094840113-300x300.jpg",
        "badge":  "Premium Luxury",
        "tag":  "Best Seller",
        "description":  "Handcrafted lightweight braided wig made with premium synthetic and human hair blend, natural scalp look, and pre-plucked hairline for effortless glamour.",
        "rating":  5,
        "reviewsCount":  17,
        "inStock":  true
    }
];


const GALLERY_IMAGES = [
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_100322040-removebg-preview-2.png",
        "alt":  "Polish_20240817_100322040-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_150157922-removebg-preview-2.png",
        "alt":  "Nicely sown African Boys Native attire"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_150517344-removebg-preview-2.png",
        "alt":  "Polish_20240817_150517344-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_152922107-removebg-preview-1.png",
        "alt":  "Nicely sown African Boys Native attire"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_083006957-removebg-preview.png",
        "alt":  "Polish_20240817_083006957-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_083507453-removebg-preview.png",
        "alt":  "Polish_20240817_083507453-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_083845102-removebg-preview.png",
        "alt":  "Polish_20240817_083845102-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_84501535-removebg-preview.png",
        "alt":  "Polish_20240817_84501535-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_091307409-removebg-preview.png",
        "alt":  "Polish_20240817_091307409-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_091759859-removebg-preview.png",
        "alt":  "Polish_20240817_091759859-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_092227475-removebg-preview.png",
        "alt":  "Polish_20240817_092227475-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_092905353-removebg-preview.png",
        "alt":  "Polish_20240817_092905353-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_093846776-removebg-preview.png",
        "alt":  "Polish_20240817_093846776-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240818_162604191-removebg-preview.png",
        "alt":  "Polish_20240818_162604191-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240818_163311378-removebg-preview.png",
        "alt":  "Polish_20240818_163311378-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_152322382-removebg-preview-1.png",
        "alt":  "Polish_20240817_152322382-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_091007120-removebg-preview-2.png",
        "alt":  "Polish_20240817_091007120-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_151017330-removebg-preview-1.png",
        "alt":  "Polish_20240817_151017330-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_151129441-removebg-preview-1.png",
        "alt":  "Polish_20240817_151129441-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_151523892-removebg-preview-1.png",
        "alt":  "Polish_20240817_151523892-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_151734148-removebg-preview-1.png",
        "alt":  "Polish_20240817_151734148-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_145935053-removebg-preview-1.png",
        "alt":  "Polish_20240817_145935053-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_95835497-removebg-preview-1.png",
        "alt":  "Polish_20240817_95835497-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_100140957-removebg-preview-1.png",
        "alt":  "Polish_20240817_100140957-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_145624129-removebg-preview-1.png",
        "alt":  "Polish_20240817_145624129-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_154639806-removebg-preview-1.png",
        "alt":  "Nicely sown African Male Native attire"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_155132643-removebg-preview-1.png",
        "alt":  "Nicely sown African Male Native attire"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_155834177-removebg-preview-1.png",
        "alt":  "Nicely sown Male Top and Trouser"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_160842818-removebg-preview-1.png",
        "alt":  "Polish_20240817_160842818-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_161358071-removebg-preview-1.png",
        "alt":  "Polish_20240817_161358071-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_090002548-removebg-preview-1.png",
        "alt":  "Polish_20240817_090002548-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_090348656-removebg-preview-1.png",
        "alt":  "Chocolate Coffee Brown Caftan"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_091007120-removebg-preview-3.png",
        "alt":  "Polish_20240817_091007120-removebg-preview"
    },
    {
        "src":  "https://geisoenterprise.co.uk/wp-content/uploads/2024/08/Polish_20240817_154204766-removebg-preview-1.png",
        "alt":  "Polish_20240817_154204766-removebg-preview"
    }
]
;
