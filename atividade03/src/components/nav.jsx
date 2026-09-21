import React from 'react';

const SegundaSessao = () => {

  const coluna1 = [
    { titulo: 'Ciência e Tecnologia', links: ['Institutos', 'Publicações'] },
    { titulo: 'Cultura', links: ['Museus', 'Música', 'MP3'] },
    { titulo: 'Esportes', links: ['Automobilismo', 'Futebol'] },
    { titulo: 'Governo', links: ['Federal', 'Estados', 'Concursos'] },
    { titulo: 'Informática', links: ['Empresas', 'Software', 'Vírus'] },
    { titulo: 'Lazer', links: ['Carnaval', 'Turismo', 'Infantil'] },
    { titulo: 'Referência', links: ['Bibliotecas', 'Dicionários'] },
    { titulo: 'Serviços', links: ['Beleza', 'Companhias Aéreas'] },
  ];


  const coluna2 = [
    { icone: '🛍️', titulo: 'Compras Online', links: ['CD', 'Informática', 'Livros'] },
    { icone: '✏️', titulo: 'Educação', links: ['Escolas', 'Universidades'] },
    { icone: '💰', titulo: 'Finanças', links: ['Bancos', 'Bolsas', 'Seguros'] },
    { icone: '🏭', titulo: 'Indústria e Comércio', links: ['Veículos', 'Telecomunicações'] },
    { icone: '🌐', titulo: 'Internet', links: ['E-mail Grátis', 'Provedores'] },
    { icone: '📰', titulo: 'Notícias', links: ['Jornais', 'Revistas'] },
    { icone: '➕', titulo: 'Saúde', links: ['Hospitais', 'Instituições'] },
    { icone: '👥', titulo: 'Sociedade', links: ['ONGs', 'Pessoais', 'Religião'] },
  ];

  return (
    <div className="segunda-sessao">
      <div className="coluna">
        {coluna1.map((cat, index) => (
          <div className="categoria-bloco" key={index}>
            <div className="categoria-titulo">{cat.titulo}</div>
            <div className="categoria-links">
              {cat.links.map((link, i) => (
                <a key={i}>{link}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="coluna">
        {coluna2.map((cat, index) => (
          <div className="categoria-bloco" key={index}>
            <div className="categoria-icone">{cat.icone}</div>
            <div className="categoria-titulo">{cat.titulo}</div>
            <div className="categoria-links">
              {cat.links.map((link, i) => (
                <a key={i}>{link}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="coluna noticias-bloco">
        <h3>Notícias</h3>
        <div className="noticia-item">
          <a >LAUDO: CANTOR ESTAVA EM ALTA VELOCIDADE</a>
        </div>
        <div className="noticia-item">
          <a >Mais quatro desenhos no Cartoon</a>
        </div>
        <div className="noticia-item">
          <a >Eliminatórias da Copa começam sábado</a>
        </div>
        <div style={{ textAlign: 'right', marginBottom: '20px' }}>
          <a style={{ fontSize: '11px' }}>Mais...</a>
        </div>

        <h3>Destaques</h3>
        <div className="destaque-item">
          <div className="destaque-titulo">Sinal dos Tempos</div>
          <div className="destaque-desc"><a >Internet, o sintoma de uma Nova Era</a></div>
        </div>
        <div className="destaque-item">
          <div className="destaque-titulo">Febre Amarela</div>
          <div className="destaque-desc"><a >Um sério problema colorido</a></div>
        </div>
        <div className="destaque-item">
          <div className="destaque-titulo">Comportamento</div>
          <div className="destaque-desc"><a >Como seremos no próximo milênio?</a></div>
        </div>
      </div>
    </div>
  );
};

export default SegundaSessao;