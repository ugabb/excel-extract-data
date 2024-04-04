const XLSX = require("xlsx");

async function filtrarColunas(arquivoExcel) {
  try {
    // Ler o arquivo Excel
    const workbook = XLSX.readFile(arquivoExcel);

    // Obter a primeira planilha
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // Configurar o cabeçalho das colunas
    const header = ["ID", "NOME", "CPF", "DT_NASCIMENTO"];
    const columns = ["A", "F", "I", "K"];

    // Filtrar os dados das colunas selecionadas
    const dadosFiltrados = XLSX.utils.sheet_to_json(worksheet, {
      header,
      raw: false,
      range: "A:K"
    });
    console.log(dadosFiltrados)

    // // Criar um novo Workbook
    // const novoWorkbook = XLSX.utils.book_new();

    // // Adicionar uma nova planilha ao novo Workbook
    // const novaWorksheet = XLSX.utils.json_to_sheet(dadosFiltrados);

    // // Definir os cabeçalhos da nova planilha
    // XLSX.utils.sheet_add_aoa(novaWorksheet, [header], { origin: -1 });

    // // Adicionar a nova planilha ao novo Workbook
    // XLSX.utils.book_append_sheet(novoWorkbook, novaWorksheet, "Planilha1");

    // // Escrever o novo Workbook para um arquivo Excel
    // XLSX.writeFile(novoWorkbook, "./convertido/dados_filtrados.xlsx");

    // console.log("Novo arquivo Excel criado com os dados filtrados.");
  } catch (error) {
    console.error("Erro:", error);
  }
}

// Chamar a função com o nome do arquivo
filtrarColunas("./LTC001.xlsx");
