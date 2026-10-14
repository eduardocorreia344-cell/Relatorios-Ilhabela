# Export técnico de dados — Ilha Bela Itacimirim Villages — PERÍODO COMPLETO
**Janela:** 06/07/2026 (criação da campanha; primeira veiculação em 07/07) a 14/10/2026 (dia parcial, até ~18h45) — fuso America/Bahia (UTC-3)
**Extraído em:** 14/10/2026
**Fontes:** Meta Marketing API v26.0 (conta `act_1369565881399220`, campanha `120248791202240411`) e Clint CRM API (`api.clint.digital/v1`)
**Finalidade:** insumo bruto para outro analista definir ações de aumento de conversão. Este documento traz dados e observações — não traz recomendações.

> Dados pessoais de leads (nome, telefone, e-mail) foram removidos. Nomes de corretores (equipe interna) foram mantidos. IDs de negócio aparecem truncados (8 caracteres).

---

## 0. Contexto

### 0.1 Negócio
- **Produto:** Ilha Bela Itacimirim Villages — condomínio-clube (village) em Itacimirim, Camaçari-BA, entre Guarajuba e Praia do Forte, ~30 min de Salvador. Incorporadora: PRIMOR Empreendimentos. Mídia e análise: Provecta VGV.
- **Oferta nos anúncios:** 29 unidades, 2 suítes com varanda e garden privativo, piscina resort com raia de 40 m, praia Bandeira Azul (Praia da Espera) a ~700 m, entrega abril/2027. Âncoras de preço usadas: **"Entrada a partir de R$ 42 mil"** (criativos 01, 02, 03) e **"A partir de R$ 718 mil"** (criativos Vídeo Patrícia). Formulário informa "sinal de R$ 43 mil pago na assinatura".
- **Faixa de ticket:** médio/alto padrão (R$ 700 mil–2 mi).
- **Benchmarks internos (doutrina Provecta VGV):** CPL R$ 30–60 para a faixa; 100–150 leads por venda (~1% lead→venda); fase de aprendizado ~50 eventos/conjunto em 7 dias; fadiga quando frequência > 3,5–4 em período curto junto com CPM subindo. Não há benchmark interno para custo por qualificado nem taxa de qualificação.

### 0.2 Linha do tempo
| Data | Evento |
|---|---|
| 06/07 | Campanha "Leads \| Formulário \| IlhaBela Itacimirim" criada; conjuntos "Família / Segunda Residência" e "Investidor" criados; anúncios 01, 02, 03 |
| 07/07 | Primeira veiculação |
| 18/07 | Conjuntos "Família / Segunda Residência 45 - 65" e "LKL" (públicos de engajamento) criados |
| 27/07 | Anúncio 04 criado |
| julho/agosto | Conjunto "LookALike" rodou (anúncios depois excluídos) |
| 27/08 | Formulário "\|Formulário IlhaBela\| ATUAL 27/08/26" criado (com pergunta de preço); conjunto "Família / Segunda Residência — 2" criado; 293 contatos importados na Clint |
| 31/08 | **Clint passa a ser usada: migração de base antiga (201 negócios criados no mesmo dia)**. Leads da Meta de julho e agosto existem na Clint só como base migrada, sem a data real de entrada |
| 05/09 e 16/09 | Anúncios "Vídeo Patrícia 2" e "Vídeo Patrícia 1" criados |
| 18/09 | "Conjunto 2" criado (segmentação idêntica ao conjunto principal) |
| 11/10 | 28 negócios fechados como perdidos em um dia |
| 12–13/10 | Entrega da campanha despenca (R$ 26 em 12/10, R$ 0 em 13/10) nos dois conjuntos |
| 14/10 | "Conjunto 2" pausado; orçamento do conjunto principal de R$ 35 → R$ 55/dia; entrega segue baixa (R$ 7,35 até ~18h45) |

---

## 1. Alertas operacionais

1. **Entrega da campanha quase parada desde 12/10** e ainda baixa em 14/10 mesmo com orçamento aumentado (R$ 7,35 gastos até ~18h45 com orçamento de R$ 55/dia). A queda foi simultânea nos dois conjuntos, o que é consistente com causa no nível da conta (pagamento, limite de gasto da conta, restrição) — **não confirmado**: token de leitura sem permissão para dados de cobrança.
2. **Vazamento entre Meta e Clint em setembro:** a Meta registrou 47 leads em setembro; a Clint tem 37 negócios de setembro com atribuição à campanha (10 leads, 21%, não viraram negócio atribuído). Em outubro bate (18 na Meta, 17 na Clint).
3. **374 dos 640 contatos da Clint não estão em nenhum funil** (sem negócio). 230 têm telefone. Entre eles há contatos com sinais positivos (1 com tag "AGENDADO 25/09 15:00", 1 com tag "QUALIFICADO", 8 com "momento do investimento" preenchido).
4. **Criativos com âncoras de preço diferentes** ("Entrada a partir de R$ 42 mil" vs "A partir de R$ 718 mil"); o criativo "03" (âncora R$ 42 mil) gerou 85% de todos os leads da campanha.
5. **Pergunta de preço do formulário não filtra:** todos os leads do formulário com essa pergunta respondem "sim, está dentro" (40 de 40 com o campo preenchido; 19 de 19 em outubro), mas perdas por "Sem perfil" citam orçamento de R$ 300–450 mil.
6. **Concentração de leads em uma corretora:** Fernanda Araújo é a responsável atual por 56 dos 66 leads nativos (85%) e 108 de 266 leads com negócio (41%).
7. **99 negócios abertos sem corretor** (todos no funil Reativação). O usuário do corretor Felipe Lisbôa foi removido da Clint.
8. **Nenhuma venda registrada.** 2 negócios têm data de ganho (22/09 e 24/09), mas estão com status aberto, etapa "Proposta" e valor R$ 0; ambos da base migrada; "ganho" registrado pela conta genérica "Primor Empreendimentos".
9. **Visitas com data passada não atualizadas:** 11 negócios com data de visita estruturada já vencida; nenhum marcado como "Visita Realizada".
10. **37 das 80 perdas não têm autor registrado** (campo `lost_by` vazio — provável automação ou integração).

---

## 2. Mídia — Meta Ads

### 2.1 Totais da campanha (06/07–14/10)

| Métrica | Valor |
|---|---|
| Gasto | R$ 5.879,31 |
| Impressões | 97.878 |
| Alcance | 31.084 |
| Frequência | 3,15 |
| CPM | R$ 60,07 |
| CTR (todos) | 2,93% |
| Cliques (todos) | 2.867 |
| Cliques no link | 1.763 |
| Leads | 289 |
| CPL | R$ 20,34 |
| Lead / clique no link | 16,4% |
| Dispositivo | 100% app mobile |

Outra campanha com gasto no período: **"Seguidores - Primor Construções"** (objetivo cliques/seguidores da marca), R$ 483,74, 0 leads. Demais campanhas da conta (Mood Club Costa Azul etc.) pausadas e de outros empreendimentos.

### 2.2 Evolução mensal

