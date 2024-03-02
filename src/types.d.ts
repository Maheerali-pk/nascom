interface IUser {
   username: string;
   experience: number;
   location: string;
   isCommunityMemeber: boolean;
}
interface IEvent {
   id: string;
   name: string;
   date: string;
   location: string;
   image: string;
   description: string;
}
type FarmingType = "community-gardening" | "urban-farming";

type EventStatus = "open" | "closed" | "attending" | "participating";

interface IResource {
   id: string;
   name: string;
   description: string;
   image: string;
   category: FarmingType;
   price: string;
   onSale: boolean;
}

interface IResourceLibraryItem {
   id: string;
   title: string;
   category: FarmingType;
   description: string;
   images: string[];
}
