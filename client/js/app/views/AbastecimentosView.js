class AbastecimentosView extends View{
    template(model){ 
         return `<table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th onclick="abastecimentoController.ordena('prefixo')">Prefixo</th>
                            <th onclick="abastecimentoController.ordena('data')">Data</th>
                            <th onclick="abastecimentoController.ordena('combustivel')">Combustivel</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${model.abastecimentos.map(abastecimento => 
                             `
                                <tr>
                                    <td>${abastecimento.prefixo}</td>
                                    <td>${abastecimento.data}</td>
                                    <td>${abastecimento.combustivel}</td>
                                </tr>`).join('')}
                    </tbody>
                    <tfoot>
                        <td colspan="2"></td>
                        <td>
                                ${model.combustivelTotal}
                         </td>
                    <tfoot>
             </table>
            `;
    }
}