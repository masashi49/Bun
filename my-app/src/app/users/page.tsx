type User = {
  id: number;
  name: string;
};

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");

  const users = res.json();

  console.log(users);

  return <>a</>;
}
