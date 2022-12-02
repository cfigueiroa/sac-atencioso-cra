export default function Modal({ titulo, funcao, children }) {
    return (
        <div className="modal">
            <div className="content">
                <div className="header">
                    <div className="title">{titulo}</div>{" "}
                    {/* Título */}
                    <button
                        className="close"
                        onClick={funcao}
                    >
                        ×
                    </button>
                </div>

                <div className="body">
                    {" "}
                    {/* Conteúdo do modal */}
                    {children}
                </div>
            </div>
        </div>
    )
}
