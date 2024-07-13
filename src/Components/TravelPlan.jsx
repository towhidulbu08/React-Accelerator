import { useState } from "react";
import { initialTravelPlan } from "../data/places-normalize.js";
import PlaceTree from "./PlaceTree.jsx";

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  //console.log(plan);

  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };
  return (
    <>
      <h2>Places to Travel</h2>
      <ol>
        {planetIds.map((placeId) => (
          <PlaceTree
            onComplete={handleComplete}
            id={placeId}
            placesById={plan}
            key={placeId}
            parentId={0}
          />
        ))}
      </ol>
    </>
  );
}