| Mês | Gasto | Impressões | Alcance | Freq. | CPM | CTR | Cliques link | Leads | CPL |
|---|---|---|---|---|---|---|---|---|---|
| jul (06–31) | R$ 1.871,70 | 35.289 | 13.946 | 2,53 | R$ 53,04 | 2,15% | 384 | 110 | R$ 17,02 |
| ago | R$ 1.745,38 | 29.810 | 13.729 | 2,17 | R$ 58,55 | 3,50% | 649 | 114 | R$ 15,31 |
| set | R$ 1.526,45 | 22.585 | 8.787 | 2,57 | R$ 67,59 | 3,20% | 487 | 47 | R$ 32,48 |
| out (01–14) | R$ 735,78 | 10.194 | 4.830 | 2,11 | R$ 72,18 | 3,35% | 243 | 18 | R$ 40,88 |

### 2.3 Evolução semanal

| Semana | Gasto | Freq. | CPM | CTR | Leads | CPL |
|---|---|---|---|---|---|---|
| 06–12/07 | R$ 417,72 | 1,94 | R$ 46,38 | 2,22% | 36 | R$ 11,60 |
| 13–19/07 | R$ 578,40 | 1,73 | R$ 48,47 | 1,76% | 29 | R$ 19,94 |
| 20–26/07 | R$ 519,27 | 1,74 | R$ 56,43 | 1,78% | 16 | R$ 32,45 |
| 27/07–02/08 | R$ 457,23 | 1,72 | R$ 64,00 | 3,91% | 44 | R$ 10,39 |
| 03–09/08 | R$ 293,73 | 1,46 | R$ 70,57 | 4,11% | 20 | R$ 14,69 |
| 10–16/08 | R$ 497,66 | 1,63 | R$ 56,32 | 2,95% | 28 | R$ 17,77 |
| 17–23/08 | R$ 509,25 | 1,47 | R$ 52,40 | 3,58% | 43 | R$ 11,84 |
| 24–30/08 | R$ 283,37 | 1,46 | R$ 64,93 | 3,19% | 6 | R$ 47,23 |
| 31/08–06/09 | R$ 374,61 | 1,57 | R$ 74,64 | 3,51% | 13 | R$ 28,82 |
| 07–13/09 | R$ 347,43 | 1,54 | R$ 59,33 | 3,83% | 13 | R$ 26,73 |
| 14–20/09 | R$ 310,97 | 1,75 | R$ 67,05 | 3,08% | 7 | R$ 44,42 |
| 21–27/09 | R$ 388,26 | 1,85 | R$ 71,24 | 2,44% | 10 | R$ 38,83 |
| 28/09–04/10 | R$ 422,10 | 1,79 | R$ 68,16 | 3,13% | 15 | R$ 28,14 |
| 05–11/10 | R$ 444,39 | 1,87 | R$ 77,33 | 3,48% | 9 | R$ 49,38 |
| 12–14/10 | R$ 34,92 | 1,15 | R$ 57,53 | 4,12% | 0 | — |

Observação: a semana de 24–30/08 (6 leads) coincide com a troca de formulário (27/08) e a criação do conjunto "— 2".

### 2.4 Por conjunto (período completo)

| Conjunto | Status hoje | Otimização | Orçamento/dia | Criado | Gasto | Leads | CPL | CPM | CTR | Freq. | Cliques link |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Família / Segunda Residência | Ativo | LEAD_GENERATION | R$ 55 (era R$ 35 até 14/10) | 06/07 | R$ 4.027,82 | 228 | R$ 17,67 | R$ 58,72 | 3,18% | 2,77 | 1.312 |
| Conjunto 2 | Pausado (14/10) | QUALITY_LEAD | R$ 28 | 18/09 | R$ 633,70 | 13 | R$ 48,75 | R$ 77,02 | 2,60% | 2,43 | 170 |
| Família / Segunda Residência — 2 | Pausado | QUALITY_LEAD | R$ 30 | 27/08 | R$ 345,94 | 9 | R$ 38,44 | R$ 64,30 | 2,88% | 1,88 | 104 |
| LookALike | Excluído | — | — | jul/ago | R$ 310,87 | 5 | R$ 62,17 | R$ 71,24 | 2,22% | 1,60 | 71 |
| Investidor | Pausado | LEAD_GENERATION | R$ 25 | 06/07 | R$ 286,71 | 25 | R$ 11,47 | R$ 41,84 | 1,91% | 1,74 | 58 |
| Família / Segunda Residência 45 - 65 | Pausado | QUALITY_LEAD | R$ 35 | 18/07 | R$ 241,34 | 9 | R$ 26,82 | R$ 60,32 | 2,05% | 1,90 | 46 |
| LKL | Pausado | QUALITY_LEAD | R$ 10 | 18/07 | R$ 32,93 | 0 | — | R$ 72,53 | 1,10% | 1,62 | 2 |

**Segmentação de cada conjunto:**
- **Família / Segunda Residência** (ativo), **Conjunto 2**, **Família / Segunda Residência — 2**: idênticos — 8 cidades da Bahia em raio de 40 km (Salvador, Lauro de Freitas, Camaçari, Feira de Santana, Ilhéus, Vitória da Conquista, Barreiras, Luís Eduardo Magalhães), idade 25–65, [Pós-graduação OU Ensino Superior Completo OU casado] E [Frequent Travelers OU Frequent international travelers], Advantage+ Audience ligado, só Instagram Stories + Reels.
- **Família / Segunda Residência 45 - 65:** mesmos interesses, 12 cidades, Facebook feed + Instagram feed/Stories/Reels, Advantage+ ligado (a idade mínima configurada ficou 25, apesar do nome).
- **LKL:** públicos personalizados de engajamento ("Interagiram com Instagram IlhaBela", "Interação com post IlhaBela", "Enviaram mensagem para instagram IlhaBela", "95% do vídeo campanha Ilhabela"), idade 30–65, 12 cidades, Facebook + Instagram, Advantage+ desligado.
- **Investidor:** comportamentos Frequent Travelers, Small business owners, Business page admins, Frequent international travelers; idade 33–60; 8 cidades; Instagram feed/Stories/Reels; Advantage+ desligado.
- Campo `learning_stage_info` vem vazio em todos (limitação recorrente da conta). Nível de acesso da API: `development_access`.

### 2.5 Por anúncio (período completo)

