import React from 'react';
import BodyScheme from '../BodyScheme/BodyScheme'; // Путь к BodyScheme
import RightPanel from '../RightPanel/RightPanel'; // Путь к RightPanel
import './MainLayout.css'; // Импорт стилей

export default function MainLayout() {
  return (
    <div className="main-layout">
      <BodyScheme />
      <RightPanel>
        {/* Дети для RightPanel, если нужно */}
      </RightPanel>
    </div>
  );
}