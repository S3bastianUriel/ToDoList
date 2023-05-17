/*import React from 'react';
// import ReactDOM from 'react-dom/client';
import * as ReactDOM from 'react-dom/client';
// import * as ReactDOM from 'react-dom';
// import createPortal from 'react-dom/server';

const modalElement = document.getElementById('modal');
const modal = ReactDOM.createPortal(modalElement);

function Modal({ children }) {
    return modal.createPortal(
        children,
    );
}

export { Modal };*/

        //      ||
        //      \/

/*import React from 'react';
// import ReactDOM from 'react-dom/client';
import * as ReactDOM from 'react-dom/client';
// import createPortal from 'react-dom/client';

const modalElement = document.getElementById('modal');
const modal = ReactDOM.createPortal(modalElement);

function Modal({ children }) {
    return modal.createPortal(
        children,
    );
}

export { Modal };*/







//////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
        {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };