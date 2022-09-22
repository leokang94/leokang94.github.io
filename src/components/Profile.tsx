import Image from 'next/image';
import { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const NAMES = ['Leo', 'Taehun Kang', '강태훈'];
const PREFIXES = ['반가워요,', "Hi, I'm"];
const SUFFIXES = ['입니다!', '!'];

export default function Profile() {
  const [nameIndex, setNameIndex] = useState(0);
  const [affixIndex, setAffixIndex] = useState(0);

  useEffect(() => {
    const nameIntervalId = setInterval(
      () => setNameIndex((index) => index + 1),
      3000,
    );
    const wrapperIntervalId = setInterval(
      () => setAffixIndex((index) => index + 1),
      3000,
    );

    return () => {
      clearInterval(nameIntervalId);
      clearInterval(wrapperIntervalId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full p-4">
      <div className="h-[6rem] w-[6rem] relative flex-shrink-0 transition-[width, height] ease-out-back duration-300 sm:h-[8rem] sm:w-[8rem] md:h-[10rem] md:w-[10rem]">
        <Image
          className="rounded-full"
          src="/profile.webp"
          alt="me"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-1 w-full">
        <div className="flex gap-[0.4rem] text-xl mb-1 transition-[font-size] ease-out-back duration-300 sm:text-2xl md:text-3xl md:mb-3">
          <TextTransition springConfig={presets.gentle} direction="down" inline>
            {PREFIXES[affixIndex % PREFIXES.length]}
          </TextTransition>
          <strong className="text-leo-green-dark">
            <TextTransition
              springConfig={presets.gentle}
              direction="down"
              inline
            >
              {NAMES[nameIndex % NAMES.length]}
            </TextTransition>
          </strong>
          <TextTransition springConfig={presets.gentle} direction="down" inline>
            {SUFFIXES[affixIndex % SUFFIXES.length]}
          </TextTransition>
        </div>
        <p className="text-gray-500 font-light text-center text-sm sm:text-base">
          정확히 아는것을 중요하게 생각합니다.
          <br />
          다양한 기술에 관심이 있지만, 현재는 프론트엔드 개발을 주력으로 하고
          있습니다.
        </p>
      </div>
    </div>
  );
}
