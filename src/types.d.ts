interface IUser {
   username: string;
   experience: number;
   location: string;
   isCommunityMemeber: boolean;
}
interface IEvent {
   name: string;
   date: string;
   location: string;
   image: string;
}
type FarmingType = "community-gardening" | "urban-farming";

type EventStatus = "open" | "closed" | "attending" | "participating";

interface IResource {
   id: number;
   name: string;
   description: string;
   image: string;
   category: FarmingType;
   price: string;
   onSale: boolean;
}
