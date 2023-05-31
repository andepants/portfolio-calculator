import InputForm from "../components/InputForm";
import "../styles/Page.css";

export default async function Home() {
  return (
    <main>
      <h1 className="flex justify-center m-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className=" text-customColor">Stock Portfolio Calculator</span>
      </h1>
      <span className="flex m-4 justify-center text-3xl font-extrabold text-gray-400 md:text-md lg:text-lg">Calculates the return on your stock portfolio based on the initial investment</span>
      <InputForm />
    </main>
  );
}
