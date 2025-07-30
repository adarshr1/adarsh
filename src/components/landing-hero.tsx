
"use client"

import Link from "next/link"
import Image from "next/image";
import { LayoutGroup, motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

const exampleImages = [
  {
    url: "https://placehold.co/128x96.png",
    dataAiHint: "woman brushing teeth",
    alt: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "https://placehold.co/240x192.png",
    dataAiHint: "neon palm",
    alt: "Neon Palm",
  },
  {
    url: "https://placehold.co/256x256.png",
    dataAiHint: "blurry crowd",
    alt: "A blurry photo of a crowd of people",
  },
  {
    url: "https://placehold.co/256x224.png",
    dataAiHint: "rippling water",
    alt: "Rippling Crystal Blue Water",
  },
  {
    url: "https://placehold.co/320x320.png",
    dataAiHint: "man black shirt",
    alt: "Man in black shirt under blue sky",
  },
  {
    url: "https://placehold.co/200x300.png", // Placeholder dimensions
    dataAiHint: "woman flower crown",
    alt: "A woman with a flower crown on her head",
  },
  {
    url: "https://placehold.co/300x200.png", // Placeholder dimensions
    dataAiHint: "blurry flowers",
    alt: "A blurry photo of white flowers in a field",
  },
  {
    url: "https://placehold.co/350x250.png", // Placeholder dimensions
    dataAiHint: "wine glasses table",
    alt: "A table topped with two wine glasses and plates",
  },
];

function LandingHero() {
  return (
    <section className="w-full h-[60vh] md:h-screen overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative pt-20"> {/* Changed height for mobile */}
      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement
          depth={0.5}
          className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl overflow-hidden"
          >
            <Image
              src={exampleImages[0].url}
              alt={exampleImages[0].alt}
              data-ai-hint={exampleImages[0].dataAiHint}
              width={128}
              height={96}
              className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover"
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
        >
           <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl overflow-hidden"
          >
            <Image
              src={exampleImages[1].url}
              alt={exampleImages[1].alt}
              data-ai-hint={exampleImages[1].dataAiHint}
              width={240}
              height={192}
              className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover"
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[65%] left-[6%] md:top-[80%] md:left-[8%]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="-rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl overflow-hidden"
          >
            <Image
              src={exampleImages[2].url}
              alt={exampleImages[2].alt}
              data-ai-hint={exampleImages[2].dataAiHint}
              width={256}
              height={256}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover"
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl overflow-hidden"
          >
            <Image
              src={exampleImages[3].url}
              alt={exampleImages[3].alt}
              data-ai-hint={exampleImages[3].dataAiHint}
              width={256}
              height={224}
              className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover"
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[60%] left-[83%] md:top-[68%] md:left-[83%]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl overflow-hidden"
          >
            <Image
              src={exampleImages[4].url}
              alt={exampleImages[4].alt}
              data-ai-hint={exampleImages[4].dataAiHint}
              width={320}
              height={320}
              className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover"
            />
          </motion.div>
        </FloatingElement>
      </Floating>

      <div className="flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-10 pointer-events-auto p-4">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight tracking-tight space-y-1 md:space-y-4"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span>Make your </span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre">
              <motion.span
                layout
                className="flex whitespace-pre"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                website{" "}
              </motion.span>
              <TextRotate
                texts={[
                  "fancy",
                  "fun",
                  "lovely ♥",
                  "weird",
                  "🪩 funky",
                  "💃🕺",
                  "sexy",
                  "🕶️ cool",
                  "go 🚀",
                  "🔥🔥🔥",
                  "over-animated?",
                  "pop ✨",
                  "rock 🤘",
                ]}
                mainClassName="overflow-hidden pr-3 text-primary py-0 pb-2 md:pb-4 rounded-xl"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>
        <motion.p
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center pt-4 sm:pt-8 md:pt-10 lg:pt-12"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          with a growing library of ready-to-use react components &
          microinteractions. free & open source.
        </motion.p>

        <div className="flex flex-row justify-center space-x-4 items-center mt-10 sm:mt-16 md:mt-20 lg:mt-20 text-xs">
          <motion.button
            className="sm:text-base md:text-lg lg:text-xl font-semibold tracking-tight text-background bg-foreground px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3 rounded-full z-20 shadow-2xl"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            <Link href="#"> {/* Placeholder link */}
              Check docs <span className="font-serif ml-1">→</span>
            </Link>
          </motion.button>
          <motion.button
            className="sm:text-base md:text-lg lg:text-xl font-semibold tracking-tight text-primary-foreground bg-primary px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3 rounded-full z-20 shadow-2xl"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            <Link href="#"> {/* Placeholder link */}
              ★ on GitHub
            </Link>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export { LandingHero }

    