import React from 'react';

const PrimeiraSessao = () => {
  return (
    <div className="primeira-sessao">
      <div className="topo-verde">
        <a >Novos</a> | 
        <a >Inclusões</a> | 
        <a >Download</a> | 
        <a >AQUI!</a> | 
        <a >Cadê? Livros</a> | 
        <a >Cadê? Mail</a> | 
        <a >Veja</a> | 
        <a >Cadê? Você</a> | 
        <a >Cadê? EnglishTown</a>
      </div>

      <div className="header-conteudo">
        <div className="logo-area">
          <div className="logo-texto">cadê?</div>
          <div className="logo-sub">EMBRATEL</div>
        </div>

        <div className="busca-area">
          <h3>Consulta</h3>
          <div className="busca-input-group">
            <input type="text" />
            <button>Busca</button>
          </div>
          <div className="busca-links">
            <a >Opções de busca</a>
          </div>
        </div>

        <div className="anuncio-area">
          <p>Lojas Americanas - Clique Aqui!!!</p>
          <span style={{ fontSize: '20px' }}>🛒</span>
          <p style={{ fontSize: '10px', color: '#999', marginTop: '5px' }}>PUBLICIDADE</p>
        </div>
      </div>
    </div>
  );
};

export default PrimeiraSessao;