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

// "use client";

// import InteractiveAvatar from "@/components/InteractiveAvatar";
// import { Suspense } from 'react';

// export default function App() {
//   return (
//     <div className="min-h-screen w-full bg-gray-50">
//       <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-8">
//         <div className="w-full">
//           <InteractiveAvatar />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { Suspense } from 'react';
import { Spinner } from "@nextui-org/react";
import InteractiveAvatar from '@/components/InteractiveAvatar';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-8">
        <div className="w-full">
          <Suspense 
            fallback={
              <div className="w-full h-[600px] flex items-center justify-center bg-black rounded-lg">
                <Spinner color="default" size="lg" />
              </div>
            }
          >
            <InteractiveAvatar />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
