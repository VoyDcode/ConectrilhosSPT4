'use client'
import { useEffect} from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react";
import { ContaType } from '@/types/ContaType';
import { usePathname } from 'next/navigation';

/**
 * Componente Header
 * Responsável pela barra superior do portal que contém:
 * - Logo e nome do portal
 * - Nome do usuário logado
 * - Botão de sair
 */
export default function Header() {

  const [Logado, setLogado] = useState<ContaType | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    try {
      const usuario = localStorage.getItem("usuarioLogado");
      if (usuario) {
        const parsedUsuario = JSON.parse(usuario);
        if (parsedUsuario && typeof parsedUsuario === 'object') {
          setLogado(parsedUsuario);
        }
      }
    } catch (error) {
      console.error('Erro ao carregar usuário:', error);
      localStorage.removeItem("usuarioLogado");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    setLogado(null);
    window.location.reload();
  };

  return (
    <header className="bg-[#00386B] w-full py-4" role="banner">
      <div className="px-8 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-white" style={{fontFamily: 'inherit'}}>
          Conectrilhos
        </Link>
        {!(pathname === '/login' || pathname === '/cadastro') && (
          <nav className="flex gap-4 items-center">
            <Link href="/" className="bg-[#00386B] text-white font-semibold px-4 py-2 rounded hover:bg-blue-800 transition-colors">Serviços</Link>
            <button onClick={handleLogout} className="bg-[#00386B] text-white font-semibold px-4 py-2 rounded hover:bg-blue-800 transition-colors border-none cursor-pointer">Sair</button>
          </nav>
        )}
      </div>
    </header>
  )
} 