import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <h1 className="container mx-auto flex items-center">Home</h1>
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <div className=" bg-green-300 h-[fit-content]">
          <h3>Categories:</h3>
          <ul className="flex gap-6 list-none  ">
            <li className="hover:text-sky-400">
              <Link href="/iphone">iPhone</Link>
            </li>
            <li className="hover:text-sky-400">
              <Link href="/watch">Watch</Link>
            </li>
            <li className="hover:text-sky-400">
              <Link href="/macbook">Macbook</Link>
            </li>
          </ul>
        </div>
        <div className=" bg-orange-300 col-span-3 min-h-[fit-content]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          eveniet labore aspernatur veritatis quis vel dignissimos enim harum
          earum unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Debitis sint molestias vero nulla neque voluptates voluptatibus sed
          odit? Repudiandae sapiente, dolorem debitis asperiores, libero maiores
          nam, delectus cum vero ducimus illum iusto veritatis! Commodi animi
          sequi illo porro fugiat ex obcaecati repudiandae in recusandae maiores
          laboriosam beatae ipsum sed placeat, reprehenderit voluptatem
          possimus, cum excepturi ipsam qui repellendus quo praesentium, quaerat
          consectetur. Fugiat quia eius harum, facere provident fuga! Distinctio
          sequi totam, quis error maxime facere iure excepturi ullam architecto
          eum nisi nulla at nam impedit possimus quidem minus inventore in
          tenetur? Labore ad nemo a amet voluptates, expedita fugit! Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Adipisci eveniet labore
          aspernatur veritatis quis vel dignissimos enim harum earum unde.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis sint
          molestias vero nulla neque voluptates voluptatibus sed odit?
          Repudiandae sapiente, dolorem debitis asperiores, libero maiores nam,
          delectus cum vero ducimus illum iusto veritatis! Commodi animi sequi
          illo porro fugiat ex obcaecati repudiandae in recusandae maiores
          laboriosam beatae ipsum sed placeat, reprehenderit voluptatem
          possimus, cum excepturi ipsam qui repellendus quo praesentium, quaerat
          consectetur. Fugiat quia eius harum, facere provident fuga! Distinctio
          sequi totam, quis error maxime facere iure excepturi ullam architecto
          eum nisi nulla at nam impedit possimus quidem minus inventore in
          tenetur? Labore ad nemo a amet voluptates, expedita fugit! eque
          voluptates voluptatibus sed odit? Repudiandae sapiente, dolorem
          debitis asperiores, libero maiores nam, delectus cum vero ducimus
          illum iusto veritatis! Commodi animi sequi illo porro fugiat ex
          obcaecati repudiandae in recusandae maiores laboriosam beatae ipsum
          sed placeat, reprehenderit voluptatem possimus, cum excepturi ipsam
          qui repellendus quo praesentium, quaerat consectetur. Fugiat quia eius
          harum, facere provident fuga! Distinctio sequi totam, quis error
          maxime facere iure excepturi ullam architecto eum nisi nulla at nam
          impedit possimus quidem minus inventore in tenetur? Labore ad nemo a
          amet voluptates, expedita fugit!
        </div>
      </div>
    </main>
  );
}
