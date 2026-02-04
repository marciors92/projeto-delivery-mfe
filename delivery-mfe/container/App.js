import React, { Suspense } from 'react';

// Importação dinâmica dos componentes remotos
// O nome Menu deve bater com o que foi exposto no micro-cardapio
const RemoteMenu = React.lazy(() => import('cardapio/Menu'));
const RemoteOrder = React.lazy(() => import('pedido/Order'));

const App = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <header style={{
                backgroundColor: '#282c34',
                padding: '20px',
                color: 'white',
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <h1>🍱 Sistema de Delivery - Micro Front-ends</h1>
            </header>

            <main style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                {/* O Suspense exibe um fallback enquanto o micro é descarregado */}
                <section style={{ flex: '2', minWidth: '300px' }}>
                    <Suspense fallback={<div className="loading">Carregando Cardápio...</div>}>
                        <RemoteMenu />
                    </Suspense>
                </section>

                <aside style={{ flex: '1', minWidth: '250px' }}>
                    <Suspense fallback={<div className="loading">Carregando Pedido...</div>}>
                        <RemoteOrder />
                    </Suspense>
                </aside>
            </main>
        </div>
    );
};

export default App;