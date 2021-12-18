import React from 'react'

import './modal.css'

interface IModal {
  active: boolean;
  setActive: (open: boolean) => void;
}

const Modal: React.FC<IModal> = ({ active, setActive, children }) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal;