| Conjunto | Anúncio | Gasto | Leads | CPL | CPM | CTR | CTR link | Freq. | Lead/clique link | Vídeo 25% | 50% | 100% | Ranking qualidade/engaj./conversão |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Família / Segunda Residência | 03 | R$ 3.405,44 | 207 | R$ 16,45 | R$ 56,51 | 3,24% | 1,91% | 2,53 | 18,0% | 12,8% | 8,0% | 3,9% | Acima / Acima / Média |
| Conjunto 2 | 04 | R$ 414,85 | 11 | R$ 37,71 | R$ 75,47 | 2,73% | 2,09% | 2,09 | 9,6% | 12,1% | 7,9% | 3,8% | Acima / — / — |
| Investidor | 03 | R$ 268,17 | 23 | R$ 11,66 | R$ 41,36 | 1,96% | 0,86% | 1,69 | 41,1% | 13,9% | 7,6% | 3,5% | — |
| Família / Segunda Residência | Vídeo Patrícia 1 — Cópia | R$ 254,00 | 5 | R$ 50,80 | R$ 76,30 | 2,46% | 1,92% | 1,56 | 7,8% | 9,8% | 5,6% | 2,6% | Acima / Média / Média |
| Família / Segunda Residência | 04 | R$ 250,00 | 11 | R$ 22,73 | R$ 73,99 | 3,23% | 2,28% | 1,53 | 14,3% | 16,9% | 10,5% | 4,9% | Acima / Média / Média |
| Família / Segunda Residência 45 - 65 | 03 | R$ 231,17 | 9 | R$ 25,69 | R$ 60,50 | 2,07% | 1,18% | 1,84 | 20,0% | 13,9% | 7,9% | 4,2% | — |
| Família / Segunda Residência — 2 | 03 | R$ 186,89 | 7 | R$ 26,70 | R$ 58,70 | 2,92% | 1,73% | 1,47 | 12,7% | 8,7% | 5,4% | 2,3% | — |
| Conjunto 2 | Vídeo Patrícia 2 — Cópia | R$ 177,50 | 2 | R$ 88,75 | R$ 81,20 | 2,47% | 2,10% | 1,50 | 4,3% | 9,6% | 5,4% | 2,5% | Acima / — / — |
| Família / Segunda Residência — 2 | Vídeo Patrícia 2 | R$ 84,79 | 2 | R$ 42,40 | R$ 60,13 | 3,55% | 2,77% | 1,41 | 5,1% | 8,7% | 5,2% | 3,0% | Acima / — / — |
| Família / Segunda Residência | 01 | R$ 56,25 | 5 | R$ 11,25 | R$ 68,02 | 2,18% | 1,21% | 1,33 | 50,0% | 10,0% | 6,3% | 3,4% | — |
| Família / Segunda Residência — 2 | 01 | R$ 55,56 | 0 | — | R$ 96,79 | 1,22% | 1,05% | 1,19 | 0% | 8,9% | 5,4% | 2,4% | — |
| Família / Segunda Residência | Vídeo Patrícia 2 — Cópia | R$ 48,99 | 0 | — | R$ 85,35 | 2,96% | 1,92% | 1,25 | 0% | 11,7% | 6,8% | 3,3% | Média / Média / Média |
| Conjunto 2 | 01 | R$ 41,35 | 0 | — | R$ 75,87 | 1,83% | 1,65% | 1,22 | 0% | 7,5% | 4,0% | 1,8% | — |
| LKL | 01 | R$ 32,93 | 0 | — | R$ 72,53 | 1,10% | 0,44% | 1,62 | 0% | 7,9% | 4,8% | 3,1% | — |
| Família / Segunda Residência — 2 | 04 | R$ 18,70 | 0 | — | R$ 88,21 | 2,36% | 1,89% | 1,16 | 0% | 9,4% | 6,6% | 2,4% | — |
| Investidor | 01 | R$ 16,13 | 2 | R$ 8,06 | R$ 52,54 | 1,30% | 0,65% | 1,24 | 100% | 8,5% | 3,6% | 2,6% | — |
| Família / Segunda Residência | 02 | R$ 13,14 | 0 | — | R$ 57,13 | 1,30% | — | 1,26 | — | 10,4% | 5,7% | 3,0% | — |
| Família / Segunda Residência 45 - 65 | 01 | R$ 6,63 | 0 | — | R$ 57,65 | 1,74% | 0,87% | 1,13 | 0% | 9,6% | 5,2% | 3,5% | — |
| Família / Segunda Residência 45 - 65 | 02 | R$ 3,54 | 0 | — | R$ 54,46 | 1,54% | — | 1,08 | — | 21,5% | 13,8% | 6,2% | — |
| Investidor | 02 | R$ 2,41 | 0 | — | R$ 38,87 | 0% | — | 1,15 | — | 4,8% | 3,2% | 1,6% | — |
| LookALike (anúncios excluídos) | — | R$ 310,87 | 5 | R$ 62,17 | — | — | — | — | — | — | — | — | — |

Percentuais de vídeo = visualizações até o ponto ÷ impressões. "Lead/clique link" acima de 100% ou muito alto em anúncios pequenos reflete poucos cliques registrados, não taxa real.

**Agregado por criativo:**

| Criativo | Âncora de preço | Gasto | Leads | CPL | % dos leads da campanha |
|---|---|---|---|---|---|
| 03 | Entrada a partir de R$ 42 mil | R$ 4.091,67 | 246 | R$ 16,63 | 85,1% |
| 04 | sem preço | R$ 683,55 | 22 | R$ 31,07 | 7,6% |
| LookALike (excluídos) | desconhecido | R$ 310,87 | 5 | R$ 62,17 | 1,7% |
| Vídeo Patrícia 1 — Cópia | A partir de R$ 718 mil | R$ 254,00 | 5 | R$ 50,80 | 1,7% |
| Vídeo Patrícia 2 — Cópia | A partir de R$ 718 mil | R$ 226,49 | 2 | R$ 113,25 | 0,7% |
| 01 | Entrada a partir de R$ 42 mil | R$ 208,85 | 7 | R$ 29,84 | 2,4% |
| Vídeo Patrícia 2 | A partir de R$ 718 mil | R$ 84,79 | 2 | R$ 42,40 | 0,7% |
| 02 | Entrada a partir de R$ 42 mil | R$ 19,09 | 0 | — | 0% |

### 2.6 Anúncio × mês (leads / gasto / CPL)

| Conjunto / anúncio | jul | ago | set | out (01–14) |
|---|---|---|---|---|
| Família / Segunda Residência / 03 | 64 / R$ 1.108,59 / R$ 17,32 | 104 / R$ 1.246,05 / R$ 11,98 | 28 / R$ 719,91 / R$ 25,71 | 11 / R$ 330,89 / R$ 30,08 |
| Investidor / 03 | 23 / R$ 268,17 / R$ 11,66 | — | — | — |
| Família / Segunda Residência 45 - 65 / 03 | 9 / R$ 231,17 / R$ 25,69 | — | — | — |
| Família / Segunda Residência — 2 / 03 | — | 4 / R$ 116,39 | 3 / R$ 70,50 | — |
| Família / Segunda Residência / 04 | 8 / R$ 156,53 | 0 / R$ 37,13 | 1 / R$ 17,04 | 2 / R$ 39,30 |
| Conjunto 2 / 04 | — | — | 8 / R$ 265,18 | 3 / R$ 149,67 |
| Família / Segunda Residência / 01 | 4 / R$ 32,46 | 1 / R$ 12,62 | 0 / R$ 9,00 | 0 / R$ 2,17 |
| Família / Segunda Residência / Vídeo Patrícia 1 — Cópia | — | — | 5 / R$ 244,98 | 0 / R$ 9,02 |
| Conjunto 2 / Vídeo Patrícia 2 — Cópia | — | — | 0 / R$ 11,57 | 2 / R$ 165,93 |
| Família / Segunda Residência / Vídeo Patrícia 2 — Cópia | — | — | 0 / R$ 19,70 | 0 / R$ 29,29 |
| Família / Segunda Residência — 2 / Vídeo Patrícia 2 | — | — | 2 / R$ 84,79 | — |
| Família / Segunda Residência — 2 / 01 | — | 0 / R$ 4,85 | 0 / R$ 50,71 | — |
| Conjunto 2 / 01 | — | — | 0 / R$ 31,84 | 0 / R$ 9,51 |
| Investidor / 01 | 2 / R$ 16,13 | — | — | — |
| LKL / 01 | 0 / R$ 32,93 | — | — | — |

