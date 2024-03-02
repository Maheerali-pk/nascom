export const routes = {
   login: "/auth/login",
   signup: "/auth/signup",
};

export const dummyGardeningEvents: IEvent[] = [
   {
      name: "Spring Planting Festival",
      date: "2024-04-15",
      location: "Community Garden Park, Springfield",
      image: "https://cdn.pixabay.com/photo/2017/08/01/01/33/bean-2562249_1280.jpg", // Image of a garden planting
   },
   {
      name: "Urban Gardening Workshop",
      date: "2024-05-22",
      location: "Green Thumb Center, Downtown",
      image: "https://cdn.pixabay.com/photo/2016/11/29/09/16/gardening-1868925_1280.jpg", // Image of an urban gardening workshop
   },
   {
      name: "Harvest Celebration",
      date: "2024-09-10",
      location: "Local Farm Co-op, Riverside",
      image: "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_1280.jpg", // Image of harvest vegetables
   },
   {
      name: "Composting Basics Seminar",
      date: "2024-06-05",
      location: "Eco Learning Hub, Hilltown",
      image: "https://cdn.pixabay.com/photo/2019/05/29/19/04/compost-4238270_1280.jpg", // Image of composting seminar
   },
   {
      name: "Garden Design for Sustainability",
      date: "2024-07-20",
      location: "Nature's Way Academy, Lakeview",
      image: "https://cdn.pixabay.com/photo/2020/05/22/08/12/garden-5205789_1280.jpg", // Image of sustainable garden design
   },
];

export const dummyGardeningResources: IResource[] = [
   {
      id: 0,
      onSale: true,
      name: "Community Garden Starter Kit",
      description:
         "Everything you need to start or expand your community garden, including seeds, tools, and guides.",
      image: "https://cdn.pixabay.com/photo/2017/06/02/18/24/watering-can-2367093_1280.jpg", // Image of gardening kit
      category: "community-gardening",
      price: "$99.99",
   },
   {
      id: 1,
      onSale: false,
      name: "Vertical Farming Setup Guide",
      description:
         "A comprehensive guide to starting your own urban farm with vertical gardening techniques.",
      image: "https://cdn.pixabay.com/photo/2020/05/15/18/46/plant-5177994_1280.jpg", // Image of vertical farming setup
      category: "urban-farming",
      price: "$29.99",
   },
   {
      id: 2,
      onSale: true,
      name: "Organic Pest Control Solutions",
      description:
         "Natural and safe pest control solutions ideal for community gardens and urban farms.",
      image: "https://cdn.pixabay.com/photo/2016/09/04/12/05/vegetables-1643794_1280.jpg", // Image of organic pest control
      category: "community-gardening",
      price: "$14.99",
   },
   {
      id: 3,
      onSale: true,
      name: "Space-Saving Container Gardens",
      description:
         "Maximize your growing space with our innovative container gardening solutions, perfect for urban environments.",
      image: "https://cdn.pixabay.com/photo/2018/04/29/11/54/urban-gardening-3359937_1280.jpg", // Image of container gardens
      category: "urban-farming",
      price: "$39.99",
   },
   {
      id: 4,
      onSale: false,
      name: "Water Conservation Systems for Gardens",
      description:
         "Sustainable water conservation systems that are easy to install and manage, suitable for all types of gardening.",
      image: "https://cdn.pixabay.com/photo/2017/08/01/11/48/blue-2564660_1280.jpg", // Image of water conservation system
      category: "community-gardening",
      price: "$199.99",
   },
];
