import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutMe() {
  return (
    <div className=" bg-base-200 rounded-md">
      <div className="text-2xl font-bold sm:text-center p-4 sm:p-11">
        About Me
      </div>
      <div className="flex flex-row justify-center gap-4">
        <div className="flex flex-col card card-side bg-base-200 p-4 shadow-xl">
          <div className="flex flex-col sm:flex-row ">
            <figure className="max-h-xs max-w-[50%] sm:max-w-[30%] mx-auto mt-6 sm:mt-0 overflow-hidden rounded-xl">
              <img
                className=""
                src="https://res.cloudinary.com/dyhnnmhcf/image/upload/v1681745025/profileImage_ny0a9b.jpg"
                alt="jangdu"
              />
            </figure>
            <div className="card-body">
              <h2 className="sm:card-title text-md">
                안녕하세요 백엔드 개발자 장두혁입니다.
              </h2>
              <li className="list-item text-sm sm:text-base">
                <code className="font-semibold">javascript</code>로 개발에
                입문해 <code className="font-semibold">react</code>와{' '}
                <code className="font-semibold list">firebase</code>로
                개인블로그를 만들며, <br />
                문득 “백엔드를 모르고 블로그를 만드는게 맞나?”라는 생각이 들어서{' '}
                <code className="font-semibold">node.js</code>와{' '}
                <code className="font-semibold">mySQL</code>을 적용하며, 더 큰
                재미를 느껴 <code className="font-semibold">nest.js</code> 와{' '}
                <code className="font-semibold">typescript</code>까지 더
                파고들게 되었습니다.
              </li>
              <li className="list-item text-sm sm:text-base">
                배포 시 CI/CD구축과 같은 귀찮은 일은 자동화하는 반복을 지양하는
                개발자입니다.
              </li>
              <li className="list-item text-sm sm:text-base">
                공식문서같은 신뢰할 수 있는 자료를 기반으로 좋을 코드를
                고민합니다.
              </li>
            </div>
          </div>
          <div className="grid grid-rows-1 sm:grid-cols-2 p-4 sm:p-8">
            <div className="flex flex-col gap-2 ">
              <h2 className="font-bold text-2xl">Contact Me</h2>
              <li className="list-item text-sm sm:text-base">
                <code className="font-semibold">Email: </code>
                jjd0324@gmail.com
              </li>
              <li className="list-item text-sm sm:text-base">
                <code className="font-semibold">Phone: </code>
                010-5623-5318
              </li>
              <li className="list-item text-sm sm:text-base">
                <code className="font-semibold">GitHub: </code>
                <Link
                  className="link-hover link-primary hover:text-red-300"
                  to={'https://github.com/jangdu/'}
                >
                  https://github.com/jangdu/
                </Link>
              </li>
              <li className="list-item text-sm sm:text-base">
                <code className="font-semibold">Blog: </code>
                <Link
                  className="link-hover link-primary hover:text-red-300"
                  to={'https://blog.jangdu.site/'}
                >
                  https://blog.jangdu.site (개발 진행중)
                </Link>
              </li>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Skills</h2>
              <p className="font-bold">
                Languages
                <p className="ms-2 text-base font-normal">
                  JavaScript(ES6), Typescript, HTML5, CSS
                </p>
              </p>
              <p className="font-bold">
                Framework
                <p className="ms-2 text-base font-normal">
                  React, Express.js, Nest.js
                </p>
              </p>
              <p className="font-bold">
                Infra
                <p className="ms-2 text-base font-normal">
                  AWS: Lambda, EC2, RDS, CloudFront, S3, Route53
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
