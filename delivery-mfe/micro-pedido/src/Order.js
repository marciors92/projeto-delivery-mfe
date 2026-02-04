import React, { useState, useEffect } from 'react';
import './style.css';

const Order = () => {
    const [itens, setItens] = useState([]);

    useEffect(() => {
        const handler = (e) => setItens((prev) => [...prev, e.detail]);
        window.addEventListener('ADICIONAR_ITEM', handler);
        return () => window.removeEventListener('ADICIONAR_ITEM', handler);
    }, []);

    return (
        <div className="card" style={{ borderLeft: '8px solid var(--accent)' }}>
            <h2 style={{ color: 'var(--text)' }}>🛒 Seu Pedido</h2>
            {itens.length === 0 ? (
                <p>Seu carrinho está vazio...</p>
            ) : (
                <ul>
                    {itens.map((it, i) => (
                        <li key={i} style={{ marginBottom: '10px' }}>✅ {it}</li>
                    ))}
                </ul>
            )}
            {itens.length > 0 && <button className="btn-delivery" style={{ width: '100%' }}>Finalizar Agora</button>}
        </div>
    );
};

export default Order;