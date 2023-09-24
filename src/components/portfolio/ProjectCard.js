import React, { useState } from 'react';
import Modal from 'react-modal';
import GridNotion from '../resume/GridNotion';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    cursor: 'pointer',
  },
  content: {
    width: '80%',
    maxWidth: '800px',
    position: 'absolute',
    height: '80%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    animation: 'slide-up 0.5s', // 애니메이션 적용
    cursor: 'default',
  },
};

// 슬라이드 업 애니메이션을 위한 CSS 키 프레임 정의
const slideUpAnimation = `
    @keyframes slide-up {
      from {
        transform: translate(-50%, 100%);
      }
      to {
        transform: translateY(-50%, 0);
      }
    }
  `;

export default function ProjectCard({ portfolioData }) {
  const { title, description, content, notionId, contentList, date, skills } =
    portfolioData;
  const [modalIsOpened, setModalIsOpened] = useState(false);

  return (
    <div className="card bg-neutral">
      <div className="card-body text-left">
        <h2 className="card-title font-bold">{title}</h2>
        <p>{description}</p>
        <p>{content}</p>
        {contentList.map((item) => {
          return (
            <li key={item} className="ms-2">
              {item}
            </li>
          );
        })}
        <p className="flex flex-row gap-1 flex-wrap font-semibold text-white">
          skills:
          {skills.map((skill) => {
            return (
              <span
                key={skill}
                className="bg-slate-800 whitespace-nowrap text-white font-normal w-fit px-1 rounded-md"
              >
                {skill}
              </span>
            );
          })}
        </p>
        <p className="text-slate-500 font-semibold">{date}</p>

        <div className="card-actions justify-center">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button className="btn" onClick={() => setModalIsOpened(true)}>
            자세히 보기
          </button>
        </div>
      </div>

      <Modal
        appElement={document.getElementById('root')}
        isOpen={modalIsOpened}
        onRequestClose={() => setModalIsOpened(false)}
        style={customStyles}
      >
        <style>{slideUpAnimation}</style>
        <div className="">
          <GridNotion NOTION_PAGE_ID={notionId} />
        </div>
      </Modal>
    </div>
  );
}
