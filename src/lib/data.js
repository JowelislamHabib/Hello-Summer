export const getProducts = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/JowelislamHabib/Hello-Summer/main/public/data.json",
    {
      cache: "no-store",
    },
  );
  const data = await res.json();
  return data;
};
