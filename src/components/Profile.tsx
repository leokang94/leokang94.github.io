import Image from 'next/image';
import { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const NAMES = ['Leo', 'Taehun', '강태훈'];
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
      6000,
    );

    return () => {
      clearInterval(nameIntervalId);
      clearInterval(wrapperIntervalId);
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 w-full p-4">
      <div className="h-[8rem] w-[8rem] relative flex-shrink-0">
        <Image
          className="rounded-full"
          src="/profile.webp"
          alt="me"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="flex flex-col justify-center gap-1 w-full">
        <div className="flex gap-[0.4rem] text-2xl mb-3">
          <TextTransition springConfig={presets.gentle} direction="down" inline>
            {PREFIXES[affixIndex % PREFIXES.length]}
          </TextTransition>
          <strong>
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
        <p className="text-gray-500 font-light">
          정확히 아는것을 중요하게 생각합니다.
          <p>
            다양한 기술에 관심이 있지만, 현재는 프론트엔드 개발을 주력으로 하고
            있습니다.
          </p>
        </p>
      </div>
    </div>
  );
}
