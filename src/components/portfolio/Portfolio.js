import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const portfolioData = [
  {
    title: 'JangduLog',
    description: '개인 블로그 프로젝트',
    content:
      'Firebase를 사용해 쉽게 프론트 개발 이후, 데이터 관리 및 기능 추가 시 복잡한 쿼리작업 등의 한계를 느껴 nest.js로 마이그레이션 진행중 ( 2023-08 ~ )',
    notionId: '7b254ac4027b4b5dbb6b81794d0358c8',
    date: '2023-03 ~ (진행중)',
    skills: [
      'typescript',
      'nest.js',
      'mySQL',
      'React',
      'CloudFront',
      'EC2',
      'S3',
      'Github-Action',
    ],
    contentList: [
      '배포시 빌드 등 반복적인 작업을 CI/CD 배포 자동화를 통해 효율적인 개발 환경 구성',
    ],
  },
  {
    title: 'Drinkit',
    description: '주류 쇼핑몰 프로젝트 (4인)',
    content: '',
    notionId: '9eaffb65613b4644bc0dac4138470723',
    date: '2023-08 ~ 2023-09',
    skills: [
      'typescript',
      'nest.js',
      'React',
      'PostgreSQL',
      'webRTC',
      'socket.io',
      'Redis',
      'RDS Read Replica',
      'Elastic search',
      'Open AI',
    ],
    contentList: [
      'react를 처음 사용해보는 팀원들이 구현할 수 있게 리액트의 기본적인 문법 및 훅 소개',
      'react, contextAPI를 사용해서 장바구니 및 로그인 구현',
      '네이버 지도 API를 활용한 사용자의 주소 기반 근처 가게들 재고 파악 후 픽업이 가능한 가게를 선택 후 결제 기능 구현',
      'Load Balancer를 활용해 메인 서버를 나누어 각 서버의 부하를 줄여 트래픽 분산 처리 및 배포 시 중단 문제 해결',
      '채팅방 목록, Refresh Token을 Redis에 캐싱을 활용해 응답 속도 개선 (750ms -> 340ms)',
      'RDS Read Replica를 활용해 메인 DB 읽기 요청 분산 및 DB가 다운 됐을 경우의 문제 해결',
      '화상채팅 : WebRTC 시그널링 서버를 통해 연결된 피어들이 직접 미디어를 교환해 서버의 부담을 최소화하는 메쉬 방식으로 구현',
      '갬색 자동완성 : Elastic Search기반 서비스인 openSearch를 활용한 검색어 최적화',
      'AI고객센터 : openAI를 활용해 학습시킨 내용을 기반한 고객센터 구현',
    ],
  },
];

export default function Portfolio() {
  //   const [checkCollapse, setCheckCollapse] = useState(true);
  const [portfolioDataList, setPortfolioDataList] = useState([]);

  useEffect(() => {
    setPortfolioDataList(portfolioData);
  }, []);

  return (
    <div className="rounded-lg p-4 bg-base-200">
      <div className="m-2 sm:m-4 sm:text-3xl text-2xl font-bold">
        🧑🏻‍💻 Projects
      </div>
      <div className="grid grid-cols-1 gap-3">
        {portfolioDataList &&
          portfolioDataList.map((item) => {
            return (
              <div key={item.title}>
                <ProjectCard portfolioData={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
