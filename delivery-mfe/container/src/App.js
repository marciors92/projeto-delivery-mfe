import React, { Suspense } from 'react';
import './style.css';

// Importação dinâmica dos Micros
const RemoteMenu = React.lazy(() => import('cardapio/Menu'));
const RemoteOrder = React.lazy(() => import('pedido/Order'));

const App = () => (
    <div className="container-main">
        {/* Cabeçalho do App */}
        <header style={{
            backgroundColor: 'var(--primary)',
            padding: '20px',
            color: 'white',
            textAlign: 'center',
            marginBottom: '30px',
            borderRadius: '0 0 20px 20px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
            <h1 style={{ margin: 0 }}>🍕 MasterFood MFE</h1>
            <p style={{ margin: 0, opacity: 0.8 }}>O melhor sabor, na velocidade do código</p>
        </header>

        {/* Área dos Micro Front-ends */}
        <main style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            padding: '0 20px'
        }}>
            <Suspense fallback={<div className="card">Carregando Menu...</div>}>
                <RemoteMenu />
            </Suspense>

            <Suspense fallback={<div className="card">Carregando Carrinho...</div>}>
                <RemoteOrder />
            </Suspense>
        </main>

        <footer style={{ textAlign: 'center', marginTop: '40px', color: '#888' }}>
            <small>Powered by Micro Front-ends & Webpack 5</small>
        </footer>
    </div>
);

export default App;