O anúncio "03" do conjunto principal roda desde 06/07 (100 dias): CPL R$ 17,32 (jul) → R$ 11,98 (ago) → R$ 25,71 (set) → R$ 30,08 (out); frequência acumulada 2,53; CPM da campanha subiu de R$ 53 (jul) para R$ 72 (out).

### 2.7 Texto integral dos criativos

- **03** (usado em Família, Família — 2, 45-65, LKL, Investidor):
  > "Esse é o tipo de sábado que sua família ainda não tem. Café no garden. Praia Bandeira Azul a poucos passos. Piscina resort com 40 metros de raia. Beach sports. Espaço gourmet com os amigos no fim de tarde. O Ilha Bela é um condomínio-clube em Itacimirim, entre Guarajuba e Praia do Forte, a 30 minutos de Salvador. São 29 unidades. 2 suítes com varanda e garden privativo. **Entrada a partir de R$ 42 mil.** Entrega abril de 2027."
- **01:** mesmo texto do 03, com emojis diferentes. **Entrada a partir de R$ 42 mil.**
- **02:**
  > "Quantas vezes esse ano você pagou diária pra curtir o Litoral Norte na casa dos outros? O Ilha Bela fica a poucos passos da Praia da Espera, uma das únicas do Brasil com Selo Bandeira Azul. Clube com piscina de 40m de raia, beach sports, dois espaços gourmet e academia. 2 suítes com varanda e garden privativo. A 30 minutos de Salvador. São 29 unidades. **Entrada a partir de R$ 42 mil.** Entrega abril de 2027."
- **04:**
  > "Piscina resort com raia de 40m / Praia Bandeira Azul na esquina / Hidromassagem / 2 espaços gourmet / Academia / Quadra poliesportiva. Estrutura completa de clube, dentro do seu condomínio em Itacimirim. Preencha o formulário e receba mais informações do Ilhabela." — **sem preço**
- **Vídeo Patrícia 2 / Vídeo Patrícia 2 — Cópia:**
  > "Village com clube resort a 700m de uma praia bandeira azul. Itacimirim, 30 min de Salvador. **A partir de R$ 718 mil.**"
- **Vídeo Patrícia 1 / Vídeo Patrícia 1 — Cópia** (criativo dinâmico):
  > "Entre Guarajuba e Praia do Forte tem um village com estrutura de resort. **A partir de R$ 718 mil.**" / "Village com clube resort a 700m de uma praia bandeira azul. Itacimirim, 30 min de Salvador. A partir de R$ 718 mil." — Títulos: "Village a 700m da praia Itacimirim" / "Clube resort em Itacimirim"

Todos são vídeo, CTA "Cadastre-se", formulário nativo da Meta.

### 2.8 Idade × gênero (período completo)

| Faixa | Gênero | Gasto | Impressões | CTR | Leads | CPL |
|---|---|---|---|---|---|---|
| 18–24 | F | R$ 15,45 | 668 | 2,25% | 1 | R$ 15,45 |
| 18–24 | M | R$ 13,95 | 511 | 2,35% | 1 | R$ 13,95 |
| 25–34 | F | R$ 189,88 | 4.670 | 2,66% | 7 | R$ 27,13 |
| 25–34 | M | R$ 175,81 | 4.957 | 2,97% | 13 | R$ 13,52 |
| 35–44 | F | R$ 809,28 | 16.079 | 2,57% | 34 | R$ 23,80 |
| 35–44 | M | R$ 990,97 | 22.787 | 2,63% | 57 | R$ 17,39 |
| 45–54 | F | R$ 1.020,54 | 13.894 | 3,15% | 53 | R$ 19,26 |
| 45–54 | M | R$ 1.089,09 | 18.534 | 2,66% | 53 | R$ 20,55 |
| 55–64 | F | R$ 483,61 | 5.208 | 3,28% | 19 | R$ 25,45 |
| 55–64 | M | R$ 530,96 | 6.389 | 3,74% | 26 | R$ 20,42 |
| 65+ | F | R$ 246,28 | 1.705 | 5,45% | 3 | R$ 82,09 |
| 65+ | M | R$ 297,47 | 2.249 | 5,07% | 20 | R$ 14,87 |
| desconhecido | — | R$ 16,02 | 227 | — | 2 | — |

Faixa 18–24 aparece apesar da idade mínima configurada (25): efeito do Advantage+ Audience.

### 2.9 Posicionamento

| Posição | Gasto | Impressões | CPM | CTR | Leads | CPL |
|---|---|---|---|---|---|---|
| Instagram Stories | R$ 3.285,17 | 53.671 | R$ 61,21 | 2,79% | 163 | R$ 20,15 |
| Instagram Reels | R$ 1.908,42 | 28.276 | R$ 67,49 | 4,07% | 88 | R$ 21,69 |
| Instagram Feed | R$ 646,54 | 15.022 | R$ 43,04 | 1,20% | 36 | R$ 17,96 |
| Facebook Feed | R$ 38,80 | 909 | R$ 42,68 | 4,18% | 2 | R$ 19,40 |

Feed (Instagram e Facebook) só rodou nos conjuntos antigos; os conjuntos ativos desde agosto usam só Stories + Reels.

### 2.10 Hora do dia (fuso da conta)

| Hora | Gasto | Leads | CPL | | Hora | Gasto | Leads | CPL |
|---|---|---|---|---|---|---|---|---|
| 00 | R$ 151,87 | 5 | R$ 30,37 | | 12 | R$ 302,80 | 17 | R$ 17,81 |
| 01 | R$ 65,54 | 2 | R$ 32,77 | | 13 | R$ 353,96 | 17 | R$ 20,82 |
| 02 | R$ 34,92 | 1 | R$ 34,92 | | 14 | R$ 263,14 | 17 | R$ 15,48 |
| 03 | R$ 25,98 | 2 | R$ 12,99 | | 15 | R$ 262,37 | 13 | R$ 20,18 |
| 04 | R$ 52,24 | 1 | R$ 52,24 | | 16 | R$ 256,75 | 14 | R$ 18,34 |
| 05 | R$ 110,94 | 7 | R$ 15,85 | | 17 | R$ 274,22 | 12 | R$ 22,85 |
| 06 | R$ 264,05 | 10 | R$ 26,41 | | 18 | R$ 277,59 | 11 | R$ 25,24 |
| 07 | R$ 357,87 | 16 | R$ 22,37 | | 19 | R$ 301,77 | 14 | R$ 21,55 |
| 08 | R$ 356,10 | 18 | R$ 19,78 | | 20 | R$ 337,09 | 20 | R$ 16,85 |
| 09 | R$ 338,77 | 16 | R$ 21,17 | | 21 | R$ 339,26 | 18 | R$ 18,85 |
| 10 | R$ 307,44 | 10 | R$ 30,74 | | 22 | R$ 302,75 | 18 | R$ 16,82 |
| 11 | R$ 314,26 | 14 | R$ 22,45 | | 23 | R$ 227,63 | 16 | R$ 14,23 |

72 dos 289 leads (25%) entram entre 20h e 23h59.

---

## 3. Comercial — Clint CRM

### 3.1 Estrutura da conta

