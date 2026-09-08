import { NextResponse } from "next/server";

export async function GET() {
  const hora = Number(
    new Intl.DateTimeFormat("pt-BR", {
      timeZone: "America/Sao_Paulo",
      hour: "2-digit",
      hour12: false,
    }).format(new Date())
  );

  const abertura = 10;
  const fechamento = 17;

  const isAberto = hora >= abertura && hora < fechamento;

  return NextResponse.json({
    status: isAberto ? "aberto" : "fechado",
    hora: hora,
    mensagem: isAberto
      ? `Mercado aberto — ${hora}h`
      : `Mercado fechado — abre às ${abertura}h`,
    abertura,
    fechamento,
  });
}
