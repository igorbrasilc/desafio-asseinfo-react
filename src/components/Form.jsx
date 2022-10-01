export default function Form() {
    return (
        <form id="form" onsubmit="receiveWithdrawRequest()">
            <h4>Digite o valor do saque</h4>
            <input type="number" placeholder="Valor" class="title" required />
            <button type="submit" id="confirm-button">Solicitar saque</button>
            <h6 id="helper-text">*Notas: R$1, R$5, R$10, R$50 e R$100</h6>
        </form>
    )
};