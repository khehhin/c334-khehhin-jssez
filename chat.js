import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';

createChat({
  mode: 'window',
  webhookUrl: 'https://agenticflows.tokencraze.org/webhook/76b0e227-b950-4dc1-8ba4-9116c9f07504/chat',
  title: 'JS-SEZ advisor',
  initialMessages: [
    'Ask me about zones, incentives or setup steps.',
    'I use SMF JS-SEZ Playbook guidance and can name the relevant page.'
  ],
  loadPreviousSession: false
});

const openAdvisor = document.querySelector('#open-advisor');

openAdvisor?.addEventListener('click', () => {
  const n8nButton = document.querySelector(
    '.n8n-chat-window-toggle, [class*="chat-window-toggle"], [data-testid="chat-window-toggle"]'
  );

  if (n8nButton instanceof HTMLElement) {
    n8nButton.click();
  }
});
