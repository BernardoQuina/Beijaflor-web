export const ptErrors: { code: string; message: string }[] = [
  {
    code: 'incorrect_number',
    message: 'O número do cartão está incorreto.',
  },
  {
    code: 'invalid_number',
    message: 'O número do cartão não é um número válido de cartão de crédito.',
  },
  {
    code: 'invalid_expiry_month',
    message: 'O mês de validade do cartão não é válido.',
  },
  {
    code: 'invalid_expiry_year',
    message: 'O ano de validade do cartão não é válido.',
  },
  {
    code: 'invalid_cvc',
    message: 'O código de segurança do cartão não é válido.',
  },
  {
    code: 'expired_card',
    message: 'O cartão expirou.',
  },
  {
    code: 'incorrect_cvc',
    message: 'O código de segurança do cartão está incorreto.',
  },
  {
    code: 'incorrect_zip',
    message: 'O CEP do cartão falhou a validação.',
  },
  {
    code: 'card_declined',
    message: 'O cartão foi recusado.',
  },
  {
    code: 'missing',
    message: 'Não existe qualquer cartão em um cliente que está sendo cobrado.',
  },
  {
    code: 'processing_error',
    message: 'Ocorreu um erro durante o processamento do cartão.',
  },
  {
    code: 'rate_limit',
    message:
      'Ocorreu um erro devido a pedidos que atingem a API muito rapidamente. Por favor, avise-nos se está constantemente recebendo esse erro.',
  },
  {
    code: 'payment_intent_authentication_failure',
    message: 'O método de pagamento selecionado falhou na autenticação.'
  }
]
