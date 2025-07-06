// import React, { useEffect, useRef } from "react";

// const colors = [
//   "bg-[#E85843]",
//   "bg-[#1A54CF]",
//   "bg-[#24D97F]",
//   "bg-[#9D56F7] w-[700px]",
//   "bg-[#FAC952]",
//   "bg-[#1A54CF]",
//   "bg-[#9D56F7]",
//   "bg-[#24D97F] w-[700px]",
//   "bg-[#E85843]",
//   "bg-[#FAC952] w-[700px]",
//   "bg-[#1A54CF]",
//   "bg-[#24D97F]",
//   "bg-[#9D56F7]",
//   "bg-[#FAC952]",
//   "bg-[#E85843]",
//   "bg-[#24D97F] w-[700px]",
//   "bg-[#9D56F7]",
//   "bg-[#1A54CF]",
//   "bg-[#FAC952]",
//   "bg-[#E85843] w-[700px]",
// ];

// const Block = ({ className }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const element = ref.current;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           element.classList.add("animate-appear");
//           observer.unobserve(element);
//         }
//       },
//       {
//         threshold: 0.3,
//       }
//     );
//     observer.observe(element);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`h-[200px] m-12 border border-black shadow-xl opacity-0 transition-opacity duration-700 ${className}`}
//     ></div>
//   );
// };

// const Initiatives = () => {
//   return (
//     <div className="w-full">
//       <h1 className="h-screen text-center text-5xl flex items-center justify-center">
//         Animate On Scroll
//       </h1>
//       <div className="flex flex-wrap items-center justify-center w-full">
//         {colors.map((color, index) => (
//           <Block key={index} className={color} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Initiatives;

// import React, { useEffect, useRef } from "react";

// const colors = [
//   "bg-[#E85843]",
//   "bg-[#1A54CF]",
//   "bg-[#24D97F]",
//   "bg-[#9D56F7] w-[700px]",
//   "bg-[#FAC952]",
//   "bg-[#1A54CF]",
//   "bg-[#9D56F7]",
//   "bg-[#24D97F] w-[700px]",
//   "bg-[#E85843]",
//   "bg-[#FAC952] w-[700px]",
//   "bg-[#1A54CF]",
//   "bg-[#24D97F]",
//   "bg-[#9D56F7]",
//   "bg-[#FAC952]",
//   "bg-[#E85843]",
//   "bg-[#24D97F] w-[700px]",
//   "bg-[#9D56F7]",
//   "bg-[#1A54CF]",
//   "bg-[#FAC952]",
//   "bg-[#E85843] w-[700px]",
// ];

// const Block = ({ className }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const el = ref.current;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           el.classList.remove("opacity-0", "translate-y-10");
//           el.classList.add("opacity-100", "translate-y-0");
//           observer.unobserve(el);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`h-[200px] m-12 border border-black shadow-xl transition duration-700 ease-out transform opacity-0 translate-y-10 ${className}`}
//     ></div>
//   );
// };

// const Initiative = () => {
//   return (
//     <div className="w-full">
//       <h1 className="h-screen text-center text-5xl flex items-center justify-center">
//         Animate On Scroll
//       </h1>
//       <div className="flex flex-wrap items-center justify-center w-full">
//         {colors.map((color, index) => (
//           <Block key={index} className={color} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Initiative;

// import React, { useEffect, useRef } from "react";

// import { FadeonScroll } from "./FadeonScroll";

// const colors = [
//   "bg-[#E85843]",
//   "bg-[#1A54CF]",
//   "bg-[#24D97F]",
//   "bg-[#9D56F7] w-[700px]",
//   "bg-[#FAC952]",
//   "bg-[#1A54CF]",
//   "bg-[#9D56F7]",
//   "bg-[#24D97F] w-[700px]",
//   "bg-[#E85843]",
//   "bg-[#FAC952] w-[700px]",
//   "bg-[#1A54CF]",
//   "bg-[#24D97F]",
//   "bg-[#9D56F7]",
//   "bg-[#FAC952]",
//   "bg-[#E85843]",
//   "bg-[#24D97F] w-[700px]",
//   "bg-[#9D56F7]",
//   "bg-[#1A54CF]",
//   "bg-[#FAC952]",
//   "bg-[#E85843] w-[700px]",
// ];

