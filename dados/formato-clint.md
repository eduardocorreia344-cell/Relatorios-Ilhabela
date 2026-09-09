# Formato de dados — Clint CRM

Referência técnica de como puxar dados da Clint pros relatórios Ilha Bela. Documentado após a primeira integração (setembro/2026).

## Acesso

- Base URL: `https://api.clint.digital/v1`
- Autenticação: header customizado `api-token: <token>` (sem prefixo `Bearer`, diferente do padrão OAuth)
- Token: gerado em Clint → Conta → API → chave escopada (não usar a chave legada global)
- Documentação oficial: https://clint-api.readme.io/reference

## Endpoints usados

- `GET /v1/contacts` — lista de contatos (nome, telefone, e-mail, campos customizados). Paginação via `limit`/`offset`/`page`, máx. 1000/página.
- `GET /v1/deals` — negócios. Campos principais: `stage`, `status` (OPEN/WON/LOST), `origin_id`, `created_at`, `updated_stage_at`, `contact`, `fields` (custom fields do negócio, inclui atribuição nativa de Facebook Lead Ads: `ad_name`, `ad_id`, `campaign_name`, `campaign_id`, `form_name`, `form_id`).
- `GET /v1/origins` — lista os funis/pipelines configurados na conta, com seus estágios. Essencial: **existem 3 funis separados** para o Ilha Bela, não um funil único:
  - `Agendamento | Ilhabela` (id `ea2ae286-caae-4271-952d-5148d96b53cf`) — funil principal de entrada de lead novo (Entrada → D1-D6 → Qualificado → Visita Agendada → No-Show/Perdido)
  - `Pós Visita | Ilhabela` (id `e58fe5d2-28de-4c57-9978-c411a2a5414b`) — Proposta → Negociação → Fechamento
  - `Reativação | Ilhabela` (id `aa9977d7-6441-4bd2-ab56-a1433bef00d0`) — retrabalho de leads antigos (Nunca alcançado → Qualificado sem agendamento → Não compareceu/Visitou e não fechou)
  - **Sempre filtrar negócios por `origin_id` antes de somar/comparar** — misturar os três funis distorce qualquer leitura de funil ou comparação com gasto de mídia.
- `GET /v1/lost-status` — motivos de perda pré-cadastrados (7 opções fixas).
- `GET /v1/account/fields` — campos customizados configurados na conta, por entidade (DEAL/CONTACT/ORGANIZATION). Confirma os campos nativos do Facebook Lead Ads e os campos de qualificação de contato (`ja_conhece_itacimrim`, `momento_do_investime`, `unidade_de_interesse`).

## Limitações conhecidas (validado em produção, não suposição)

1. **Não existe histórico estruturado de mudança de etapa.** `updated_stage_at` grava só a última transição — não dá pra reconstruir quando um negócio passou por cada etapa anterior.
2. **Datas de agendamento e realização de visita vivem em texto livre** no campo `fields.notes`, escritas à mão pelo corretor (ex: "Cliente agendado para sáb, dia 29/08"). Sem padrão, sem ano, não parseável com confiabilidade. Por isso a métrica de no-show por timing (dias entre agendamento e realização) não é calculável via API hoje.
3. **Motivo de perda estruturado (`lost_status_id`) frequentemente não é preenchido** mesmo quando o negócio está na etapa "Perdido" — o time move o card no board sem fechar o registro formalmente.
4. **Nem todo negócio tem atribuição de anúncio** (`fields.ad_name` vazio) — parte relevante do funil principal (Agendamento) vem sem esse campo, provavelmente WhatsApp direto/orgânico, não rastreável até um anúncio específico sem dado adicional.
5. **A etapa "Qualificado" não tem critério 100% estruturado.** A maioria dos negócios qualificados tem pelo menos um dos três campos de qualificação do contato preenchido, mas nenhum tem os três completos — a qualificação é parcial, não um checklist fechado.
