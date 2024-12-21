// "use client";

// import InteractiveAvatar from "@/components/InteractiveAvatar";
// export default function App() {

//   return (
//     <div className="w-screen h-screen flex flex-col">
//       <div className="w-[900px] flex flex-col items-start justify-start gap-5 mx-auto pt-4 pb-20">
//         <div className="w-full">
//           <InteractiveAvatar />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import InteractiveAvatar from "@/components/InteractiveAvatar";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-8">
        <div className="w-full">
          <InteractiveAvatar />
        </div>
      </div>
    </div>
  );
}
