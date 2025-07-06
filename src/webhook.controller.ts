import { Controller, Post, Req, Res, Headers } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
  @Post()
  handleWebhook(@Req() req: import('express').Request, @Res() res: import('express').Response) {
    const data: unknown = req.body;

    // TODO: validar com assinatura se necessário (dependendo do Clipay)
    console.log('Webhook recebido:', data);

    res.status(200).send('ok');
  }
}
