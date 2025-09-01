function status(request, response) {
  response.status(200).json({ chave: "Bem Vindo ao TackOne" });
}

export default status;
