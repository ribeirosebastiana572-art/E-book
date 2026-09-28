const modules=[
["MÓDULO 1 — O JOGO DO DINHEIRO",["Pare de procurar a fórmula mágica","Ativo, passivo e fluxo de caixa","O efeito do tempo"]],
["MÓDULO 2 — ORGANIZAÇÃO FINANCEIRA",["Diagnóstico financeiro de 30 minutos","Orçamento que você consegue cumprir","Reserva de emergência"]],
["MÓDULO 3 — DÍVIDAS E RECUPERAÇÃO",["Mapa das dívidas","Estratégias para sair do endividamento","Reconstruindo depois do aperto"]],
["MÓDULO 4 — AUMENTANDO A RENDA",["Renda é uma variável que pode ser desenvolvida","A escada da habilidade","Renda extra com baixo risco inicial"]],
["MÓDULO 5 — NEGÓCIOS E ALAVANCAGEM",["Produto, serviço e distribuição","Margem e caixa","Processos e repetição"]],
["MÓDULO 6 — CONSTRUÇÃO DE PATRIMÔNIO",["Patrimônio antes da aparência","Diversificação e risco","Inflação, retorno real e custos"]],
["MÓDULO 7 — COMPORTAMENTO E DECISÕES",["Padrão de vida e aumento de renda","Decisões sob pressão","Golpes e promessas de enriquecimento"]],
["MÓDULO 8 — SISTEMA FINANCEIRO PESSOAL",["Seu painel financeiro","Reunião financeira mensal","Automação e disciplina"]],
["MÓDULO 9 — PLANO DE 12 MESES",["Meses 1 e 2: clareza","Meses 3 e 4: estabilização","Meses 5 e 6: renda","Meses 7 e 8: patrimônio","Meses 9 e 10: crescimento","Meses 11 e 12: revisão"]],
["MÓDULO 10 — PLANO DE LONGO PRAZO",["Meta de 3 anos","Meta de 5 anos","Liberdade financeira como conceito","Proteção do patrimônio","O plano mestre"]]
];
const lessons=[];modules.forEach((m,mi)=>m[1].forEach((title,li)=>lessons.push({module:m[0],title,index:lessons.length+1,mi,li})));
const insights=[
"Construção de patrimônio normalmente combina renda, controle de gastos, geração de excedente, aquisição de ativos, competências, tempo e gestão de riscos. O objetivo é substituir atalhos por decisões repetíveis.",
"Observe o efeito da decisão no fluxo de caixa e no patrimônio. O mesmo objeto pode ter funções diferentes conforme o uso: consumo, ferramenta produtiva ou ativo. O contexto importa.",
"Tempo e consistência ampliam o efeito de decisões financeiras. Juros compostos não eliminam risco nem garantem retorno; o foco é criar uma contribuição sustentável e mantê-la.",
"Faça um raio-X: reúna extratos, contas, cartões e dívidas e classifique os gastos. Conhecer os números permite decidir onde ajustar sem depender de impressão.",
"Um orçamento útil transforma prioridades em limites. Separe necessidades, segurança financeira, construção de patrimônio e lazer, e revise o plano durante o mês.",
"Reserva de emergência prioriza liquidez e segurança. Calcule as despesas essenciais, estabeleça uma meta por etapas e reponha o valor depois de utilizá-lo.",
"Liste credor, saldo, taxa, parcela, vencimento e encargos. Duas dívidas com parcelas iguais podem ter custos muito diferentes; primeiro compreenda os contratos.",
"Compare taxas, prazos, custos totais e capacidade real de pagamento. Evite trocar um problema por outro e preserve espaço no orçamento para necessidades essenciais.",
"Depois de um período de aperto, reconstruir exige orçamento, reserva, controle de novas dívidas e revisão dos hábitos que contribuíram para o problema.",
"Renda pode ser desenvolvida por habilidades, experiência, negociação, vendas, prestação de serviços, mudança de função ou negócios. Comece identificando problemas que você consegue resolver.",
"Uma habilidade cresce quando você aprende, pratica, produz, recebe feedback e testa sua oferta. Portfólio e evidência de competência valem mais que estudo passivo isolado.",
"Teste renda extra com baixo investimento inicial antes de comprometer muito capital. Valide demanda, faça ofertas, recolha feedback e ajuste a proposta.",
"Um negócio precisa resolver um problema e também encontrar clientes, entregar valor, preservar margem e gerar retorno. Produto sem distribuição não garante vendas.",
"Faturamento não é lucro, e lucro não é necessariamente caixa disponível. Registre receitas, custos, taxas, impostos, estoque e despesas operacionais.",
"Atividades repetitivas devem virar processos documentados. Um procedimento simples permite medir, treinar, corrigir falhas e melhorar continuamente.",
"Patrimônio líquido não é aparência. Defina riqueza em termos de segurança, liberdade, tempo e objetivos, e acompanhe o patrimônio ao longo do tempo.",
"Diversificação reduz dependência de uma única fonte ou exposição, mas não elimina perdas. Observe concentração em renda, ativos, prazos e liquidez.",
"Inflação reduz poder de compra; retorno nominal não conta toda a história. Considere inflação, custos, impostos, liquidez e risco ao comparar alternativas.",
"Quando a renda aumenta, o padrão de vida pode aumentar junto. Defina antecipadamente quanto dos aumentos será destinado a objetivos financeiros.",
"Decisões sob pressão tendem a reduzir a qualidade da análise. Crie uma pausa, verifique números, custos, riscos, prazo e alternativas antes de decidir.",
"Promessas de enriquecimento rápido, urgência artificial e retornos sem risco são sinais para aumentar a cautela. Verifique informações e não comprometa dinheiro que você não pode perder.",
"Seu painel financeiro deve mostrar poucas métricas úteis: renda, despesas, dívidas, reserva, patrimônio e metas. O objetivo é enxergar tendência, não produzir burocracia.",
"Uma reunião financeira mensal transforma números em decisões. Revise o que aconteceu, compare com o plano e escolha poucas ações para o próximo mês.",
"Automatização reduz dependência de força de vontade. Quando possível, programe pagamentos, transferências para metas e revisões recorrentes.",
"Nos primeiros dois meses, o foco é clareza: conhecer entradas, saídas, dívidas, patrimônio e prioridades. Sem diagnóstico, metas podem ser apenas desejos.",
"Depois da clareza, estabilize: ajuste despesas, organize pagamentos e crie margem para imprevistos. O objetivo é reduzir fragilidade financeira.",
"Com a base mais estável, trabalhe a renda: desenvolva uma habilidade, teste uma oferta e procure maneiras sustentáveis de aumentar a capacidade de gerar recursos.",
"Na etapa de patrimônio, direcione excedentes para objetivos de longo prazo de acordo com seu perfil, necessidades de liquidez, custos e tolerância a risco.",
"Com mais estabilidade, procure crescimento com controle. Aumentar renda e patrimônio deve vir acompanhado de processos, acompanhamento e limites de risco.",
"Feche o primeiro ano comparando diagnóstico e situação atual. Registre o que funcionou, o que falhou e quais hábitos devem permanecer.",
"Uma meta de três anos deve ser mensurável. Defina patrimônio, renda, dívidas, reserva, habilidades e outros indicadores relevantes, com revisões periódicas.",
"Uma meta de cinco anos exige cenários e flexibilidade. Trabalhe com hipóteses, não promessas, e atualize o plano conforme renda, despesas e circunstâncias mudarem.",
"Liberdade financeira pode ser tratada como um conceito de capacidade: ter mais margem para escolher como usar tempo e recursos. A definição deve ser pessoal e mensurável.",
"Construir é apenas parte do trabalho. Organização documental, seguros adequados, reservas, diversificação e prevenção de fraudes ajudam a reduzir vulnerabilidades.",
"O plano mestre reúne diagnóstico, renda, orçamento, dívidas, reserva, patrimônio, metas, riscos e rotina de revisão em um sistema que pode ser executado e ajustado."
];
const chapterList=document.getElementById("chapterList"),reader=document.getElementById("reader"),welcome=document.getElementById("inicio"),titleEl=document.getElementById("chapterTitle"),bodyEl=document.getElementById("chapterBody"),moduleEl=document.getElementById("moduleLabel"),countEl=document.getElementById("chapterCount"),progressBar=document.getElementById("progressBar"),progressText=document.getElementById("progressText"),sideProgress=document.getElementById("sideProgress"),sidebar=document.getElementById("sidebar");
let current=Number(localStorage.getItem("ebook-current")||0),done=JSON.parse(localStorage.getItem("ebook-done")||"[]");
lessons.forEach((l,i)=>{if(!chapterList)return;const b=document.createElement("button");b.textContent=(i+1).toString().padStart(2,"0")+"  "+l.title;b.dataset.i=i;b.addEventListener("click",()=>openLesson(i));if(i===0)b.classList.add("active");chapterList.appendChild(b);});
modules.forEach((m,mi)=>{const buttons=[...chapterList.querySelectorAll("button")];const first=lessons.findIndex(x=>x.mi===mi);const h=document.createElement("button");h.className="module";h.textContent=m[0].replace(/^MÓDULO \d+ — /,"");h.addEventListener("click",()=>openLesson(first));chapterList.insertBefore(h,buttons[first]||null);});
function updateProgress(){const pct=Math.round(done.length/lessons.length*100);progressBar.style.width=pct+"%";sideProgress.style.width=pct+"%";progressText.textContent=pct+"% concluído";}
function openLesson(i){current=Math.max(0,Math.min(i,lessons.length-1));const l=lessons[current];welcome.hidden=true;reader.hidden=false;moduleEl.textContent=l.module;countEl.textContent=(current+1)+" / "+lessons.length;titleEl.textContent="Aula "+l.index+" — "+l.title;const insight=insights[current]||"Transforme o tema desta aula em uma decisão concreta e mensurável.";bodyEl.innerHTML="<p>"+insight+"</p><div class='example'><b>Exemplo prático</b><p>Imagine uma situação real da sua rotina. Observe entradas, saídas, prazo, custo e risco antes de escolher uma ação.</p></div><div class='action'><b>Ação imediata:</b> escolha uma pequena ação que possa ser executada hoje e registre o resultado.</div><h3>Checklist de execução</h3><ul><li>Defina o que precisa mudar.</li><li>Escolha uma primeira ação simples.</li><li>Defina como o resultado será medido.</li><li>Revise o resultado e ajuste o próximo passo.</li></ul>";document.querySelectorAll("#chapterList button").forEach(x=>x.classList.toggle("active",Number(x.dataset.i)===current));document.getElementById("changeInput").value=localStorage.getItem("ex-"+current+"-change")||"";document.getElementById("actionInput").value=localStorage.getItem("ex-"+current+"-action")||"";document.getElementById("measureInput").value=localStorage.getItem("ex-"+current+"-measure")||"";sidebar.classList.remove("open");localStorage.setItem("ebook-current",current);if(!done.includes(current)){done.push(current);localStorage.setItem("ebook-done",JSON.stringify(done));}updateProgress();window.scrollTo({top:0,behavior:"smooth"});document.getElementById("prevBtn").disabled=current===0;document.getElementById("nextBtn").textContent=current===lessons.length-1?"Concluir leitura ✓":"Próxima →";}
document.getElementById("startBtn").onclick=()=>openLesson(current);document.getElementById("prevBtn").onclick=()=>openLesson(current-1);document.getElementById("nextBtn").onclick=()=>openLesson(Math.min(current+1,lessons.length-1));document.getElementById("menuBtn").onclick=()=>sidebar.classList.add("open");document.getElementById("closeMenu").onclick=()=>sidebar.classList.remove("open");document.getElementById("saveExercise").onclick=()=>{localStorage.setItem("ex-"+current+"-change",document.getElementById("changeInput").value);localStorage.setItem("ex-"+current+"-action",document.getElementById("actionInput").value);localStorage.setItem("ex-"+current+"-measure",document.getElementById("measureInput").value);document.getElementById("savedMsg").textContent="Salvo neste dispositivo.";};updateProgress();
