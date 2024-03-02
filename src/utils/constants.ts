export const routes = {
   login: "/auth/login",
   signup: "/auth/signup",
};

interface IEvent {
   id: string;
   name: string;
   date: string;
   location: string;
   image: string;
   description: string;
}

export const dummyGardeningEvents: IEvent[] = [
   {
      id: "EVT001",
      name: "Urban Oasis Gardening Workshop",
      date: "2024-03-15",
      location: "GreenSpace Hub, Metro City",
      image: "https://unsplash.com/photos/IVZn89VScag/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY3NDA5OTIy&force=true&w=1920", // Image of a gardening workshop
      description:
         "Join us at the Urban Oasis Gardening Workshop to learn how to transform your rooftop or balcony into a lush, productive space. This full-day event will cover everything from selecting the right plant varieties for urban environments to maximizing your space with vertical gardening techniques. Experts in urban horticulture will guide you through hands-on sessions, ensuring you leave with the knowledge and confidence to start your own urban garden. Whether you're a seasoned gardener looking to adapt to city life or a complete novice eager to green your surroundings, this workshop is for you.",
   },
   {
      id: "EVT002",
      name: "Heritage Seed Swap Meet",
      date: "2024-04-22",
      location: "Historic Farmstead, Pleasantville",
      image: "https://unsplash.com/photos/Y4qzW3AsvqI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8c2VlZHN8ZW58MHx8fHwxNjY3NDEwMDI0&force=true&w=1920", // Image of seeds in hands
      description:
         "The annual Heritage Seed Swap Meet is back! This event is a treasure trove for gardeners looking to discover rare and heirloom seed varieties. Connect with fellow gardening enthusiasts and preserve biodiversity by swapping seeds with stories. The meet will also feature workshops on seed saving techniques, talks on the importance of genetic diversity in our food crops, and stalls from local organic producers. Don't miss this opportunity to expand your garden with unique plants that have been cherished through generations.",
   },
   {
      id: "EVT003",
      name: "Community Garden Volunteer Day",
      date: "2024-05-30",
      location: "Sunshine Community Gardens, Lakeview",
      image: "https://unsplash.com/photos/Ml4tr2WO7JE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTh8fGdhcmRlbmluZ3xlbnwwfHx8fDE2NjczOTk5NTI&force=true&w=1920", // Image of community gardening
      description:
         "Lend a hand and be part of something bigger at the Community Garden Volunteer Day. Our community garden serves as a vital green space where people come together to grow food, flowers, and friendships. This event is perfect for anyone looking to get their hands dirty while making a positive impact. Activities will include planting new beds, repairing garden structures, and communal harvesting. It's a great way to learn about organic gardening practices, meet like-minded community members, and enjoy the fruits of collective labor. No previous gardening experience is required, just a willingness to contribute and learn.",
   },
   {
      id: "EVT004",
      name: "Sustainable Gardening Seminar",
      date: "2024-06-18",
      location: "Eco-Innovate Center, Old Town",
      image: "https://unsplash.com/photos/hBpGJtGbf_8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTJ8fHN1c3RhaW5hYmxlJTIwZ2FyZGVuaW5nfGVufDB8fHx8MTY2NzM5OTg0NQ&force=true&w=1920", // Image of sustainable gardening
      description:
         "Explore the principles of sustainable gardening at our in-depth seminar. This event is designed for gardeners of all levels who wish to deepen their understanding of eco-friendly practices. Topics will include composting, natural pest control, water conservation, and creating wildlife habitats within your garden. The seminar features presentations from leading experts in sustainable horticulture, interactive Q&A sessions, and a guided tour of the Eco-Innovate Center's demonstration gardens. Discover how to make your garden a model of sustainability and a haven for beneficial wildlife.",
   },
   {
      id: "EVT005",
      name: "Garden-to-Table Cooking Class",
      date: "2024-07-09",
      location: "Fresh Feast Kitchen, Riverdale",
      image: "https://unsplash.com/photos/IGfIGP5ONV0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8Y29va2luZyUyMGNsYXNzfGVufDB8fHx8MTY2NzM5OTg3NQ&force=true&w=1920", // Image of cooking class
      description:
         "From garden to table, learn how to cook delicious, seasonal meals with produce you can grow at home. Our cooking class is perfect for anyone looking to combine their love of gardening with a passion for cooking. Led by a renowned local chef and a gardening expert, this class will teach you how to plan your garden with your kitchen in mind, harvest at the peak of freshness, and prepare mouthwatering dishes that highlight the flavors of your homegrown produce. This hands-on experience will not only enhance your culinary skills but also deepen your appreciation for the garden as a source of nourishment and inspiration.",
   },
];

