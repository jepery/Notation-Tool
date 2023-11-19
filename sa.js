let SettlementAgentName = localStorage.getItem('settlement-agent');
let SettlementAgentNumber = localStorage.getItem('settlementagent-number');

document.getElementById('settlement-agent').textContent = SettlementAgentName;
document.getElementById('settlementagent-number').textContent = SettlementAgentNumber;