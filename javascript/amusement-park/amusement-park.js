export function createVisitor(name, age, ticketId) {
  return { name, age, ticketId };
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

export function ticketStatus(tickets, ticketId) {
  if (!(ticketId in tickets)) return 'unknown ticket id';
  if (tickets[ticketId] === null) return 'not sold';
  return `sold to ${tickets[ticketId]}`;
}

export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!';
}

export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
