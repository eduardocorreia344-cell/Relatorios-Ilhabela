# Relatórios Ilha Bela · Provecta VGV

Relatórios de performance (Meta Ads × Clint CRM) do Ilha Bela Itacimirim Villages.

- `relatorio-ilhabela-*.html` / `.pdf` — relatórios fechados de cada período.
- `site/` — painel web do relatório mais recente, pronto para a Vercel.
- `dados/` — referência das APIs e histórico agregado. **Não é publicado** no site.

## Publicar o painel na Vercel

1. Vercel → Add New → Project → importar este repositório.
2. Em **Root Directory**, escolher `site` (assim só a pasta do painel vai para o ar).
3. Framework Preset: **Other**. Sem build command. Deploy.

O site é estático (HTML, CSS e JS, sem dependências). Os números ficam em
`site/assets/data.js` e são um retrato fixo da data do relatório: para atualizar,
gerar um novo `data.js` e fazer push na branch publicada.

Atenção: a URL de produção da Vercel é pública para quem tiver o link. O site
pede aos buscadores para não indexar (`noindex`), mas isso não é senha.
