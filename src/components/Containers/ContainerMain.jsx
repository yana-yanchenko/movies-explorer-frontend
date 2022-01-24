import React from 'react';
import './Containers.css'
const ContainerMain = ({ type, children }) => {
  return (
    <main className={`main main_type_${type}`}>
      {children}
    </main>
  );
}

export default ContainerMain;
