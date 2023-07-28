import Boots from "../../components/Boots";

const dataGet = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();
  return data;
};
export default async function Home() {
  const dataUser = await dataGet();
  console.log(dataUser);
  return (
    <div className="cards">
      {dataUser.map((el, i) => (
        <Boots key={i} user={el} />
      ))}
    </div>
  );
}
