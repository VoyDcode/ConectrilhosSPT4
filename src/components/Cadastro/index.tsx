"use client";
import { ContaType } from "@/types/ContaType";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function index() {
  const navigate = useRouter();
  const [ListaDeContas, setListaDeContas] = useState<ContaType[]>([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  useEffect(() => {
    const user = localStorage.getItem("usuarioLogado");
    if (user) {
      navigate.push("/");
    }
    const contasExistentes = localStorage.getItem("ListaContas");
    if (contasExistentes) {
      setListaDeContas(JSON.parse(contasExistentes));
    }
  }, []);
  const handleChangeNome = (e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value);
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleChangeSenha = (e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value);
  const handleChangeConfirmarSenha = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmarSenha(e.target.value);
  const handleChangeCidade = (e: React.ChangeEvent<HTMLInputElement>) => setCidade(e.target.value);
  const handleChangeTelefone = (e: React.ChangeEvent<HTMLInputElement>) => setTelefone(e.target.value);
  const handleChangeEndereco = (e: React.ChangeEvent<HTMLInputElement>) => setEndereco(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    const emailJaCadastrado = ListaDeContas.some(conta => conta.email === email);
    if (emailJaCadastrado) {
      alert("Este email já está cadastrado!");
      return;
    }
    const novaConta: ContaType = {
      id: ListaDeContas.length + 1,
      nome,
      email,
      senha,
      cidade,
      telefone,
      endereco,
    };
    const novaListaDeContas = [...ListaDeContas, novaConta];
    localStorage.setItem("ListaContas", JSON.stringify(novaListaDeContas));
    localStorage.setItem("usuarioLogado", JSON.stringify(novaConta));
    alert("Cadastro realizado com sucesso!");
    window.location.reload();
  };
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-[#ECECEC]">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-10 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-2 text-center tracking-wide" style={{fontFamily: 'inherit', letterSpacing: 1}}>Cadastro</h1>
        <p className="text-xs text-black font-semibold mb-6 text-center">
          Crie sua conta para acessar
        </p>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-bold text-black mb-1">Nome completo</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={handleChangeNome}
                className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
            </div>
            <div>
              <label htmlFor="cidade" className="block text-sm font-bold text-black mb-1">Cidade</label>
              <input
                type="text"
                id="cidade"
                value={cidade}
                onChange={handleChangeCidade}
                className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-black mb-1">E-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChangeEmail}
                className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
            </div>
            <div>
              <label htmlFor="telefone" className="block text-sm font-bold text-black mb-1">Telefone</label>
              <input
                type="text"
                id="telefone"
                value={telefone}
                onChange={handleChangeTelefone}
                className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
            </div>
            <div>
              <label htmlFor="senha" className="block text-sm font-bold text-black mb-1">Senha</label>
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={handleChangeSenha}
                className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                minLength={6}
                required
              />
            </div>
            <div>
              <label htmlFor="endereco" className="block text-sm font-bold text-black mb-1">Endereço</label>
              <input
                type="text"
                id="endereco"
                value={endereco}
                onChange={handleChangeEndereco}
                className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="confirmar-senha" className="block text-sm font-bold text-black mb-1">Confirmar senha</label>
            <input
              type="password"
              id="confirmar-senha"
              value={confirmarSenha}
              onChange={handleChangeConfirmarSenha}
              className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>
          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="w-60 bg-[#00386B] text-white font-semibold py-2 rounded hover:bg-blue-800 transition-colors"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}