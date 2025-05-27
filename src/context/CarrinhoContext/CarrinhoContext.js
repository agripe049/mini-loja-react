import { createContext, useEffect, useState } from "react";


export const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState(() => {
        const carrinhoSalvo = localStorage.getItem("carrinho");
        return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    });

    useEffect(() => {
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }, [carrinho]);

    function adicionarAoCarrinho(produto) {
        setCarrinho((prev) => {
            const existente = prev.find((p) => p.id === produto.id);
            if (existente) {
                return prev.map((p) =>
                    p.id === produto.id ? { ...p, quantidade: p.quantidade + 1 } : p
                );
            } else {
                return [...prev, { ...produto, quantidade: 1 }];
            }
        });
    }

    function removerDoCarrinho(id) {
        setCarrinho((prev) => prev.filter((p) => p.id !== id));
    }

    function aumentarQuantidade(id) {
        setCarrinho((prev) =>
            prev.map((p) =>
                p.id === id ? { ...p, quantidade: p.quantidade + 1 } : p
            )
        );
    }

    function diminuirQuantidade(id) {
        setCarrinho((prev) =>
            prev
                .map((p) =>
                    p.id === id ? { ...p, quantidade: p.quantidade - 1 } : p
                )
                .filter((p) => p.quantidade > 0)
        );
    }

    return (
        <div>
            <CarrinhoContext.Provider value={{
                 carrinho, 
                 adicionarAoCarrinho, 
                 removerDoCarrinho, 
                 aumentarQuantidade, 
                 diminuirQuantidade, 
                 setCarrinho 
            }}>
                {children}
            </CarrinhoContext.Provider>
        </div>
    );
}