**Funis e etapas (ordem):**
- **Agendamento | Ilhabela** (lead novo): Entrada → D1 → D2 → D3 → D4 → D5 → D6 → Qualificado → Visita Agendada → No-Show → Visita Realizada.
- **Pós-Agendamento | Ilhabela** (novo, vazio): ETAPA 1 → 2 DIAS ANTES DA VISITA → 1 DIA ANTES DA VISITA.
- **Pós Visita | Ilhabela:** Proposta → Negociação → Fechamento.
- **Reativação | Ilhabela:** Nunca alcançado → Qualificado sem agendamento → Não compareceu → D1 → D2 → D3 → D4 → D5 → D6 → Visitou e não fechou → Não tem mais interesse → Qualificado → Deixar para o Ano que vem.
- **Webinário (T01)** (novo, vazio): Base → Fechado.

**Usuários:** Fernanda Araújo, Jose Ubaldo Gonzaga, "Primor Empreendimentos" (conta genérica). Felipe Lisbôa removido.

**Motivos de perda (8):** Compra futura, Tentativas esgotadas, Busca outro produto, Não é o momento, Sem interesse, Sem perfil, Comprou com outra empresa, Comprou com concorrente.

**Perguntas do formulário "|Formulário IlhaBela| ATUAL 27/08/26"** (inferidas pelos campos que chegam na Clint; o formulário não é legível com o token atual):
1. "O village custa a partir de R$ 718 mil, com sinal de R$ 43 mil pago na assinatura. Esse valor cabe no seu planejamento?" → tag `_está_dentro`
2. "Como pretende viabilizar o investimento?" → recursos próprios / financiamento / preciso vender outro imóvel antes
3. "Você já conhece Itacimirim?"
4. Autoriza contato → "sim! quero falar com a construtora" (tag `sim`)

### 3.2 Composição da base

| Grupo | Quantidade | Observação |
|---|---|---|
| Contatos totais | 640 | 510 criados em agosto, 100 em setembro, 30 em outubro |
| Contatos com pelo menos 1 negócio | 266 | |
| — base migrada (tag `base-migrada`) | 200 | negócios criados em 31/08 por migração; data real de entrada perdida |
| — nativos (entraram depois da migração) | 66 | 55 com formulário "ATUAL 27/08/26" |
| Contatos sem nenhum negócio | 374 | 293 criados em 27/08, 28 em 11/09, 11 em 30/09; 230 com telefone; 132 com nome "Desconhecido…"; 365 sem tag |
| Contatos com mais de 1 negócio | 13 | passaram por mais de um funil |
| Negócios totais | 280 | 97 Agendamento, 179 Reativação, 4 Pós Visita; 200 abertos, 80 perdidos, 0 ganhos |

**Atribuição de anúncio nos negócios (campo `ad_name`):** sem atribuição 137 · "Família / Segunda Residência" 75 (nome do conjunto, usado pela integração antiga — 74 deles na base migrada) · 03 40 · 04 14 · Vídeo Patrícia 1 — Cópia 5 · Investidor 4 · Vídeo Patrícia 2 — Cópia 2 · LookALike 2 · Vídeo Patrícia 2 1.

### 3.3 Reconciliação Meta × Clint

| Período | Leads Meta | Negócios na Clint com atribuição à campanha | Diferença |
|---|---|---|---|
| jul–ago (antes da Clint) | 224 | entram como base migrada (sem data real) | não reconciliável |
| setembro | 47 | 37 | −10 (21%) |
| outubro (01–14) | 18 | 17 | −1 |

### 3.4 Funil contado por lead (melhor etapa que cada contato já atingiu, em qualquer funil)

Níveis: 0 = nunca contatado/entrada · 1 = em contato (D1–D6, inclui "não tem mais interesse" e "deixar para o ano que vem") · 2 = qualificado · 3 = visita agendada / no-show / não compareceu · 4 = visita realizada / visitou e não fechou · 5 = proposta/negociação · 6 = fechamento.

| Grupo | Leads | Contatados (≥1) | Qualificados (≥2) | Visita agendada+ (≥3) | Visita realizada+ (≥4) | Proposta (≥5) | Fechamento | % qualificado | % visita realizada | Todos os negócios perdidos | Com negócio aberto |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Total** | 266 | 137 | 37 | 10 | 8 | 4 | 0 | 13,9% | 3,0% | 70 | 196 |
| Base migrada | 200 | 86 | 15 | 7 | 6 | 4 | 0 | 7,5% | 3,0% | 53 | 147 |
| Nativos | 66 | 51 | 22 | 3 | 2 | 0 | 0 | 33,3% | 3,0% | 17 | 49 |
| Nativos — entrada fim de ago | 9 | 8 | 5 | 0 | 0 | 0 | 0 | 55,6% | 0% | 1 | 8 |
| Nativos — 1ª quinzena set | 22 | 15 | 7 | 0 | 0 | 0 | 0 | 31,8% | 0% | 8 | 14 |
| Nativos — 2ª quinzena set | 16 | 13 | 7 | 1 | 0 | 0 | 0 | 43,8% | 0% | 3 | 13 |
| Nativos — 1ª quinzena out | 19 | 15 | 3 | 2 | 2 | 0 | 0 | 15,8% | 10,5% | 5 | 14 |

Coortes recentes são imaturas (menos tempo para avançar).

### 3.5 Por anúncio, contado por lead

**Todos os leads (inclui base migrada):**

| Anúncio | Leads | Contatados | Qualificados | Visita realizada+ | Proposta | % qualificado | Todos perdidos |
|---|---|---|---|---|---|---|---|
| Sem atribuição | 125 | 50 | 10 | 3 | 2 | 8,0% | 8 |
| "Família / Segunda Residência" (integração antiga, jul–ago) | 75 | 39 | 11 | 3 | 2 | 14,7% | 43 |
| 03 | 40 | 26 | 8 | 0 | 0 | 20,0% | 15 |
| 04 | 13 | 12 | 4 | 0 | 0 | 30,8% | 1 |
| Investidor | 4 | 1 | 0 | 0 | 0 | 0% | 3 |
| Vídeo Patrícia 1 — Cópia | 4 | 4 | 2 | 0 | 0 | 50,0% | 0 |
| Vídeo Patrícia 2 — Cópia | 2 | 2 | 2 | 2 | 0 | 100% | 0 |
| LookALike | 2 | — | 0 | 0 | 0 | 0% | — |
| Vídeo Patrícia 2 | 1 | 1 | 0 | 0 | 0 | 0% | 0 |

**Custo por resultado no período com integração nativa (01/09–14/10, gasto Meta por criativo × leads atribuídos na Clint criados no período, melhor etapa do contato):**

