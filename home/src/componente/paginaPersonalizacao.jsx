import React from 'react';
import '../css/PaginaPersonalizacao.css'; // Certifique-se de criar esse CSS

export default function PaginaPersonalizacao() {
  return (
    <div className="pagina-personalizacao">
      <div className="banner-personalizacao">
        <h1>PERSONALIZE SEU UNIFORME</h1>
        <p>Escolha o modelo, a cor, adicione sua logo e monte o uniforme ideal para sua empresa.</p>
      </div>

      <div className="formulario-personalizacao">
        <h2>Monte do seu jeito</h2>

        <label>1. Escolha o modelo:</label>
        <select>
          <option>Camisa Polo</option>
          <option>Baby Look</option>
          <option>Camiseta Tradicional</option>
        </select>

        <label>2. Selecione a cor:</label>
        <input type="color" />

        <label>3. Envie sua logo:</label>
        <input type="file" accept="image/*" />

        <label>4. Quantidade aproximada:</label>
        <input type="number" min="1" placeholder="Ex: 30 unidades" />

        <button>Solicitar orçamento</button>
      </div>
    </div>
  );
}
