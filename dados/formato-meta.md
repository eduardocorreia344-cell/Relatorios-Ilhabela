# Formato de dados — Meta Marketing API

Referência técnica de como puxar dados de mídia pros relatórios Ilha Bela. Documentado após a primeira integração (setembro/2026).

## Acesso

- Base URL: `https://graph.facebook.com/v26.0` (checar versão vigente periodicamente — a Meta depreca versões antigas e a API retorna erro `#2635` avisando a versão atual quando isso acontece)
- Autenticação: header padrão `Authorization: Bearer <token>`
- Token: gerado via Usuário do Sistema (Business Manager → Usuários → Usuários do sistema), com permissão `ads_read` apenas, associado a um app dedicado ("Provecta Relatorios Ilha Bela") com o caso de uso **"Criar e gerenciar anúncios com a API de Marketing"** ativado — sem isso a etapa de gerar token não oferece nenhuma permissão pra atribuir.
- Conta de anúncios: `act_1369565881399220` ("Conta PRIMOR + PROVECTA VGV") — **atenção**: essa conta tem campanhas de outros empreendimentos da Provecta (ex: Mood Club Costa Azul). Sempre filtrar pela campanha certa, nunca puxar a conta inteira.
- Campanha Ilha Bela: `120248791202240411` ("Leads | Formulário | IlhaBela  Itacimirim")
- Nível de acesso observado: `ads_api_access_tier: development_access` — limite de chamadas por hora mais baixo que Standard Access; suficiente para um pull semanal/mensal de uma conta só.

## Endpoints usados

- `GET /act_.../campaigns` — lista campanhas (id, nome, status).
- `GET /{campaign_id}/adsets?fields=...,learning_stage_info` — conjuntos de anúncios. `learning_stage_info` existe como campo (não dá erro `#100` de campo inexistente) mas vem vazio quando o conjunto não está em fase de aprendizado — é uma inferência por ausência, não uma confirmação direta de status "ACTIVE".
- `GET /{campaign_id}/insights?level=ad&fields=adset_name,ad_name,spend,impressions,cpm,ctr,frequency,reach,actions,cost_per_action_type&time_range={"since":...,"until":...}` — a métrica de leads vem dentro do array `actions`, procurando `action_type == "lead"` (para campanhas de formulário nativo).

## Limitações conhecidas

- O volume de negócios abertos no funil "Agendamento" da Clint no mesmo período (116) é maior que o total de leads reportado pela Meta para essa campanha (93) — a diferença provavelmente vem de outros canais de entrada (WhatsApp direto, indicação, campanhas antigas pausadas ainda gerando conversa) que também alimentam o mesmo funil comercial. Não foi feito casamento individual lead-a-lead (nome/telefone) nesta primeira rodada — isso exigiria puxar as submissões brutas do formulário de Lead Ads (endpoint `/{ad_id}/leads`), não só o agregado de insights.