| Criativo | Âncora | Gasto 01/09–14/10 | Leads Clint | Qualificados | Visita agendada+ | Visita realizada | Perdidos | Custo por lead Clint | Custo por qualificado | Custo por visita realizada |
|---|---|---|---|---|---|---|---|---|---|---|
| 03 | R$ 42 mil de entrada | R$ 1.121,30 | 39 | 8 | 0 | 0 | 15 | R$ 28,75 | R$ 140,16 | — |
| 04 | sem preço | R$ 472,42 | 14 | 4 | 1 | 0 | 1 | R$ 33,74 | R$ 118,11 | — |
| Vídeo Patrícia 1 — Cópia | R$ 718 mil | R$ 254,00 | 5 | 3 | 0 | 0 | 0 | R$ 50,80 | R$ 84,67 | — |
| Vídeo Patrícia 2 — Cópia | R$ 718 mil | R$ 226,49 | 2 | 2 | 2 | 2 | 0 | R$ 113,25 | R$ 113,24 | R$ 113,24 |
| Vídeo Patrícia 2 | R$ 718 mil | R$ 84,79 | 1 | 0 | 0 | 0 | 0 | R$ 84,79 | — | — |
| 01 | R$ 42 mil de entrada | R$ 103,23 | 0 | 0 | 0 | 0 | 0 | — | — | — |
| **Total** | | **R$ 2.262,23** | **61** | **17** | **3** | **2** | **16** | **R$ 37,09** | **R$ 133,07** | **R$ 1.131,12** |

Amostras de "Vídeo Patrícia" são pequenas (1–5 leads por criativo).

Referência anterior: custo por qualificado nos 30 dias até 28/09 = R$ 77,94 (cálculo pela etapa atual dos negócios criados no período).

### 3.6 Por corretor, contado por lead (responsável atual pelo negócio mais recente)

| Corretor | Leads | Contatados | Qualificados | Visita agendada+ | Visita realizada+ | Proposta | % qualificado | % visita realizada | Todos perdidos | Com negócio aberto |
|---|---|---|---|---|---|---|---|---|---|---|
| Fernanda Araújo | 108 | 75 | 28 | 2 | 1 | 0 | 25,9% | 0,9% | 42 | 66 |
| Jose Ubaldo Gonzaga | 23 | 20 | 6 | 6 | 6 | 3 | 26,1% | 26,1% | 3 | 20 |
| Primor (genérico) | 38 | 17 | 3 | 2 | 1 | 1 | 7,9% | 2,6% | 20 | 18 |
| Sem corretor | 97 | 25 | 0 | 0 | 0 | 0 | 0% | 0% | 5 | 92 |

**Só leads nativos:**

| Corretor | Leads | Qualificados | Visita realizada | % qualificado | Todos perdidos |
|---|---|---|---|---|---|
| Fernanda Araújo | 56 | 20 | 0 | 35,7% | 10 |
| Jose Ubaldo Gonzaga | 5 | 2 | 2 | 40,0% | 2 |
| Primor (genérico) | 5 | 0 | 0 | 0% | 5 |

- Das 8 visitas realizadas da conta: Ubaldo 6, Fernanda 1, conta genérica 1.
- Das 4 propostas: Ubaldo 3, conta genérica 1.
- Variáveis misturadas: os 2 leads nativos do Ubaldo com visita realizada vieram do criativo "Vídeo Patrícia 2 — Cópia"; parte dos leads do Ubaldo é base migrada que já estava em andamento. Os dados não separam efeito do corretor, do criativo e da origem do lead.

**Negócios abertos hoje por corretor × funil:**

| Corretor | Agendamento | Pós Visita | Reativação | Total |
|---|---|---|---|---|
| Fernanda Araújo | 67 | 0 | 0 | 67 |
| Jose Ubaldo Gonzaga | 20 | 3 | 0 | 23 |
| Primor (genérico) | 1 | 1 | 9 | 11 |
| Sem corretor | 0 | 0 | 99 | 99 |

### 3.7 Panorama aberto hoje e tempo parado

| Funil | Etapa | Abertos | Dias parado (mediana) | > 7 d | > 14 d |
|---|---|---|---|---|---|
| Agendamento | D1 | 1 | 0 | 0 | 0 |
| Agendamento | D2 | 3 | 0 | 0 | 0 |
| Agendamento | D3 | 14 | 15 | 7 | 7 |
| Agendamento | D4 | 36 | 15 | 29 | 19 |
| Agendamento | D6 | 1 | 0 | 0 | 0 |
| Agendamento | Qualificado | 26 | 19 | 24 | 21 |
| Agendamento | Visita Agendada | 1 | 13 | 1 | 0 |
| Agendamento | No-Show | 1 | 1 | 0 | 0 |
| Agendamento | Visita Realizada | 5 | 3 | 2 | 2 |
| Pós Visita | Proposta | 4 | 43 | 4 | 4 |
| Reativação | Nunca alcançado | 75 | 43 | 75 | 75 |
| Reativação | D1 | 14 | 8 | 7 | 0 |
| Reativação | D2 | 6 | 1 | 0 | 0 |
| Reativação | Visitou e não fechou | 1 | 43 | 1 | 1 |
| Reativação | Não tem mais interesse | 10 | 8 | 6 | 0 |
| Reativação | Deixar para o Ano que vem | 2 | 12 | 1 | 0 |

"Dias parado" = hoje − data da última mudança de etapa. Agendamento: 88 abertos, idade mediana desde a criação 42 dias, 71 com mais de 14 dias, 56 com mais de 30 dias.

### 3.8 Perdas

- **Total: 80 negócios** (70 leads com todos os negócios perdidos).
- **Motivo:** Tentativas esgotadas 35 · Sem perfil 18 · Busca outro produto 11 · Sem interesse 8 · Compra futura 2 · Comprou com concorrente 2 · Comprou com outra empresa 2 · Não é o momento 1 · sem motivo 1.
- **Funil/etapa:** Reativação/Nunca alcançado 65 · Reativação/D1 5 · Agendamento/D6 3 · Agendamento/D2 2 · Agendamento/D4 2 · Agendamento/D3 1 · Agendamento/Qualificado 1 · Reativação/Não tem mais interesse 1.
- **Quem registrou:** sem autor 37 · Primor (genérico) 28 · Fernanda 12 · Ubaldo 3.
- **Motivo por lead — nativos (17):** Tentativas esgotadas 6 · Sem interesse 5 · Busca outro produto 4 · Sem perfil 2.
- **Motivo por lead — base migrada (53):** Tentativas esgotadas 22 · Sem perfil 16 · Busca outro produto 5 · Sem interesse 3 · Comprou com concorrente 2 · Comprou com outra empresa 2 · Compra futura 1 · Não é o momento 1 · sem motivo 1.
- **Motivo × anúncio:** "Família / Segunda Residência" → Tentativas esgotadas 18, Sem perfil 13, Busca outro produto 4, Sem interesse 2, Compra futura 1, Outra empresa 1 · "03" → Tentativas esgotadas 5, Sem interesse 5, Busca outro produto 2, Sem perfil 2, sem motivo 1 · Sem atribuição → Tentativas esgotadas 5, Busca outro produto 3, Concorrente 2, Sem perfil 1, Sem interesse 1, Outra empresa 1, Não é o momento 1 · "04" → Tentativas esgotadas 2 · Investidor → 1 cada (Tentativas, Busca outro produto, Sem perfil) · Vídeo Patrícia 1 — Cópia → Compra futura 1, Tentativas esgotadas 1.
- **Perdas por dia:** 08/09 1 · 10/09 4 · 14/09 1 · 16/09 1 · 17/09 1 · 18/09 2 · 21/09 2 · 22/09 1 · 23/09 2 · 24/09 2 · 25/09 3 · 28/09 4 · 29/09 2 · 01/10 1 · 05/10 1 · 06/10 4 · 07/10 3 · 08/10 2 · 09/10 3 · **11/10 28** · 12/10 2 · 13/10 5 · 14/10 5.
- Mediana de dias entre entrada e perda: 35.
- 4 leads novos de outubro foram criados direto em "Reativação / Nunca alcançado" e perdidos entre 4 e 8 dias depois.

