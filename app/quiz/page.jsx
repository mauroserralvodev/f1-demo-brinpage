'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useQuiz } from '../../context/QuizContext';
import questions from '../../lib/questions';
import { formulalRegular } from '@/lib/fonts';

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([]);
  const { setScore } = useQuiz();
  const router = useRouter();

  const handleOptionClick = (option) => {
    const updated = [...selected];
    updated[current] = option;
    setSelected(updated);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      let correct = 0;
      questions.forEach((q, i) => {
        if (selected[i] === q.answer) correct++;
      });
      const finalScore = Math.round((correct / questions.length) * 100);
      setScore(finalScore);
      router.push('/result');
    }
  };

  return (
    <div className={formulalRegular.className}>
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl w-full space-y-6 text-center"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-white uppercase"
          >
            Question <span className='text-[#E10600]'>{current + 1}</span> of <span className='text-[#E10600]'>{questions.length}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-neutral-300"
          >
            {questions[current].question}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid gap-4"
          >
            {questions[current].options.map((option, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={() => handleOptionClick(option)}
                className={`px-6 py-3 rounded-lg text-white border transition cursor-pointer
                  ${
                    selected[current] === option
                      ? 'bg-red-600 border-red-700'
                      : 'bg-neutral-900 border-white/20 hover:bg-neutral-700'
                  }`}
              >
                {option}
              </motion.button>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={handleNext}
            disabled={selected[current] == null}
            className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          >
            {current < questions.length - 1 ? 'Continue' : 'End'}
          </motion.button>
        </motion.div>
      </main>
    </div>
  );
}