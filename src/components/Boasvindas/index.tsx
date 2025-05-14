'use client'
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from "react";
import {ContaType} from "@/types/ContaType"
 
 
/**
 * Página Inicial do Portal PCD
 * Contém as seguintes seções:
 * - Hero section com mensagem de boas-vindas
 * - Serviços em destaque
 * - Informações sobre acessibilidade e direitos
 */
export default function Home() {
 
  const [Logado, setLogado] = useState<ContaType | null>(null);
 
    useEffect(() => {
      const usuario = localStorage.getItem("usuarioLogado");
      if (usuario) {
        setLogado(JSON.parse(usuario));
      }
    }, []);
 
  return (


    <section 
    className="w-full bg-gradient-to-r from-blue-600 via-purple-500 to-fuchsia-500 text-white py-16 relative"
    aria-labelledby="hero-title"
  >
    <div className="container mx-auto px-4">
    <div className="container mx-auto px-4">
    <div className="max-w-4xl">
      <h1 id="hero-title" className="text-4xl font-bold mb-4">
        Portal de Informação e Acessibilidade
      </h1>
      {Logado ? (
    
    <p className="text-lg mb-2">
            Boas vindas, {Logado.nome} ao Portal PCD!
          </p>
  
) : (<p className="text-lg mb-2">
  Boas vindas ao Portal PCD!
</p>)}
      <p className="text-base mb-8 opacity-90">
        Aqui você encontra informações, serviços e recursos para promover a acessibilidade e inclusão.
      </p>
      <div className="flex gap-3">
        <Link 
          href="/servicos" 
          className="bg-white text-blue-700 px-4 py-2 rounded text-sm font-medium hover:bg-blue-100 transition-all focus:ring-2 focus:ring-white focus:outline-none"
        >
          Explorar Serviços
        </Link>
      </div>
    </div>
    </div>
     </div>
            <div className="absolute right-0 bottom-0 opacity-10" aria-hidden="true">
              <Image
                src="/accessibility-icon.svg"
                alt=""
                width={200}
                height={200}
                className="brightness-0 invert"
              />
            </div>
          </section>

  )


}
