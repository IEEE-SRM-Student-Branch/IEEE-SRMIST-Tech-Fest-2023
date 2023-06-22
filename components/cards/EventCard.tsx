import { Event } from "@/pages/events/types/types";

interface eventProps {
  event: Event;
}
const EventCard = (props: eventProps) => {
  return (
    <div className="w-[800px] space-x-10 flex">
      {/* alter the width to size the cards  */}
      <div className="image-container w-2/3">
        <img
          alt="Event-image"
          className="image h-full"
          src={props.event.cover}
        />
      </div>
      <div className="card-contents flex flex-col w-full">
        <h1 className="font-syne text-start text-xl font-bold">
          {props.event.name}
        </h1>
        <p className="font-spaceMono text-cardDescription text-xs">
          {props.event.description}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
