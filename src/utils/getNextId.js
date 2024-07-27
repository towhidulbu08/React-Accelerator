const getNextId = (data) => {
  const maxId = data.reduce((prev, curr) =>
    prev.id > curr.id ? prev.id : curr.id
  );
  return maxId + 1;
};

export default getNextId;
