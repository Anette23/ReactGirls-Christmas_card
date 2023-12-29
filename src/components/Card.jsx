import tree from "../assets/img/tree.svg";
import Button from "./Button";
const Card = () => {
  return (
    <>
    <main className="snow px-4 pt-8 grid place-content-center gap-8 lg:grid-cols-2 lg:items-center lg:pt-20 lg:px-14">
      <aside className="card bg-[rgba(255,255,255,0.15)] overflow-hidden max-w-[35rem] max-h-[25rem] animate-[cardAnim_5s_ease_0s_1_normal_forwards] p-6 rounded-lg border-2 border-solid border-[rgba(255,255,255,0.2)] flex flex-col gap-8 text-center">
        <article className="text-container">
          <h1 className=" text-primary tracking-[2px]">Veselé Vianoce</h1>
          <p className="text-text ">
          Šupinku pre šťastie, schovaj si do dlane, radosť ti prinesie, smútok vraj zaženie. K vianočnej pohode rozkroj si jabĺčko, prajem ti zo srdca zdravie a šťastíčko.
            </p>
        </article>
        <article>
        <Button />
      </article>
      </aside>
      <aside className="flex justify-center">
        <img src={tree} alt="Christmas tree" className="tree" />
      </aside>
    </main>
    </>
  );
};

export default Card;
