'use client';
import { formulalRegular } from '@/lib/fonts';
import { useQuiz } from '../../context/QuizContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

export default function ResultPage() {
  const { score } = useQuiz();
  const router = useRouter();

  useEffect(() => {
    if (score === null) {
      router.push('/');
    }
  }, [score, router]);

  if (score === null) return null;

  const isWinner = score >= 80;

  return (
    <div className={formulalRegular.className}>
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className='flex justify-center items-center '>
          <Image src="/f1-logo.png" alt="F1 Logo" width={180} height={0} className="pr-5" />
          <Image src="/heineken.jpg" alt="Sponsor Logo" width={150} height={0} className="border-l border-neutral-600 pl-5" />
        </div>
        {/* <h1 className="text-5xl text-[#E10600]">Final result!</h1> */}
        <p className="text-2xl">You obtained an <span className="text-[#E10600]">{score}%</span></p>

        {isWinner ? (
          <>
            <p className="text-xl text-[#048644]"><span className='text-3xl text-white'>Congratulations!</span> <br></br>You have won a prize.</p>
            <p className="text-sm text-neutral-100">Go to the stand and show this code:</p>
            <div className="bg-white text-black py-3 px-6 rounded-lg font-mono inline-block mr-2">
              AW-{Math.floor(Math.random() * 100000)}
            </div>
          </>
        ) : (
          <>
            <p className="text-lg text-gray-300">You did not reach 80%. Try again later!</p>
          </>
        )}
        <button
          onClick={() => router.push('/')}
          className="mt-6 px-6 py-3 bg-[#E10600] hover:bg-red-700 rounded-lg text-white cursor-pointer"
        >
          Back to home
        </button>
      </div>
    </main>
    </div>
  );
}