### 3.9 Visitas com data estruturada (`latest_meeting_datetime`)

| Negócio | Funil | Etapa atual | Status | Corretor | Entrada | Visita marcada | Dias entrada→visita | Já passou | Anúncio |
|---|---|---|---|---|---|---|---|---|---|
| 7a6e3ccb | Agendamento | D2 | Perdido | Fernanda | 31/08 | 18/09 14:30 | 17 | sim | Família / Segunda Residência |
| b9da850d | Agendamento | D3 | Aberto | Fernanda | 31/08 | 18/09 15:00 | 17 | sim | Família / Segunda Residência |
| f7a4bc5a | Agendamento | Qualificado | Perdido | Fernanda | 11/09 | 19/09 09:00 | 7 | sim | — |
| 4fd3fba6 | Agendamento | Qualificado | Aberto | Fernanda | 06/09 | 21/09 08:30 | 14 | sim | 03 |
| 28745047 | Agendamento | Qualificado | Aberto | Fernanda | 31/08 | 21/09 09:00 | 20 | sim | — |
| c59acf05 | Reativação | D2 | Aberto | Primor | 31/08 | 02/10 14:00 | 31 | sim | — |
| abd7b623 | Reativação | Não tem mais interesse | Perdido | Primor | 31/08 | 02/10 17:30 | 31 | sim | — |
| 3344df46 | Agendamento | Qualificado | Aberto | Fernanda | 31/08 | 06/10 09:30 | 35 | sim | Família / Segunda Residência |
| 0569d777 | Agendamento | Qualificado | Aberto | Fernanda | 31/08 | 06/10 09:30 | 35 | sim | Família / Segunda Residência |
| 20582873 | Agendamento | Qualificado | Aberto | Fernanda | 01/10 | 07/10 09:45 | 5 | sim | 04 |
| 5a5596d5 | Agendamento | No-Show | Aberto | Primor | 31/08 | 07/10 15:00 | 36 | sim | — |
| 2ef48b71 | Agendamento | Visita Agendada | Aberto | Fernanda | 27/09 | 18/10 09:00 | 20 | não | 04 |
| 6b0b885f | Reativação | Deixar para o Ano que vem | Aberto | Primor | 31/08 | 01/11 10:00 | 61 | não | — |

- 11 visitas com data passada: 1 marcada como No-Show, nenhuma como Visita Realizada. Os 5 negócios em "Visita Realizada" não têm data de visita no campo estruturado (dois registros que não conversam).
- 8 das 11 visitas vencidas são de leads da Fernanda.
- Mediana entre entrada e visita marcada: 20 dias (n = 13).

### 3.10 Qualificação

- **Pergunta de preço:** "sim, está dentro" em 100% dos que têm o campo (25 contatos com `service_rating` + tag `_está_dentro` em 40).
- **Forma de viabilização** (40 negócios com o formulário novo): recursos próprios 24 · financiamento 13 · precisa vender outro imóvel 3.
- **Momento do investimento** (Agendamento, 97 negócios): não preenchido 60 · Próximos meses 9 · Ainda não sei 8 · financiamento 6 · recursos próprios 6 · Próximos dias 3 · preciso vender outro imóvel antes 3 · Próximos anos 2. Cruzamento: Próximos meses → 4 de 9 qualificados (1 visita) · Ainda não sei → 3 de 8 (2 perdidos) · financiamento → 3 de 6 · recursos próprios → 2 de 6 · Próximos dias → 0 de 3 · não preenchido → 21 de 60 (6 visitas).
- **Já conhece Itacimirim** (Agendamento): já conhece/frequenta 24 · ainda não conhece 30 · conhece de nome 10 · não preenchido 33. Cruzamento: "já_conheço/frequento" → 10 de 16 qualificados (63%) · "Já conheço / frequento" → 2 de 8 · "ainda_não_conheço" → 6 de 23 (26%) · "Ainda não conheço" → 1 de 7 · "conheço_de_nome" → 1 de 7 · "Conheço de nome" → 0 de 3 · não preenchido → 14 de 33. (Grafias duplicadas: formulário vs preenchimento manual.)
- **Perdas "Sem perfil" — trechos (anonimizados):** "está buscando um investimento mais em conta"; "interessada em empreendimento de até R$ 400k"; "interessado em comprar imóvel na planta até R$ 450K, usando o seu FGTS"; "o esposo está dando preferência por comprar lote de até R$ 300K".

### 3.11 Tags e redistribuição

- **Tags mais frequentes nos contatos:** base-migrada 159 · base-migrada;perdido-historico 47 · _está_dentro 40 · sim 40 · automação 38 · redistribuido 27 · QUALIFICADO 21 · "Gabriel Goto" 13 · "Bruno Lima" 10 · QUENTE 4 · "Contato agendado para Out/2026" 2 · ATENÇÃO 1 · Prioridade alta 1 · baixo padrão 1 · "AGENDADO 25/09 15:00" 1 · VISITA AGENDADA 1 · FRIO 1.
- **Redistribuição (tag `redistribuido`):** 27 contatos, 32 negócios; entrada: agosto 6, setembro 15, outubro 11; corretor atual: Fernanda 19, conta genérica 6, Ubaldo 4, sem corretor 3; etapa atual: Agendamento/D4 8, Agendamento/Qualificado 6, Agendamento/D3 5, Agendamento/Visita Realizada 2, Reativação/Nunca alcançado 9, Reativação/D1 1, Reativação/D2 1; status: 24 abertos, 8 perdidos. A API não informa de quem para quem nem quando.

### 3.12 Contatos que passaram por mais de um funil (13)

Padrões (negócios em ordem de criação, funil/etapa/status):
- Contato da base em Reativação que também está (ou voltou) no Agendamento (4 casos): "Reativação/Nunca alcançado/Perdido (31/08) → Agendamento/D4/Aberto (24/09)"; "Reativação/D2/Aberto (31/08) → Agendamento/D4/Aberto (03/10)"; "Reativação/Nunca alcançado/Aberto (31/08) → Agendamento/D4/Aberto (18/09)"; "Reativação/Nunca alcançado/Perdido (31/08) + Agendamento/D4/Aberto (31/08)".
- Lead em andamento no Agendamento que ganhou um segundo negócio perdido na Reativação (2 casos): "Agendamento/Qualificado/Aberto (31/08) → Reativação/Nunca alcançado/Perdido (18/09)"; "Agendamento/D4/Aberto (31/08) → Reativação/Nunca alcançado/Perdido (18/09)".
- Proposta + visita realizada para o mesmo contato (2 casos): "Pós Visita/Proposta/Aberto (31/08) + Agendamento/Visita Realizada/Aberto (14/09)" — são os 2 negócios com data de ganho.
- Duplicidade na Reativação (3 casos): mesmo contato com um negócio "Nunca alcançado" perdido e outro "Nunca alcançado" aberto, ambos de 31/08.
- Outros (2 casos): "Reativação/D1/Aberto (31/08) → Reativação/Nunca alcançado/Perdido (22/09)"; "Reativação/Visitou e não fechou/Aberto (31/08) → 2 negócios Reativação/Nunca alcançado/Perdido (14/09)".

