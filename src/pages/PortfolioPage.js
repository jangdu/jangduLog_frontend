import 'animate.css';
import AboutMe from '../components/portfolio/AboutMe';
import Portfolio from '../components/portfolio/Portfolio';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col max-w-4xl gap-4 mx-auto">
      <AboutMe />
      <Portfolio />
    </div>
  );
}
