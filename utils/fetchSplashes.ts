export const fetchSplashes = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSplashes`
  );

  const data = await res.json();
  const splashes: Splash[] = data.splashes;

  return splashes;
};
