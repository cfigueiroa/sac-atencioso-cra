import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

function App() {
  // Estados dos inputs controlados
  const [nome, setNome] = React.useState("");
  const [reclamacao, setReclamacao] = React.useState("");

  // Estados que indicam que o modal a ser exibido é o de erro ou sucesso
  const [exibirModalSucesso, setExibirModalSucesso] = React.useState(false);
  const [exibirModalErro, setExibirModalErro] = React.useState(false);

  function enviarReclamacao() {
    // Se a pessoa não preencheu os campos => Erro
    if (!nome || !reclamacao) {
      setExibirModalErro(true);
      // Se preencheu os campos => sucesso
    } else {
      setExibirModalSucesso(true);
    }
  }

  // Return do App
  return (
    <>
      {/* Modal de sucesso */}
      {exibirModalSucesso &&
        <Modal titulo={"Mensagem enviada com sucesso"} funcao={() => setExibirModalSucesso(false)}>
          Obrigado por entrar em contato {nome}! Sua reclamação será{" "}
          <strong>sim</strong> avaliada e considerada por nossa equipe!
        </Modal>}
      {/* Modal de erro */}
      {exibirModalErro &&
        <Modal titulo={"Erro"} funcao={() => setExibirModalErro(false)}>
          Por favor, insira os dados <strong>nome</strong> e{" "}
          <strong>reclamação</strong> corretamente!
        </Modal>}
      {/* Layout da tela em sim (título, inputs, botão) */}
      <div className="formulario">
        <h1>Envie sua reclamação</h1>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          value={reclamacao}
          onChange={(e) => setReclamacao(e.target.value)}
          placeholder="Reclamação"
        />
        <button onClick={enviarReclamacao}>Enviar reclamação</button>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
