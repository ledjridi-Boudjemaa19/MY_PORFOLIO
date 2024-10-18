import React from 'react';
import './Modules.css';
import { FaCubes, FaRobot, FaBrain, FaSearch, FaDatabase, FaChartBar } from 'react-icons/fa';

function Modules() {
  const modules = [
    { title: 'Web3 D', icon: <FaCubes />, content: 'Description for Web3 D.' },
    { title: 'Systèmes multi-agents', icon: <FaRobot />, content: 'Description for Systèmes multi-agents.' },
    { title: 'Apprentissage automatique 2', icon: <FaBrain />, content: 'Description for Apprentissage automatique 2.' },
    { title: 'Recherche d’informations sur le web', icon: <FaSearch />, content: 'Description for Recherche d’informations sur le web.' },
    { title: 'Web mining', icon: <FaChartBar />, content: 'Description for Web mining.' },
    { title: 'Entrepôts de données', icon: <FaDatabase />, content: 'Description for Entrepôts de données.' },
  ];

  return (
    <section id="modules" className="modules-section">
      <h2>Modules</h2>
      <div className="modules-grid">
        {modules.map((module, index) => (
          <div className="module-card" key={index}>
            <div className="module-icon">{module.icon}</div>
            <h3>{module.title}</h3>
            <p>{module.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Modules;
