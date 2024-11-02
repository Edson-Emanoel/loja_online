// Componente principal
const App: React.FC = () => {
  

  return (
    <div>
      <button onClick={openModal}>Abrir Formulário</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;