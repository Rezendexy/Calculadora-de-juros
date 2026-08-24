# Simulador de Aposentadoria — 3 calculadoras

Simulador educacional de aposentadoria com juros compostos reais. Página única, sem dependências e sem build: é só abrir o `index.html`.

## O que ele calcula

| # | Pergunta | Entradas | Fórmula |
|---|----------|----------|---------|
| 1 | Quanto vou ter quando me aposentar? | aporte mensal, anos | `FV = PMT × [((1+i)^n − 1) / i]` |
| 2 | Quanto preciso poupar por mês? | patrimônio desejado, anos | `PMT = FV × i / ((1+i)^n − 1)` |
| 3A | Quanto posso gastar vivendo só dos juros? | patrimônio | `saque = P × i` |
| 3B | Quanto posso gastar zerando o patrimônio? | patrimônio, anos | `saque = P × [i(1+i)^n / ((1+i)^n − 1)]` |

- `i` = taxa de juros **reais** por mês (padrão 0,5% a.m. = 0,005, equivalente a 6,1678% a.a.)
- `n` = número de meses (anos × 12)
- Aportes e saques no fim de cada mês (série postecipada)

A taxa é editável no topo da página, caso o professor queira comparar cenários.

## Conferência dos resultados

| Cenário | Resultado |
|---------|-----------|
| R$ 1.000/mês por 30 anos | R$ 1.004.515,04 |
| R$ 1.000.000 em 30 anos | R$ 995,51/mês |
| R$ 500.000 vivendo dos juros | R$ 2.500,00/mês |
| R$ 500.000 por 25 anos | R$ 3.221,51/mês |

## Como publicar no GitHub Pages

1. Suba `index.html` (e este `README.md`) na raiz do repositório.
2. Repositório → **Settings** → **Pages**.
3. Em *Source*, escolha **Deploy from a branch** → branch `main` → pasta `/ (root)` → **Save**.
4. Em cerca de 1 minuto o site fica no ar em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## Detalhes técnicos

- HTML + CSS + JavaScript puro, tudo em um arquivo só.
- Gráficos em SVG gerados na hora, sem biblioteca externa.
- Entrada aceita formato brasileiro (`1.500,50`) e também `1500.50`.
- Validação de campos, mensagens de erro com `role="alert"`, navegação por teclado nas abas.
- Tema claro/escuro (segue o sistema e memoriza a escolha).
- Responsivo de 320px até desktop; respeita `prefers-reduced-motion`.

## Aviso

Os valores estão em poder de compra de hoje, porque a taxa usada é real (já descontada a inflação). É um modelo de estudo, não é recomendação de investimento.