### 3.13 Anotações dos corretores (191 negócios com texto)

**Temas (nº de negócios cujo texto menciona):** "vai pensar"/sem retorno/não responde 24 · entrada/financiamento/FGTS/banco 20 · visita 13 · cônjuge/família decide 10 · investimento/renda/aluguel 7 · casa solta/tipologia/nº de quartos 5 · preço/valor/caro 3 · concorrente/outro empreendimento 1 · distância/localização 1.

**Trechos representativos (anonimizados):**
- "Cliente já havia entrado em contato no início do ano, só tem interesse em 3/4. Convidei para conhecer o Ilha Bela, mas sem interesse."
- "Cliente pediu pra enviar o material pelo zap e disse para eu entrar em contato dia 01/09 para ver se no feriado ele consegue vir de Feira de Santana." (perdido, Tentativas esgotadas)
- "Cliente retornou contato e já está ciente das condições para análise. Retornar contato dia 14/08 para agendar visita." (perdido, Tentativas esgotadas)
- "Cliente gostou do empreendimento, 1 etapa para poder financiar junto ao banco. Pediu para ligar na segunda, 31/08, para agendar a visita no dia da folga do esposo." (perdido, Tentativas esgotadas)
- "Fiz 3 tentativas de contato e a mensagem é sempre que esse número não existe e também não tem WhatsApp." (perdido, Sem perfil)
- "Cliente não atende ligação, já passei o material pelo WhatsApp e venho solicitando feedback, sem sucesso já 3x."
- "Cliente em contato, mas não gostaria do 'estilo' Village, tem preferência por casa solta. Tentando agendar visita para retirar as objeções."
- "Cliente está buscando Village ou casa de 3 ou 4 quartos." (perdido, Busca outro produto)
- "Cliente não irá realizar nenhum investimento até o final deste ano."
- "Cliente não possui valores para a aquisição, precisa vender um imóvel para fazê-lo." (perdido, Tentativas esgotadas)
- "Cliente pesquisa possibilidade na Linha Verde, Porto de Sauípe." (perdido, Tentativas esgotadas)
- "Passei informações, ficou de conversar com esposo." (perdido, Tentativas esgotadas)
- "Cliente atende a ligação, me identifico e depois ela fica muda todas as vezes."
- "Cliente não compareceu, conversamos, não demonstrou interesse."
- "Cliente em pesquisa, interesse por lançamento."
- "Cliente já em atendimento com Felipe desde início do mês."

Vários negócios fechados como "Tentativas esgotadas" têm anotação de cliente que respondeu e pediu retorno em data específica.

---

## 4. Lacunas e limitações

1. **Leads de julho e agosto (224 na Meta) não têm rastreio individual na Clint:** entraram via migração em 31/08 sem a data real; parte com atribuição pelo nome do conjunto ("Família / Segunda Residência"), parte sem atribuição. Taxas de julho/agosto por criativo não são calculáveis.
2. **Causa da parada de entrega (12–14/10) não confirmada** — sem permissão de cobrança no token.
3. **Fase de aprendizado:** campo da Meta vem sempre vazio.
4. **Sem histórico de transições na Clint:** só etapa atual e última mudança. Não dá para medir tempo até o primeiro contato, tempo entre etapas, nem trajetória de redistribuição.
5. **Tempo de primeira resposta ao lead não medido:** a documentação da Clint lista endpoints de conversas (Chats/Messages), mas os caminhos testados retornaram 404 e o site da documentação está bloqueado neste ambiente.
6. **Funil por lead usa a melhor etapa atual** dos negócios do contato; não confirma que o lead passou formalmente por cada etapa.
7. **Coortes de setembro/outubro imaturas**; amostras por criativo "Vídeo Patrícia" muito pequenas (1–5 leads).
8. **Não houve casamento lead-a-lead por telefone** entre Meta e Clint; a reconciliação é por contagem mensal e campo de atribuição.
9. **Formulário da Meta não legível** com o token atual; perguntas inferidas pelos campos.
10. **"Ganhos" inconsistentes** (2 negócios com data de ganho, status aberto, valor R$ 0).
11. **Origem dos 374 contatos sem negócio não identificável** pela API (importação de 27/08 e entradas posteriores; provável WhatsApp, não confirmado).

---

## 5. Padrões que os dados mostram (observações, não recomendações)

1. **Custo por resultado (01/09–14/10):** R$ 37 por lead na Clint, R$ 133 por qualificado, R$ 1.131 por visita realizada, 0 vendas.
2. **CPL subiu continuamente:** R$ 15–17 em jul/ago → R$ 32 em set → R$ 41 em out, com CPM de R$ 53 → R$ 72 e o mesmo criativo principal ("03") rodando há 100 dias.
3. **Um criativo concentra a campanha:** "03" (âncora "Entrada a partir de R$ 42 mil") = 85% dos leads e 70% do gasto. Na Clint (set–out) qualificou 8 de 39 e nenhum chegou a visita. Os criativos com âncora "R$ 718 mil" geraram poucos leads, mais caros, com qualificação mais alta (Vídeo Patrícia 1: 3 de 5; Vídeo Patrícia 2 — Cópia: 2 de 2, ambos com visita realizada).
4. **A pergunta de preço não filtra** (100% "sim"), enquanto perdas "Sem perfil" citam orçamentos de R$ 300–450 mil.
5. **Qualificação dos leads nativos caiu ao longo do tempo:** 56% (fim de ago) → 32–44% (set) → 16% (1ª quinzena out, imatura).
6. **Visita é o gargalo principal:** 37 leads qualificados na história, 10 chegaram a ter visita agendada, 8 com visita realizada, 4 propostas, 0 fechamentos. 26 qualificados abertos estão parados há mediana de 19 dias.
7. **Resultado muito diferente por corretor:** Fernanda tem 108 leads e 1 visita realizada; Ubaldo tem 23 leads e 6 visitas realizadas e 3 propostas. Fernanda recebe 85% dos leads novos. Os dados não isolam o efeito do corretor (origem e criativo dos leads diferem).
8. **Leads fora do funil ou sem dono:** 374 contatos sem negócio, 99 negócios sem corretor, 10 leads de setembro da Meta sem negócio atribuído na Clint.
9. **Perda por esgotamento domina:** 35 de 80 perdas são "Tentativas esgotadas", a maioria em "Reativação / Nunca alcançado"; 28 foram fechadas num único dia; parte tem anotação de cliente pedindo retorno.
10. **Leads que já conhecem Itacimirim qualificam mais** (63% vs 26% dos que não conhecem, na grafia do formulário).
11. **Horário:** 25% dos leads entram entre 20h e 23h59.
12. **Posicionamento:** Stories gera mais volume (163 leads); Reels tem CTR maior (4,07%); Feed (só nos conjuntos antigos) teve o menor CPM (R$ 43) e CPL de R$ 17,96.
13. **Retenção dos vídeos:** 7,5% a 16,9% das impressões chegam a 25% do vídeo; 1,8% a 4,9% chegam ao fim (anúncios com gasto relevante).
14. **Os dois últimos conjuntos ativos ao mesmo tempo tinham segmentação idêntica** (um deles foi pausado hoje).
