'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { formulalBold, formulalRegular } from '@/lib/fonts'
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  return (
    <div className={formulalRegular.className}>
      <main className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8">
          {/* Encabezado  */}
          <div className="space-y-6">
            <div className='flex justify-center items-center '>
              <Image src="/f1-logo.png" alt="F1 Logo" width={140} height={0} className="pr-5" />
              <Image src="/heineken.jpg" alt="Sponsor Logo" width={120} height={0} className="border-l border-neutral-600 pl-5" />
            </div> 
            <div className='flex justify-center items-center'>
              <h1 className='text-white text-center text-3xl pb-6'>F1 Fan Challenge</h1>
            </div> 
          </div>

          {/* Tarjeta de contenido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-neutral-100 rounded-2xl p-6 py-10 space-y-6 shadow-xl"
          >
            <div className='flex justify-center items-center'>
              <div className={formulalBold.className}>
                <h1 className='text-black text-center text-2xl'>Prove your Formula1 knowledge in <span className='text-[#E10600]'>10 quick questions</span></h1>  
              </div>
            </div> 

            <button
              onClick={() => router.push('/quiz')}
              className="w-full py-4 bg-[#E10600] hover:bg-red-700 rounded-xl
              text-white font-medium text-lg transition-all duration-200
              active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500
              flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Try now</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            <div className="flex justify-center space-x-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-1 w-8 bg-gray-800 rounded-full"
                />
              ))}
            </div>
          </motion.div>

          {/* Disclaimer tipo cookies */}
          {showDisclaimer && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-neutral-800/80 border border-red-900/30 rounded-lg p-4 text-center"
            >
              <p className="text-neutral-400 text-xs">
                This demo is not commercially affiliated with or endorsed by 
                <span className="block md:inline"> Formula 1, Heineken, or any associated brands.</span>
                <br />All trademarks belong to their respective owners.
              </p>
              <button
                onClick={() => setShowDisclaimer(false)}
                className="mt-2 text-red-500 hover:text-red-400 text-xs cursor-pointer"
              >
                [Close]
              </button>
            </motion.div>
          )}

          {/* Detalles de diseño móvil */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <div className="text-neutral-500 text-sm flex items-center">
              <span>Hit over 80% and get a prize</span>
            </div>
          </motion.div>
        </div>
      </main>
    </div> 
  );
}