/* eslint-disable react/prop-types */
export default function PlaceTree({ placesById, id, parentId, onComplete }) {
  const place = placesById[id];
  //console.log("place", place);

  const childIds = place.childIds;
  // console.log("childIds", childIds);

  return (
    <li>
      {place.title}
      <button
        onClick={() => {
          onComplete(parentId, id);
        }}
      >
        Complete
      </button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              onComplete={onComplete}
              key={childId}
              id={childId}
              placesById={placesById}
              parentId={id}
            />
          ))}
        </ol>
      )}
    </li>
  );
}