export const dummyGardeningResources: IResource[] = [
   {
      id: "0",
      onSale: true,
      name: "Community Garden Starter Kit",
      description:
         "Everything you need to start or expand your community garden, including seeds, tools, and guides.",
      image: "https://cdn.pixabay.com/photo/2017/06/02/18/24/watering-can-2367093_1280.jpg", // Image of gardening kit
      category: "community-gardening",
      price: "$99.99",
   },
   {
      id: "1",
      onSale: false,
      name: "Vertical Farming Setup Guide",
      description:
         "A comprehensive guide to starting your own urban farm with vertical gardening techniques.",
      image: "https://cdn.pixabay.com/photo/2020/05/15/18/46/plant-5177994_1280.jpg", // Image of vertical farming setup
      category: "urban-farming",
      price: "$29.99",
   },
   {
      id: "2",
      onSale: true,
      name: "Organic Pest Control Solutions",
      description:
         "Natural and safe pest control solutions ideal for community gardens and urban farms.",
      image: "https://cdn.pixabay.com/photo/2016/09/04/12/05/vegetables-1643794_1280.jpg", // Image of organic pest control
      category: "community-gardening",
      price: "$14.99",
   },
   {
      id: "3",
      onSale: true,
      name: "Space-Saving Container Gardens",
      description:
         "Maximize your growing space with our innovative container gardening solutions, perfect for urban environments.",
      image: "https://cdn.pixabay.com/photo/2018/04/29/11/54/urban-gardening-3359937_1280.jpg", // Image of container gardens
      category: "urban-farming",
      price: "$39.99",
   },
   {
      id: "4",
      onSale: false,
      name: "Water Conservation Systems for Gardens",
      description:
         "Sustainable water conservation systems that are easy to install and manage, suitable for all types of gardening.",
      image: "https://cdn.pixabay.com/photo/2017/08/01/11/48/blue-2564660_1280.jpg", // Image of water conservation system
      category: "community-gardening",
      price: "$199.99",
   },
];
export const resourceLibraryItems: IResourceLibraryItem[] = [
   {
      id: "0",
      title: "The Beginner's Guide to Starting a Community Garden",
      category: "community-gardening",
      description:
         "Discover the foundational steps to start your own community garden, from securing land to gathering your community and everything in between. This comprehensive guide offers insights into organizing your group, choosing the right crops, and designing your garden for maximum impact. Whether you're looking to grow fresh produce for your community, create a green space for education and relaxation, or foster local biodiversity, this guide has you covered.",
      images: [
         "https://unsplash.com/photos/ue2ZpYBHR8I/download?force=true&w=640", // Image of community meeting
         "https://unsplash.com/photos/MoDcnVRN5JU/download?force=true&w=640", // Image of garden planning
         "https://unsplash.com/photos/ILip77SbmOE/download?force=true&w=640", // Image of community garden
      ],
   },
   {
      id: "1",
      title: "Urban Farming Innovations: Maximizing Small Spaces",
      category: "urban-farming",
      description:
         "Explore the latest innovations in urban farming, including vertical gardening, hydroponics, and container gardening. This article delves into how city dwellers can transform their balconies, rooftops, and even windowsills into productive agricultural spaces. Learn about the technologies and techniques that are making it easier and more efficient to grow food in the heart of the city, reducing food miles and contributing to urban sustainability.",
      images: [
         "https://unsplash.com/photos/pElSkGRA2NU/download?force=true&w=640", // Image of vertical garden
         "https://unsplash.com/photos/Qf7JtGtGQbk/download?force=true&w=640", // Image of hydroponic setup
         "https://unsplash.com/photos/IGfIGP5ONV0/download?force=true&w=640", // Image of balcony garden
      ],
   },
   {
      id: "2",
      title: "Permaculture Principles for the Home Gardener",
      category: "community-gardening",
      description:
         "Permaculture is more than just a gardening technique; it's a philosophy for living in harmony with nature. This article introduces the core principles of permaculture and how they can be applied to home and community gardens. Discover how to design your garden ecosystem for sustainability, resilience, and abundance. Learn about the ethics of permaculture and how to implement its design principles in your gardening practice, creating spaces that nourish both people and the planet.",
      images: [
         "https://unsplash.com/photos/W6aMqXCVvCk/download?force=true&w=640", // Image of permaculture garden
         "https://unsplash.com/photos/RWAIyGmgHTQ/download?force=true&w=640", // Image of sustainable gardening
         "https://unsplash.com/photos/WeYamle9fDM/download?force=true&w=640", // Image of ecological design
      ],
   },
   {
      id: "3",
      title: "Green Technologies in Urban Farming",
      category: "urban-farming",
      description:
         "Urban farming is at the forefront of integrating green technologies to make agriculture more sustainable and efficient. This article reviews cutting-edge technologies, including IoT-based monitoring systems, automated watering and nutrient delivery systems, and energy-efficient LED grow lights. These innovations are helping urban farmers achieve higher yields, better crop quality, and lower environmental footprints. Whether you're a hobbyist or a professional urban farmer, understanding these technologies can elevate your urban farming game.",
      images: [
         "https://unsplash.com/photos/8pOTAtyd_Mc/download?force=true&w=640", // Image of IoT in agriculture
         "https://unsplash.com/photos/IQVFVH0ajag/download?force=true&w=640", // Image of automated urban farm
         "https://unsplash.com/photos/4PG6wLlVag4/download?force=true&w=640", // Image of LED grow lights
      ],
   },
];
export const host = "http://172.16.131.213:8000";

export const apis = {
   login: "login",
   signup: "signup",
   userData: "UserProfileView",
};
