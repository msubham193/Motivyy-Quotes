import Feed from "@/components/Feed";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          {" "}
          Motivational Quotes
        </span>
      </h1>
      <p className="desc text-center">
        Motivyy is an open-source Motivational Quotes sharing application . you
        can share your thoughts with others.
      </p>

      <Feed />
    </section>
  );
}