// const Block = ({ className }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const el = ref.current;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           el.classList.add("opacity-100", "translate-y-0");
//           el.classList.remove("opacity-0", "translate-y-10");
//         } else {
//           el.classList.remove("opacity-100", "translate-y-0");
//           el.classList.add("opacity-0", "translate-y-10");
//         }
//       },
//       { threshold: 0.1 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`h-[200px] m-12 border border-black shadow-xl transition duration-700 ease-out transform opacity-0 translate-y-10 ${className}`}
//     ></div>
//   );
// };

// const Initiative = () => {
//   const { ref, fadeClass } = FadeonScroll();

//   return (
//     <div className="w-full h-[500px] bg-amber-950">

{
  /* <h1 className="h-screen text-center text-5xl flex items-center justify-center">
        Animate On Scroll
      </h1>
      <div className="flex flex-wrap items-center justify-center w-full">
        {colors.map((color, index) => (
          <Block key={index} className={color} />
        ))}
      </div> */
}
{
  /* <div> */
}
{
  /* <div className="animate-slideIn flex justify-end gap-2 w-full bg-amber-950">
        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4 bg-amber-200 w-1/2">
          <strong className="font-medium">Company Name Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae beatae quas necessitatibus labore autem inventore culpa, distinctio est odio aut ullam voluptas quo perspiciatis esse soluta quibusdam? Obcaecati, in!</strong>

          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

          <p className="mt-0.5 opacity-50 sm:mt-0">Branding / Signage Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus optio atque inventore dolor tempora debitis, incidunt pariatur id, reiciendis dignissimos veniam dolore sint assumenda quae suscipit voluptates in numquam laboriosam.</p>
        </div>

        <img
          alt=""
          src="/images/CLG-4428.jpg"
          className="animate-zoomIn h-56 w-100 rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72"
        />
      </div> */
}

{
  /* <div
        ref={ref}
        className={`transition-opacity duration-1000 ${fadeClass} bg-yellow-400 p-10 rounded-lg shadow-lg`}
      >
        <h2 className="text-2xl font-bold">Scroll to center me 🎯</h2>
        <p>I fade in when in center, and out when not.</p>
      </div>

      <div
        ref={ref}
        className={`transition-opacity duration-1000 ${fadeClass} bg-yellow-400 p-10 rounded-lg shadow-lg`}
      >
        <h2 className="text-2xl font-bold">Scroll to center me 🎯</h2>
        <p>I fade in when in center, and out when not.</p>
      </div>

      <div
        ref={ref}
        className={`transition-opacity duration-1000 ${fadeClass} bg-yellow-400 p-10 rounded-lg shadow-lg`}
      >
        <h2 className="text-2xl font-bold">Scroll to center me 🎯</h2>
        <p>I fade in when in center, and out when not.</p>
      </div>

      <div
        ref={ref}
        className={`transition-opacity duration-1000 ${fadeClass} bg-yellow-400 p-10 rounded-lg shadow-lg`}
      >
        <h2 className="text-2xl font-bold">Scroll to center me 🎯</h2>
        <p>I fade in when in center, and out when not.</p>
      </div>
    </div>
  );
};

export default Initiative; */
}

// {
/* <a href="#" className="block">
  <img
    alt=""
    src="/images/CLG-4428.jpg"
    className="h-56 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72"
  />

  <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
    <strong className="font-medium">Company Name Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, cum.</strong>

    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

    <p className="mt-0.5 opacity-50 sm:mt-0">Branding / Signage  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo natus nisi ipsum eveniet illo! Iure sunt, recusandae magni distinctio exercitationem est voluptatibus quos, optio, voluptatem tenetur dolorum debitis voluptate delectus.</p>
  </div>
</a>; */
// }

import React from "react";
import { useFadeOnScroll } from "./FadeonScroll";

// const FadingBlock = ({ children }) => {
//   const { ref, fadeClass } = useFadeOnScroll();

//   return (
//     <div
//       ref={ref}
//       className={`bg-yellow-400 p-10 m-5 flex rounded-lg shadow-lg ${fadeClass}`}
//     >
//       {children}
//     </div>
//   );
// };

const FadingBlock = ({ children }) => {
  const { ref, fadeClass } = useFadeOnScroll();

  return (
    <div
      ref={ref}
      className={`bg-yellow-400 p-6 sm:p-8 md:p-10 m-4 sm:m-6 flex flex-col md:flex-row gap-4 rounded-lg shadow-lg max-w-[90vw] md:max-w-[800px] ${fadeClass}`}
    >
      {children}
    </div>
  );
};

const Initiative = () => {
  return (
    <div className="w-full min-h-screen bg-amber-950 flex flex-col items-center">
      <FadingBlock>
        {/* <h2 className="text-2xl font-bold">Scroll to center me 🎯</h2> */}
        {/* <img src="/images/CLG0633.jpg" className="h-50 w-50 object-cover"></img> */}
        <img
          src="/images/CLG0633.jpg"
          className="w-full md:w-1/3 object-cover rounded-lg"
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          voluptatem, numquam laudantium, animi a velit officia unde omnis
          corporis beatae accusamus dicta quisquam dolorem, cumque aliquam!
          Facilis adipisci rem sapiente ipsum nemo aspernatur explicabo ex cum
          voluptatibus, dolor nulla! Sunt excepturi quae architecto. Totam,
          impedit quas voluptas fugit velit optio molestiae ab beatae sint.
          Harum neque minus dicta nesciunt temporibus dignissimos deleniti
          officiis minima maxime et ut quia iure perferendis quas corporis
          voluptatibus, reiciendis illo in sapiente, facere, saepe tempora.
          Ratione, voluptate accusantium esse perspiciatis unde sint magnam,
          illum excepturi, ullam perferendis sit eos quisquam eius quae mollitia
          porro nobis!.
        </p>
      </FadingBlock>

      <FadingBlock>
        {/* <h2 className="text-2xl font-bold">Another block in motion 🎨</h2> */}
        {/* <img src="/images/CLG0633.jpg" className="h-50 w-50 object-cover"></img> */}
        <img
          src="/images/CLG0633.jpg"
          className="w-full md:w-1/3 object-cover rounded-lg"
        />

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eum
          facere dolore laboriosam, esse blanditiis impedit earum molestias
          praesentium quidem aliquam. Corporis totam aperiam, corrupti laborum
          blanditiis doloremque sunt quis!
        </p>
      </FadingBlock>

      <FadingBlock>
        {/* <h2 className="text-2xl font-bold">Scroll magic continues ✨</h2> */}
        {/* <img src="/images/CLG0633.jpg" className="h-50 w-50 object-cover"></img> */}
        <img
          src="/images/CLG0633.jpg"
          className="w-full md:w-1/3 object-cover rounded-lg"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          itaque recusandae libero nisi, maiores inventore et officiis dolorem
          quas, nihil impedit. Placeat maiores numquam quaerat suscipit ipsam
          reprehenderit consequatur temporibus esse a architecto earum dicta
          debitis itaque, soluta, in rem culpa ullam inventore hic fuga?
          Perferendis vitae cumque omnis quisquam odit odio distinctio eius,
          rerum dolore est earum deleniti facere? Expedita quia amet dignissimos
          in. Facilis, tenetur asperiores. Saepe, rem tenetur molestias
          temporibus harum voluptatum laboriosam porro amet. Dolores,
          repellendus. Dolores delectus architecto accusantium enim, quibusdam
          iusto sapiente eius voluptate a consectetur quod nisi in magni,
          corrupti maiores facere doloremque.
        </p>
      </FadingBlock>
    </div>
  );
};

export default Initiative;
