import Image from 'next/image';

export default function Profile() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 w-full p-4">
      <div className="h-[4.5rem] w-[4.5rem] relative flex-shrink-0">
        <Image
          className="rounded-full"
          src="/profile_test.png"
          alt="me"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-1">
        <strong className="text-2xl">강태훈 (Leo)</strong>
        <p>
          프론트엔드에 관심이 많은 개발자입니다. 온라인에서는 악당이라는
          닉네임으로 활동하고 있습니다.
        </p>
      </div>
    </div>
  );
}
