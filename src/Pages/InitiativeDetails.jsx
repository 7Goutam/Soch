import React from "react";
import { useFadeOnScroll } from "../Components/FadeonScroll";

// const FadingBlock = ({ children }) => {
//   const { ref, fadeClass } = useFadeOnScroll();

//   return (
//     <div
//       ref={ref}
//       className={`bg-yellow-100 p-6 sm:p-8 md:p-10 m-4 sm:m-6 flex flex-col md:flex-row md:items-center gap-6 rounded-lg shadow-lg max-w-[90vw] md:max-w-[800px] ${fadeClass}`}
//     >
//       {children}
//     </div>
//   );
// };

const FadingBlock = ({ imageSrc, heading, text }) => {
  const { ref, fadeClass } = useFadeOnScroll();

  return (
    <div
      ref={ref}
      className={`bg-yellow-100 p-6 sm:p-8 md:p-10 m-4 sm:m-6 flex flex-col md:flex-row gap-6 rounded-lg shadow-lg max-w-[90vw] md:max-w-[800px] ${fadeClass}`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/3">
        <img
          src={imageSrc}
          alt={heading}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
          {heading}
        </h2>
        <p className="text-sm sm:text-base text-gray-800">{text}</p>
      </div>
    </div>
  );
};

const InitiativeDetails = () => {
  return (
    <div className="mt-16 w-full min-h-screen bg-gray-950 flex flex-col items-center">
      <FadingBlock
        imageSrc="/images/CLG0633.jpg"
        heading="Vastra Samman"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore voluptatem...  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
//         voluptatem, numquam laudantium, animi a velit officia unde omnis
//         corporis beatae accusamus dicta quisquam dolorem, cumque aliquam!
//         Facilis adipisci rem sapiente ipsum nemo aspernatur explicabo ex cum
//         voluptatibus, dolor nulla! Sunt excepturi quae architecto. Totam,
//         impedit quas voluptas fugit velit optio molestiae ab beatae sint.
//         Harum neque minus dicta nesciunt temporibus dignissimos deleniti
//         officiis minima maxime et ut quia iure perferendis quas corporis
//         voluptatibus, reiciendis illo in sapiente, facere, saepe tempora.
//         Ratione, voluptate accusantium esse perspiciatis unde sint magnam,
//         illum excepturi, ullam perferendis sit eos quisquam eius quae mollitia
//         porro nobis!."
      />
      <FadingBlock
        imageSrc="/images/CLG0633.jpg"
        heading="Vastra Samman"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eum facere..."
      />
      <FadingBlock
        imageSrc="/images/CLG0633.jpg"
        heading="Vastra Samman"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque..."
      />
            <FadingBlock
        imageSrc="/images/CLG0633.jpg"
        heading="Vastra Samman"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque..."
      />
            <FadingBlock
        imageSrc="/images/CLG0633.jpg"
        heading="Vastra Samman"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque..."
      />
            <FadingBlock
        imageSrc="/images/CLG0633.jpg"
        heading="Vastra Samman"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque..."
      />
    </div>
  );
};

// return (
//   <div className="mt-15 w-full min-h-screen bg-gray-950 flex flex-col items-center">
//     <FadingBlock>
//       <img
//         src="/images/CLG0633.jpg"
//         className="w-full md:w-1/3 object-cover rounded-lg"
//       />
//        <h2>Vastra Samman</h2>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
//         voluptatem, numquam laudantium, animi a velit officia unde omnis
//         corporis beatae accusamus dicta quisquam dolorem, cumque aliquam!
//         Facilis adipisci rem sapiente ipsum nemo aspernatur explicabo ex cum
//         voluptatibus, dolor nulla! Sunt excepturi quae architecto. Totam,
//         impedit quas voluptas fugit velit optio molestiae ab beatae sint.
//         Harum neque minus dicta nesciunt temporibus dignissimos deleniti
//         officiis minima maxime et ut quia iure perferendis quas corporis
//         voluptatibus, reiciendis illo in sapiente, facere, saepe tempora.
//         Ratione, voluptate accusantium esse perspiciatis unde sint magnam,
//         illum excepturi, ullam perferendis sit eos quisquam eius quae mollitia
//         porro nobis!.
//       </p>
//     </FadingBlock>

//     <FadingBlock>
//       <img
//         src="/images/CLG0633.jpg"
//         className="w-full md:w-1/3 object-cover rounded-lg"
//       />
//        <h2>Vastra Samman</h2>

//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eum
//         facere dolore laboriosam, esse blanditiis impedit earum molestias
//         praesentium quidem aliquam. Corporis totam aperiam, corrupti laborum
//         blanditiis doloremque sunt quis!
//       </p>
//     </FadingBlock>

//     <FadingBlock>
//       <img
//         src="/images/CLG0633.jpg"
//         className="w-full md:w-1/3 object-cover rounded-lg"
//       />
//       <h2>Vastra Samman</h2>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
//         itaque recusandae libero nisi, maiores inventore et officiis dolorem
//         quas, nihil impedit. Placeat maiores numquam quaerat suscipit ipsam
//         reprehenderit consequatur temporibus esse a architecto earum dicta
//         debitis itaque, soluta, in rem culpa ullam inventore hic fuga?
//         Perferendis vitae cumque omnis quisquam odit odio distinctio eius,
//         rerum dolore est earum deleniti facere? Expedita quia amet dignissimos
//         in. Facilis, tenetur asperiores. Saepe, rem tenetur molestias
//         temporibus harum voluptatum laboriosam porro amet. Dolores,
//         repellendus. Dolores delectus architecto accusantium enim, quibusdam
//         iusto sapiente eius voluptate a consectetur quod nisi in magni,
//         corrupti maiores facere doloremque.
//       </p>
//     </FadingBlock>

//     <FadingBlock>
//       <img
//         src="/images/CLG0633.jpg"
//         className="w-full md:w-1/3 object-cover rounded-lg"
//       />

//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eum
//         facere dolore laboriosam, esse blanditiis impedit earum molestias
//         praesentium quidem aliquam. Corporis totam aperiam, corrupti laborum
//         blanditiis doloremque sunt quis!
//       </p>
//     </FadingBlock>

//           <FadingBlock>
//       <img
//         src="/images/CLG0633.jpg"
//         className="w-full md:w-1/3 object-cover rounded-lg"
//       />
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
//         itaque recusandae libero nisi, maiores inventore et officiis dolorem
//         quas, nihil impedit. Placeat maiores numquam quaerat suscipit ipsam
//         reprehenderit consequatur temporibus esse a architecto earum dicta
//         debitis itaque, soluta, in rem culpa ullam inventore hic fuga?
//         Perferendis vitae cumque omnis quisquam odit odio distinctio eius,
//         rerum dolore est earum deleniti facere? Expedita quia amet dignissimos
//         in. Facilis, tenetur asperiores. Saepe, rem tenetur molestias
//         temporibus harum voluptatum laboriosam porro amet. Dolores,
//         repellendus. Dolores delectus architecto accusantium enim, quibusdam
//         iusto sapiente eius voluptate a consectetur quod nisi in magni,
//         corrupti maiores facere doloremque.
//       </p>
//     </FadingBlock>

//   </div>
//   );
// };

export default InitiativeDetails;
