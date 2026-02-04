import React from 'react';
import './style.css';

const Menu = () => {
    const add = (item) => {
        window.dispatchEvent(new CustomEvent('ADICIONAR_ITEM', { detail: item }));
    };

    return (
        <div className="card">
            <h2 style={{ color: 'var(--primary)' }}>🍕 Menu Fast Delivery</h2>
            <button className="btn-delivery" onClick={() => add('Pizza Margherita')}>
                Pizza <span className="price-tag">R$ 45</span>
            </button>
            <button className="btn-delivery" onClick={() => add('Hambúrguer Gourmet')}>
                Hambúrguer <span className="price-tag">R$ 32</span>
            </button>
        </div>
    );
};

export default Menu;